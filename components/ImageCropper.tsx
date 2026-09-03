"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { getToolUiLocale, toolUiTranslations } from "@/lib/tool-ui-i18n";

type AspectRatio =
  | "free"
  | "1:1"
  | "4:3"
  | "16:9"
  | "3:2";

type OutputFormat = "jpeg" | "webp" | "png";

type CropArea = {
  x: number;
  y: number;
  width: number;
  height: number;
};

function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function getMimeType(format: OutputFormat) {
  if (format === "jpeg") return "image/jpeg";
  if (format === "webp") return "image/webp";
  return "image/png";
}

function getExtension(format: OutputFormat) {
  if (format === "jpeg") return "jpg";
  return format;
}

function getRatioValue(ratio: AspectRatio) {
  if (ratio === "1:1") return 1;
  if (ratio === "4:3") return 4 / 3;
  if (ratio === "16:9") return 16 / 9;
  if (ratio === "3:2") return 3 / 2;

  return null;
}

export default function ImageCropper() {
  const pathname = usePathname();
  const t = toolUiTranslations[getToolUiLocale(pathname)];
  const inputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null);

  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  const [displayWidth, setDisplayWidth] = useState(0);
  const [displayHeight, setDisplayHeight] = useState(0);

  const [ratio, setRatio] =
    useState<AspectRatio>("free");

  const [crop, setCrop] = useState<CropArea | null>(
    null
  );

  const [isDragging, setIsDragging] = useState(false);

  const [startPoint, setStartPoint] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const [format, setFormat] =
    useState<OutputFormat>("webp");

  const [quality, setQuality] = useState(90);

  const [resultUrl, setResultUrl] =
    useState<string | null>(null);

  const [resultSize, setResultSize] = useState(0);
  const [resultWidth, setResultWidth] = useState(0);
  const [resultHeight, setResultHeight] = useState(0);

  const [isProcessing, setIsProcessing] =
    useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      if (resultUrl) {
        URL.revokeObjectURL(resultUrl);
      }
    };
  }, [previewUrl, resultUrl]);

  function clearResult() {
    if (resultUrl) {
      URL.revokeObjectURL(resultUrl);
    }

    setResultUrl(null);
    setResultSize(0);
    setResultWidth(0);
    setResultHeight(0);
  }

  function selectFile(selectedFile: File | null) {
    if (!selectedFile) {
      return;
    }

    if (!selectedFile.type.startsWith("image/")) {
      setError(t.invalidImage);
      return;
    }

    if (selectedFile.size > 50 * 1024 * 1024) {
      setError(t.maxFile);
      return;
    }

    setError("");
    clearResult();

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const url = URL.createObjectURL(selectedFile);
    const image = new Image();

    image.onload = () => {
      setImageWidth(image.naturalWidth);
      setImageHeight(image.naturalHeight);
      setCrop(null);

      URL.revokeObjectURL(image.src);
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      setError(t.readSelected);
    };

    image.src = url;

    setFile(selectedFile);
    setPreviewUrl(url);
  }

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFile =
      event.target.files?.[0] ?? null;

    selectFile(selectedFile);

    event.target.value = "";
  }

  function handleDrop(
    event: React.DragEvent<HTMLDivElement>
  ) {
    event.preventDefault();

    const droppedFile =
      event.dataTransfer.files?.[0] ?? null;

    selectFile(droppedFile);
  }

  function getCanvasPoint(
    event: React.PointerEvent<HTMLCanvasElement>
  ) {
    const canvas = canvasRef.current;

    if (!canvas) {
      return null;
    }

    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: Math.max(
        0,
        Math.min(
          canvas.width,
          (event.clientX - rect.left) * scaleX
        )
      ),
      y: Math.max(
        0,
        Math.min(
          canvas.height,
          (event.clientY - rect.top) * scaleY
        )
      ),
    };
  }

  function normalizeCrop(
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) {
    let x = Math.min(start.x, end.x);
    let y = Math.min(start.y, end.y);

    let width = Math.abs(end.x - start.x);
    let height = Math.abs(end.y - start.y);

    const selectedRatio = getRatioValue(ratio);

    if (selectedRatio && width > 0 && height > 0) {
      if (width / height > selectedRatio) {
        width = height * selectedRatio;
      } else {
        height = width / selectedRatio;
      }

      if (end.x < start.x) {
        x = start.x - width;
      }

      if (end.y < start.y) {
        y = start.y - height;
      }

      x = Math.max(
        0,
        Math.min(
          canvasRef.current?.width ?? imageWidth,
          x
        )
      );

      y = Math.max(
        0,
        Math.min(
          canvasRef.current?.height ?? imageHeight,
          y
        )
      );

      if (x + width > imageWidth) {
        width = imageWidth - x;
      }

      if (y + height > imageHeight) {
        height = imageHeight - y;
      }
    }

    return {
      x,
      y,
      width,
      height,
    };
  }

  function handlePointerDown(
    event: React.PointerEvent<HTMLCanvasElement>
  ) {
    const point = getCanvasPoint(event);

    if (!point) {
      return;
    }

    clearResult();

    event.currentTarget.setPointerCapture(
      event.pointerId
    );

    setStartPoint(point);
    setIsDragging(true);

    setCrop({
      x: point.x,
      y: point.y,
      width: 0,
      height: 0,
    });
  }

  function handlePointerMove(
    event: React.PointerEvent<HTMLCanvasElement>
  ) {
    if (!isDragging || !startPoint) {
      return;
    }

    const point = getCanvasPoint(event);

    if (!point) {
      return;
    }

    setCrop(
      normalizeCrop(startPoint, point)
    );
  }

  function handlePointerUp(
    event: React.PointerEvent<HTMLCanvasElement>
  ) {
    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId
      )
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    }

    setIsDragging(false);
    setStartPoint(null);
  }

  function drawCanvas() {
    const canvas = canvasRef.current;
    const image = imageRef.current;

    if (
      !canvas ||
      !image ||
      !image.naturalWidth ||
      !image.naturalHeight
    ) {
      return;
    }

    const maxWidth = 900;
    const maxHeight = 600;

    const scale = Math.min(
      1,
      maxWidth / image.naturalWidth,
      maxHeight / image.naturalHeight
    );

    const width = Math.round(
      image.naturalWidth * scale
    );

    const height = Math.round(
      image.naturalHeight * scale
    );

    canvas.width = width;
    canvas.height = height;

    setDisplayWidth(width);
    setDisplayHeight(height);

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    context.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    context.drawImage(
      image,
      0,
      0,
      width,
      height
    );

    if (
      crop &&
      crop.width > 0 &&
      crop.height > 0
    ) {
      context.save();

      context.fillStyle =
        "rgba(0, 0, 0, 0.45)";

      context.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      context.globalCompositeOperation =
        "destination-out";

      context.fillRect(
        crop.x,
        crop.y,
        crop.width,
        crop.height
      );

      context.globalCompositeOperation =
        "source-over";

      context.strokeStyle = "#ffffff";
      context.lineWidth = 2;

      context.strokeRect(
        crop.x,
        crop.y,
        crop.width,
        crop.height
      );

      context.restore();
    }
  }

  useEffect(() => {
    drawCanvas();
  }, [
    previewUrl,
    crop,
    imageWidth,
    imageHeight,
  ]);

  function changeRatio(
    nextRatio: AspectRatio
  ) {
    setRatio(nextRatio);
    clearResult();

    if (
      !crop ||
      crop.width <= 0 ||
      crop.height <= 0
    ) {
      return;
    }

    const selectedRatio =
      getRatioValue(nextRatio);

    if (!selectedRatio) {
      return;
    }

    let width = crop.width;
    let height = width / selectedRatio;

    if (height > imageHeight - crop.y) {
      height = imageHeight - crop.y;
      width = height * selectedRatio;
    }

    if (width > imageWidth - crop.x) {
      width = imageWidth - crop.x;
      height = width / selectedRatio;
    }

    setCrop({
      ...crop,
      width: Math.max(1, width),
      height: Math.max(1, height),
    });
  }

  async function cropImage() {
    if (
      !file ||
      !crop ||
      crop.width < 1 ||
      crop.height < 1
    ) {
      setError(t.cropAreaFirst);
      return;
    }

    setError("");
    setIsProcessing(true);

    try {
      clearResult();

      const imageUrl = URL.createObjectURL(file);
      const image = new Image();

      await new Promise<void>((resolve, reject) => {
        image.onload = () => resolve();

        image.onerror = () =>
          reject(
            new Error(t.loadImage)
          );

        image.src = imageUrl;
      });

      const canvas =
        document.createElement("canvas");

      const sourceScaleX =
        image.naturalWidth /
        displayWidth;

      const sourceScaleY =
        image.naturalHeight /
        displayHeight;

      const sourceX =
        crop.x * sourceScaleX;

      const sourceY =
        crop.y * sourceScaleY;

      const sourceWidth =
        crop.width * sourceScaleX;

      const sourceHeight =
        crop.height * sourceScaleY;

      canvas.width = Math.round(sourceWidth);
      canvas.height = Math.round(sourceHeight);

      if (
        canvas.width < 1 ||
        canvas.height < 1
      ) {
        throw new Error(
          t.cropSmall
        );
      }

      if (
        canvas.width * canvas.height >
        50_000_000
      ) {
        throw new Error(
          t.cropLarge
        );
      }

      const context =
        canvas.getContext("2d");

      if (!context) {
        throw new Error(
          t.canvas
        );
      }

      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      context.drawImage(
        image,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        0,
        0,
        canvas.width,
        canvas.height
      );

      URL.revokeObjectURL(imageUrl);

      const mimeType =
        getMimeType(format);

      const blob =
        await new Promise<Blob | null>(
          (resolve) => {
            if (format === "png") {
              canvas.toBlob(
                resolve,
                mimeType
              );
            } else {
              canvas.toBlob(
                resolve,
                mimeType,
                quality / 100
              );
            }
          }
        );

      if (!blob) {
        throw new Error(
          t.createCropped
        );
      }

      const url =
        URL.createObjectURL(blob);

      setResultUrl(url);
      setResultSize(blob.size);
      setResultWidth(canvas.width);
      setResultHeight(canvas.height);
    } catch (processingError) {
      console.error(processingError);

      setError(t.cropError);
    } finally {
      setIsProcessing(false);
    }
  }

  function downloadResult() {
    if (!resultUrl || !file) {
      return;
    }

    const extension =
      getExtension(format);

    const originalName =
      file.name.replace(
        /\.[^/.]+$/,
        ""
      );

    const link =
      document.createElement("a");

    link.href = resultUrl;

    link.download =
      `${originalName}-cropped.${extension}`;

    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function removeFile() {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (resultUrl) {
      URL.revokeObjectURL(resultUrl);
    }

    setFile(null);
    setPreviewUrl(null);

    setImageWidth(0);
    setImageHeight(0);

    setDisplayWidth(0);
    setDisplayHeight(0);

    setCrop(null);

    setResultUrl(null);
    setResultSize(0);
    setResultWidth(0);
    setResultHeight(0);

    setError("");
  }

  return (
    <div className="mx-auto max-w-5xl">
      {!file && (
        <div
          onDragOver={(event) => {
            event.preventDefault();
          }}
          onDrop={handleDrop}
          onClick={() =>
            inputRef.current?.click()
          }
          className="cursor-pointer rounded-3xl border-2 border-dashed border-blue-200 bg-blue-50/30 px-6 py-16 text-center transition hover:border-blue-300 hover:bg-blue-50"
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl text-blue-600">
            ⌗
          </div>

          <h2 className="mt-5 text-xl font-semibold text-gray-900">
            {t.drop}
          </h2>

          <p className="mt-2 text-gray-500">
            {t.browse}
          </p>

          <p className="mt-5 text-sm text-gray-400">
            {t.formats}
          </p>
        </div>
      )}

      {file && previewUrl && (
        <div className="space-y-6">
          {/* Image preview and crop area */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-gray-100 px-6 py-4">
              <div className="min-w-0">
                <p className="truncate font-semibold text-gray-900">
                  {file.name}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {imageWidth} × {imageHeight} ·{" "}
                  {formatFileSize(file.size)}
                </p>
              </div>

              <button
                type="button"
                onClick={removeFile}
                className="shrink-0 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
              >
                {t.remove}
              </button>
            </div>

            <div className="bg-gray-900 p-4 sm:p-6">
              <img
                ref={imageRef}
                src={previewUrl}
                alt=""
                className="hidden"
                onLoad={() => {
                  drawCanvas();
                }}
              />

              <canvas
                ref={canvasRef}
                onPointerDown={
                  handlePointerDown
                }
                onPointerMove={
                  handlePointerMove
                }
                onPointerUp={
                  handlePointerUp
                }
                onPointerCancel={
                  handlePointerUp
                }
                className="mx-auto block max-h-[600px] max-w-full cursor-crosshair touch-none"
                style={{
                  width:
                    displayWidth || "auto",
                  height:
                    displayHeight || "auto",
                }}
              />
            </div>

            <div className="border-t border-gray-100 px-6 py-4 text-center text-sm text-gray-500">
              Drag across the image to select the
              area you want to crop.
            </div>
          </div>

          {/* Crop settings */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              {t.cropSettings}
            </h2>

            <div className="mt-6">
              <label className="text-sm font-semibold text-gray-900">
                {t.aspectRatio}
              </label>

              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {(
                  [
                    ["free", "Free"],
                    ["1:1", "1:1"],
                    ["4:3", "4:3"],
                    ["16:9", "16:9"],
                    ["3:2", "3:2"],
                  ] as const
                ).map(
                  ([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() =>
                        changeRatio(value)
                      }
                      className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                        ratio === value
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 text-gray-600 hover:border-blue-200"
                      }`}
                    >
                      {label}
                    </button>
                  )
                )}
              </div>
            </div>

            {crop &&
              crop.width > 0 &&
              crop.height > 0 && (
                <div className="mt-5 rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
                  {t.selectedArea}{" "}
                  <strong>
                    {Math.round(
                      crop.width *
                        (imageWidth /
                          displayWidth)
                    )}{" "}
                    ×{" "}
                    {Math.round(
                      crop.height *
                        (imageHeight /
                          displayHeight)
                    )}{" "}
                    px
                  </strong>
                </div>
              )}

            <div className="mt-8">
              <label className="text-sm font-semibold text-gray-900">
                {t.outputFormat}
              </label>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {(
                  [
                    ["jpeg", "JPG"],
                    ["webp", "WebP"],
                    ["png", "PNG"],
                  ] as const
                ).map(
                  ([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => {
                        setFormat(value);
                        clearResult();
                      }}
                      className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                        format === value
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 text-gray-600 hover:border-blue-200"
                      }`}
                    >
                      {label}
                    </button>
                  )
                )}
              </div>
            </div>

            {format !== "png" && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="crop-quality"
                    className="text-sm font-semibold text-gray-900"
                  >
                    {t.quality}
                  </label>

                  <span className="font-semibold text-blue-600">
                    {quality}
                  </span>
                </div>

                <input
                  id="crop-quality"
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={quality}
                  onChange={(event) => {
                    setQuality(
                      Number(
                        event.target.value
                      )
                    );
                    clearResult();
                  }}
                  className="mt-4 w-full accent-blue-600"
                />

                <div className="mt-2 flex justify-between text-xs text-gray-400">
                  <span>{t.smaller}</span>
                  <span>{t.higher}</span>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={cropImage}
              disabled={
                isProcessing ||
                !crop ||
                crop.width < 1 ||
                crop.height < 1
              }
              className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isProcessing
                ? "Cropping..."
                : "Crop Image"}
            </button>
          </div>

          {/* Result */}
          {resultUrl && (
            <div className="rounded-3xl border border-green-100 bg-green-50/50 p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {t.cropComplete}
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm text-gray-500">
                    {t.original}
                  </p>

                  <p className="mt-2 text-xl font-bold text-gray-900">
                    {imageWidth} ×{" "}
                    {imageHeight}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {formatFileSize(
                      file.size
                    )}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm text-gray-500">
                    {t.cropped}
                  </p>

                  <p className="mt-2 text-xl font-bold text-blue-600">
                    {resultWidth} ×{" "}
                    {resultHeight}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {formatFileSize(
                      resultSize
                    )}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm text-gray-500">
                    Format
                  </p>

                  <p className="mt-2 text-xl font-bold uppercase text-green-600">
                    {getExtension(format)}
                  </p>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl bg-white p-4">
                <img
                  src={resultUrl}
                  alt={t.altCrop}
                  className="mx-auto max-h-[500px] max-w-full object-contain"
                />
              </div>

              <button
                type="button"
                onClick={downloadResult}
                className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700"
              >
                {t.downloadCropped}
              </button>
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
}