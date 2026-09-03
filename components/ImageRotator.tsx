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

export default function ImageRotator() {
  const pathname = usePathname();
  const t = toolUiTranslations[getToolUiLocale(pathname)];
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null);

  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);

  const [rotation, setRotation] = useState(0);
  const [flipHorizontal, setFlipHorizontal] =
    useState(false);
  const [flipVertical, setFlipVertical] =
    useState(false);

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
      setOriginalWidth(image.naturalWidth);
      setOriginalHeight(image.naturalHeight);

      URL.revokeObjectURL(image.src);
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      setError(t.readSelected);
    };

    image.src = url;

    setFile(selectedFile);
    setPreviewUrl(url);

    setRotation(0);
    setFlipHorizontal(false);
    setFlipVertical(false);
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

  function rotateClockwise() {
    setRotation((current) =>
      (current + 90) % 360
    );

    clearResult();
  }

  function rotateCounterClockwise() {
    setRotation((current) =>
      (current + 270) % 360
    );

    clearResult();
  }

  function rotate180() {
    setRotation((current) =>
      (current + 180) % 360
    );

    clearResult();
  }

  function toggleHorizontalFlip() {
    setFlipHorizontal((current) => !current);
    clearResult();
  }

  function toggleVerticalFlip() {
    setFlipVertical((current) => !current);
    clearResult();
  }

  function resetTransform() {
    setRotation(0);
    setFlipHorizontal(false);
    setFlipVertical(false);
    clearResult();
  }

  async function processImage() {
    if (!file) {
      return;
    }

    setError("");
    setIsProcessing(true);

    try {
      clearResult();

      const imageUrl =
        URL.createObjectURL(file);

      const image = new Image();

      await new Promise<void>((resolve, reject) => {
        image.onload = () => resolve();

        image.onerror = () =>
          reject(
            new Error(t.loadImage)
          );

        image.src = imageUrl;
      });

      const normalizedRotation =
        ((rotation % 360) + 360) % 360;

      const isQuarterTurn =
        normalizedRotation === 90 ||
        normalizedRotation === 270;

      const canvas =
        document.createElement("canvas");

      const outputWidth = isQuarterTurn
        ? image.naturalHeight
        : image.naturalWidth;

      const outputHeight = isQuarterTurn
        ? image.naturalWidth
        : image.naturalHeight;

      if (
        outputWidth * outputHeight >
        50_000_000
      ) {
        throw new Error(
          t.tooLarge
        );
      }

      canvas.width = outputWidth;
      canvas.height = outputHeight;

      const context =
        canvas.getContext("2d");

      if (!context) {
        throw new Error(
          t.canvas
        );
      }

      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      context.save();

      context.translate(
        outputWidth / 2,
        outputHeight / 2
      );

      context.rotate(
        (normalizedRotation * Math.PI) / 180
      );

      context.scale(
        flipHorizontal ? -1 : 1,
        flipVertical ? -1 : 1
      );

      context.drawImage(
        image,
        -image.naturalWidth / 2,
        -image.naturalHeight / 2,
        image.naturalWidth,
        image.naturalHeight
      );

      context.restore();

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
          t.createProcessed
        );
      }

      const url =
        URL.createObjectURL(blob);

      setResultUrl(url);
      setResultSize(blob.size);
      setResultWidth(outputWidth);
      setResultHeight(outputHeight);
    } catch (processingError) {
      console.error(processingError);

      setError(t.processError);
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

    const suffixParts: string[] = [];

    if (rotation !== 0) {
      suffixParts.push(
        `rotate-${rotation}`
      );
    }

    if (flipHorizontal) {
      suffixParts.push("flip-h");
    }

    if (flipVertical) {
      suffixParts.push("flip-v");
    }

    const suffix =
      suffixParts.length > 0
        ? `-${suffixParts.join("-")}`
        : "-edited";

    link.href = resultUrl;

    link.download =
      `${originalName}${suffix}.${extension}`;

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

    setRotation(0);
    setFlipHorizontal(false);
    setFlipVertical(false);

    setResultUrl(null);
    setResultSize(0);
    setResultWidth(0);
    setResultHeight(0);

    setError("");
  }

  const previewTransform = `
    rotate(${rotation}deg)
    scaleX(${flipHorizontal ? -1 : 1})
    scaleY(${flipVertical ? -1 : 1})
  `;

  const displayWidth =
    rotation === 90 || rotation === 270
      ? originalHeight
      : originalWidth;

  const displayHeight =
    rotation === 90 || rotation === 270
      ? originalWidth
      : originalHeight;

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
            ↻
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
                  {originalWidth} ×{" "}
                  {originalHeight} ·{" "}
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

            <div className="flex min-h-[350px] items-center justify-center overflow-hidden bg-gray-900 p-6">
              <div className="flex max-h-[600px] max-w-full items-center justify-center overflow-hidden">
                <img
                  src={previewUrl}
                  alt={t.altPreview}
                  style={{
                    transform: previewTransform,
                    maxWidth: "min(800px, 80vw)",
                    maxHeight: "600px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            <div className="border-t border-gray-100 px-6 py-4 text-center text-sm text-gray-500">
              {t.previewUpdates}
              the image.
            </div>
          </div>

          {/* Transform controls */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              {t.rotateFlip}
            </h2>

            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-900">
                {t.rotate}
              </p>

              <div className="mt-3 grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={
                    rotateCounterClockwise
                  }
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  ↺ 90° Left
                </button>

                <button
                  type="button"
                  onClick={rotate180}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  ↻ 180°
                </button>

                <button
                  type="button"
                  onClick={rotateClockwise}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  ↻ 90° Right
                </button>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-gray-900">
                {t.flip}
              </p>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={
                    toggleHorizontalFlip
                  }
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                    flipHorizontal
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-700 hover:border-blue-200"
                  }`}
                >
                  {t.flipH}
                </button>

                <button
                  type="button"
                  onClick={
                    toggleVerticalFlip
                  }
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                    flipVertical
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-700 hover:border-blue-200"
                  }`}
                >
                  {t.flipV}
                </button>
              </div>
            </div>

            <div className="mt-5">
              <button
                type="button"
                onClick={resetTransform}
                disabled={
                  rotation === 0 &&
                  !flipHorizontal &&
                  !flipVertical
                }
                className="text-sm font-medium text-gray-500 transition hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {t.reset}
              </button>
            </div>

            <div className="mt-8 rounded-xl bg-gray-50 p-4">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                <span>
                  Rotation:{" "}
                  <strong className="text-gray-900">
                    {rotation}°
                  </strong>
                </span>

                <span>
                  Output:{" "}
                  <strong className="text-gray-900">
                    {displayWidth} ×{" "}
                    {displayHeight}
                  </strong>
                </span>
              </div>
            </div>
          </div>

          {/* Output settings */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              {t.outputSettings}
            </h2>

            <div className="mt-6">
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
                    htmlFor="rotate-quality"
                    className="text-sm font-semibold text-gray-900"
                  >
                    {t.quality}
                  </label>

                  <span className="font-semibold text-blue-600">
                    {quality}
                  </span>
                </div>

                <input
                  id="rotate-quality"
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

            {format === "png" && (
              <p className="mt-5 rounded-xl bg-gray-50 p-4 text-sm leading-6 text-gray-500">
                {t.lossless}
              </p>
            )}

            <button
              type="button"
              onClick={processImage}
              disabled={isProcessing}
              className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isProcessing
                ? "Processing..."
                : "Apply Changes"}
            </button>
          </div>

          {/* Result */}
          {resultUrl && (
            <div className="rounded-3xl border border-green-100 bg-green-50/50 p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Image ready
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm text-gray-500">
                    {t.original}
                  </p>

                  <p className="mt-2 text-xl font-bold text-gray-900">
                    {originalWidth} ×{" "}
                    {originalHeight}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {formatFileSize(file.size)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm text-gray-500">
                    Result
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
                  alt={t.altProcessed}
                  className="mx-auto max-h-[500px] max-w-full object-contain"
                />
              </div>

              <button
                type="button"
                onClick={downloadResult}
                className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700"
              >
                {t.downloadImage}
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