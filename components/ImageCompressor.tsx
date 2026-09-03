"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getToolUiLocale, toolUiTranslations } from "@/lib/tool-ui-i18n";

type OutputFormat = "jpeg" | "webp" | "png";

type CompressionResult = {
  blob: Blob;
  url: string;
  originalSize: number;
  compressedSize: number;
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

function getOutputExtension(format: OutputFormat) {
  if (format === "jpeg") {
    return "jpg";
  }

  return format;
}

function getMimeType(format: OutputFormat) {
  if (format === "jpeg") {
    return "image/jpeg";
  }

  if (format === "webp") {
    return "image/webp";
  }

  return "image/png";
}

export default function ImageCompressor() {
  const pathname = usePathname();
  const t = toolUiTranslations[getToolUiLocale(pathname)];
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [format, setFormat] = useState<OutputFormat>("webp");
  const [quality, setQuality] = useState(80);

  const [result, setResult] =
    useState<CompressionResult | null>(null);

  const [isCompressing, setIsCompressing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  useEffect(() => {
    if (result?.url) {
      URL.revokeObjectURL(result.url);
    }

    setResult(null);
  }, [format, quality]);

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

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (result?.url) {
      URL.revokeObjectURL(result.url);
    }

    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
    setResult(null);
  }

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFile = event.target.files?.[0] ?? null;

    selectFile(selectedFile);

    event.target.value = "";
  }

  function handleDrop(
    event: React.DragEvent<HTMLDivElement>
  ) {
    event.preventDefault();

    const droppedFile = event.dataTransfer.files?.[0] ?? null;

    selectFile(droppedFile);
  }

  async function compressImage() {
    if (!file) {
      return;
    }

    setError("");
    setIsCompressing(true);

    try {
      const imageUrl = URL.createObjectURL(file);

      const image = new Image();

      await new Promise<void>((resolve, reject) => {
        image.onload = () => resolve();
        image.onerror = () =>
          reject(new Error(t.readImage));
        image.src = imageUrl;
      });

      const canvas = document.createElement("canvas");

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error("Your browser does not support canvas processing.");
      }

      context.drawImage(
        image,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight
      );

      URL.revokeObjectURL(imageUrl);

      const mimeType = getMimeType(format);

      const blob = await new Promise<Blob | null>((resolve) => {
        if (format === "png") {
          canvas.toBlob(resolve, mimeType);
        } else {
          canvas.toBlob(
            resolve,
            mimeType,
            quality / 100
          );
        }
      });

      if (!blob) {
        throw new Error(
          t.createCompressed
        );
      }

      const url = URL.createObjectURL(blob);

      setResult({
        blob,
        url,
        originalSize: file.size,
        compressedSize: blob.size,
      });
    } catch (compressionError) {
      console.error(compressionError);

      setError(t.compressError);
    } finally {
      setIsCompressing(false);
    }
  }

  function downloadResult() {
    if (!result || !file) {
      return;
    }

    const extension = getOutputExtension(format);

    const originalName = file.name.replace(
      /\.[^/.]+$/,
      ""
    );

    const link = document.createElement("a");

    link.href = result.url;
    link.download = `${originalName}-compressed.${extension}`;

    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function removeFile() {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (result?.url) {
      URL.revokeObjectURL(result.url);
    }

    setFile(null);
    setPreviewUrl(null);
    setResult(null);
    setError("");
  }

  const reduction =
    result && result.originalSize > 0
      ? Math.max(
          0,
          (1 -
            result.compressedSize /
              result.originalSize) *
            100
        )
      : 0;

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
            ↑
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
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-gray-900">
                    {file.name}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
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
            </div>

            <div className="bg-gray-50 p-4">
              <div className="overflow-hidden rounded-2xl bg-white">
                <img
                  src={previewUrl}
                  alt={t.altCompress}
                  className="mx-auto max-h-[500px] w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              {t.compressionSettings}
            </h2>

            <div className="mt-6">
              <label className="text-sm font-semibold text-gray-900">
                {t.outputFormat}
              </label>

              <div className="mt-3 grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setFormat("jpeg")}
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                    format === "jpeg"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-600 hover:border-blue-200"
                  }`}
                >
                  JPG
                </button>

                <button
                  type="button"
                  onClick={() => setFormat("webp")}
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                    format === "webp"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-600 hover:border-blue-200"
                  }`}
                >
                  WebP
                </button>

                <button
                  type="button"
                  onClick={() => setFormat("png")}
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                    format === "png"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-600 hover:border-blue-200"
                  }`}
                >
                  PNG
                </button>
              </div>
            </div>

            {format !== "png" && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="quality"
                    className="text-sm font-semibold text-gray-900"
                  >
                    {t.quality}
                  </label>

                  <span className="font-semibold text-blue-600">
                    {quality}
                  </span>
                </div>

                <input
                  id="quality"
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={quality}
                  onChange={(event) =>
                    setQuality(Number(event.target.value))
                  }
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
              onClick={compressImage}
              disabled={isCompressing}
              className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isCompressing
                ? "Compressing..."
                : "Compress Image"}
            </button>
          </div>

          {result && (
            <div className="rounded-3xl border border-green-100 bg-green-50/50 p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {t.compressionComplete}
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm text-gray-500">
                    {t.original}
                  </p>

                  <p className="mt-2 text-xl font-bold text-gray-900">
                    {formatFileSize(result.originalSize)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm text-gray-500">
                    {t.compressed}
                  </p>

                  <p className="mt-2 text-xl font-bold text-blue-600">
                    {formatFileSize(result.compressedSize)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm text-gray-500">
                    {t.sizeReduced}
                  </p>

                  <p className="mt-2 text-xl font-bold text-green-600">
                    {reduction.toFixed(1)}%
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={downloadResult}
                className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700"
              >
                {t.downloadCompressed}
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