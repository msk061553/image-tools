"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getToolUiLocale, toolUiTranslations } from "@/lib/tool-ui-i18n";

type OutputFormat = "jpeg" | "webp" | "png";

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

export default function ImageResizer() {
  const pathname = usePathname();
  const t = toolUiTranslations[getToolUiLocale(pathname)];
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [keepRatio, setKeepRatio] = useState(true);
  const [percentage, setPercentage] = useState(100);

  const [format, setFormat] =
    useState<OutputFormat>("webp");

  const [quality, setQuality] = useState(90);

  const [resultUrl, setResultUrl] = useState<string | null>(
    null
  );

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
    if (!selectedFile) return;

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
      setOriginalWidth(image.naturalWidth);
      setOriginalHeight(image.naturalHeight);

      setWidth(image.naturalWidth);
      setHeight(image.naturalHeight);
      setPercentage(100);

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

  function handleWidthChange(value: number) {
    if (!Number.isFinite(value) || value < 1) {
      setWidth(0);
      return;
    }

    const nextWidth = Math.round(value);

    setWidth(nextWidth);

    if (
      keepRatio &&
      originalWidth > 0 &&
      originalHeight > 0
    ) {
      const ratio =
        originalHeight / originalWidth;

      setHeight(
        Math.max(1, Math.round(nextWidth * ratio))
      );
    }

    const nextPercentage =
      originalWidth > 0
        ? (nextWidth / originalWidth) * 100
        : 100;

    setPercentage(
      Math.max(1, Math.min(500, nextPercentage))
    );

    clearResult();
  }

  function handleHeightChange(value: number) {
    if (!Number.isFinite(value) || value < 1) {
      setHeight(0);
      return;
    }

    const nextHeight = Math.round(value);

    setHeight(nextHeight);

    if (
      keepRatio &&
      originalWidth > 0 &&
      originalHeight > 0
    ) {
      const ratio =
        originalWidth / originalHeight;

      setWidth(
        Math.max(1, Math.round(nextHeight * ratio))
      );
    }

    const nextPercentage =
      originalHeight > 0
        ? (nextHeight / originalHeight) * 100
        : 100;

    setPercentage(
      Math.max(1, Math.min(500, nextPercentage))
    );

    clearResult();
  }

  function handlePercentageChange(value: number) {
    const nextPercentage = Math.max(
      1,
      Math.min(500, value)
    );

    setPercentage(nextPercentage);

    if (
      originalWidth > 0 &&
      originalHeight > 0
    ) {
      setWidth(
        Math.max(
          1,
          Math.round(
            originalWidth *
              (nextPercentage / 100)
          )
        )
      );

      setHeight(
        Math.max(
          1,
          Math.round(
            originalHeight *
              (nextPercentage / 100)
          )
        )
      );
    }

    clearResult();
  }

  function toggleKeepRatio() {
    setKeepRatio((current) => !current);
  }

  async function resizeImage() {
    if (!file || width < 1 || height < 1) {
      return;
    }

    if (width > 10000 || height > 10000) {
      setError(
        t.resizeDimension
      );
      return;
    }

    if (width * height > 50_000_000) {
      setError(
        t.resizePixels
      );
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

      const canvas = document.createElement("canvas");

      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error(
          t.canvas
        );
      }

      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      context.drawImage(
        image,
        0,
        0,
        width,
        height
      );

      URL.revokeObjectURL(imageUrl);

      const mimeType = getMimeType(format);

      const blob = await new Promise<Blob | null>(
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
          t.createResized
        );
      }

      const url = URL.createObjectURL(blob);

      setResultUrl(url);
      setResultSize(blob.size);
      setResultWidth(width);
      setResultHeight(height);
    } catch (processingError) {
      console.error(processingError);

      setError(t.resizeError);
    } finally {
      setIsProcessing(false);
    }
  }

  function downloadResult() {
    if (!resultUrl || !file) {
      return;
    }

    const extension = getExtension(format);

    const originalName = file.name.replace(
      /\.[^/.]+$/,
      ""
    );

    const link = document.createElement("a");

    link.href = resultUrl;
    link.download = `${originalName}-${width}x${height}.${extension}`;

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

    setOriginalWidth(0);
    setOriginalHeight(0);

    setWidth(0);
    setHeight(0);

    setPercentage(100);

    setResultUrl(null);
    setResultSize(0);
    setResultWidth(0);
    setResultHeight(0);

    setError("");
  }

  return (
    <div className="mx-auto max-w-4xl">
      {!file && (
        <div
          onDragOver={(event) => {
            event.preventDefault();
          }}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
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
            ↗
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
          {/* Preview */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-gray-100 px-6 py-4">
              <div className="min-w-0">
                <p className="truncate font-semibold text-gray-900">
                  {file.name}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {originalWidth} × {originalHeight} ·{" "}
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

            <div className="bg-gray-50 p-4">
              <div className="overflow-hidden rounded-2xl bg-white">
                <img
                  src={previewUrl}
                  alt={t.altResize}
                  className="mx-auto max-h-[500px] w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              {t.resizeSettings}
            </h2>

            {/* Dimensions */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="resize-width"
                  className="text-sm font-semibold text-gray-900"
                >
                  {t.width}
                </label>

                <div className="relative mt-2">
                  <input
                    id="resize-width"
                    type="number"
                    min="1"
                    max="10000"
                    value={width || ""}
                    onChange={(event) =>
                      handleWidthChange(
                        Number(event.target.value)
                      )
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-16 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                    px
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="resize-height"
                  className="text-sm font-semibold text-gray-900"
                >
                  {t.height}
                </label>

                <div className="relative mt-2">
                  <input
                    id="resize-height"
                    type="number"
                    min="1"
                    max="10000"
                    value={height || ""}
                    onChange={(event) =>
                      handleHeightChange(
                        Number(event.target.value)
                      )
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-16 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                    px
                  </span>
                </div>
              </div>
            </div>

            {/* Keep ratio */}
            <label className="mt-5 flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={keepRatio}
                onChange={toggleKeepRatio}
                className="h-4 w-4 rounded border-gray-300 accent-blue-600"
              />

              <span className="text-sm text-gray-700">
                {t.keepRatio}
              </span>
            </label>

            {/* Percentage */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="resize-percentage"
                  className="text-sm font-semibold text-gray-900"
                >
                  Scale
                </label>

                <span className="font-semibold text-blue-600">
                  {Math.round(percentage)}%
                </span>
              </div>

              <input
                id="resize-percentage"
                type="range"
                min="1"
                max="500"
                step="1"
                value={percentage}
                onChange={(event) =>
                  handlePercentageChange(
                    Number(event.target.value)
                  )
                }
                className="mt-4 w-full accent-blue-600"
              />

              <div className="mt-2 flex justify-between text-xs text-gray-400">
                <span>1%</span>
                <span>100%</span>
                <span>500%</span>
              </div>
            </div>

            {/* Output format */}
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
                ).map(([value, label]) => (
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
                ))}
              </div>
            </div>

            {/* Quality */}
            {format !== "png" && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="resize-quality"
                    className="text-sm font-semibold text-gray-900"
                  >
                    {t.quality}
                  </label>

                  <span className="font-semibold text-blue-600">
                    {quality}
                  </span>
                </div>

                <input
                  id="resize-quality"
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={quality}
                  onChange={(event) => {
                    setQuality(
                      Number(event.target.value)
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
              onClick={resizeImage}
              disabled={
                isProcessing ||
                width < 1 ||
                height < 1
              }
              className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isProcessing
                ? "Resizing..."
                : "Resize Image"}
            </button>
          </div>

          {/* Result */}
          {resultUrl && (
            <div className="rounded-3xl border border-green-100 bg-green-50/50 p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {t.resizeComplete}
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm text-gray-500">
                    {t.original}
                  </p>

                  <p className="mt-2 text-xl font-bold text-gray-900">
                    {originalWidth} × {originalHeight}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {formatFileSize(file.size)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm text-gray-500">
                    {t.resized}
                  </p>

                  <p className="mt-2 text-xl font-bold text-blue-600">
                    {resultWidth} × {resultHeight}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {formatFileSize(resultSize)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm text-gray-500">
                    Scale
                  </p>

                  <p className="mt-2 text-xl font-bold text-green-600">
                    {Math.round(percentage)}%
                  </p>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl bg-white p-4">
                <img
                  src={resultUrl}
                  alt={t.altResizeResult}
                  className="mx-auto max-h-[500px] w-auto max-w-full object-contain"
                />
              </div>

              <button
                type="button"
                onClick={downloadResult}
                className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700"
              >
                {t.downloadResized}
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