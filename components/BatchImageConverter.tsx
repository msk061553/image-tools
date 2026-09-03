"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getToolUiLocale, toolUiTranslations } from "@/lib/tool-ui-i18n";
import JSZip from "jszip";

type OutputFormat = "jpeg" | "webp" | "png";

type BatchFile = {
  id: string;
  file: File;
  previewUrl: string;
  status: "ready" | "processing" | "done" | "error";
  resultBlob?: Blob;
  resultUrl?: string;
  resultSize?: number;
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

function createId() {
  return `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}`;
}

export default function BatchImageConverter() {
  const pathname = usePathname();
  const t = toolUiTranslations[getToolUiLocale(pathname)];
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<BatchFile[]>([]);

  const [format, setFormat] =
    useState<OutputFormat>("webp");

  const [quality, setQuality] = useState(90);

  const [isProcessing, setIsProcessing] =
    useState(false);

  const [isDownloading, setIsDownloading] =
    useState(false);

  const [error, setError] = useState("");

  // Cleanup only when the component is actually unmounted.
  useEffect(() => {
    return () => {
      files.forEach((item) => {
        URL.revokeObjectURL(item.previewUrl);

        if (item.resultUrl) {
          URL.revokeObjectURL(item.resultUrl);
        }
      });
    };
  }, []);

  function addFiles(selectedFiles: FileList | File[]) {
    const imageFiles = Array.from(selectedFiles).filter(
      (file) => file.type.startsWith("image/")
    );

    if (imageFiles.length === 0) {
      setError(t.invalidImages);
      return;
    }

    const maxFileSize = 50 * 1024 * 1024;

    const validFiles = imageFiles.filter(
      (file) => file.size <= maxFileSize
    );

    if (validFiles.length !== imageFiles.length) {
      setError(
        "Some files were skipped because they are larger than 50 MB."
      );
    } else {
      setError("");
    }

    const newItems: BatchFile[] =
      validFiles.map((file) => ({
        id: createId(),
        file,
        previewUrl: URL.createObjectURL(file),
        status: "ready",
      }));

    setFiles((current) => [
      ...current,
      ...newItems,
    ]);
  }

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (event.target.files) {
      addFiles(event.target.files);
    }

    event.target.value = "";
  }

  function handleDrop(
    event: React.DragEvent<HTMLDivElement>
  ) {
    event.preventDefault();

    if (event.dataTransfer.files) {
      addFiles(event.dataTransfer.files);
    }
  }

  function removeFile(id: string) {
    setFiles((current) => {
      const target = current.find(
        (item) => item.id === id
      );

      if (target) {
        URL.revokeObjectURL(target.previewUrl);

        if (target.resultUrl) {
          URL.revokeObjectURL(target.resultUrl);
        }
      }

      return current.filter(
        (item) => item.id !== id
      );
    });
  }

  function clearFiles() {
    files.forEach((item) => {
      URL.revokeObjectURL(item.previewUrl);

      if (item.resultUrl) {
        URL.revokeObjectURL(item.resultUrl);
      }
    });

    setFiles([]);
    setError("");
  }

  function resetResults() {
    setFiles((current) =>
      current.map((item) => {
        if (item.resultUrl) {
          URL.revokeObjectURL(item.resultUrl);
        }

        return {
          ...item,
          status: "ready",
          resultBlob: undefined,
          resultUrl: undefined,
          resultSize: undefined,
        };
      })
    );
  }

  async function convertFile(
    item: BatchFile
  ): Promise<BatchFile> {
    const imageUrl =
      URL.createObjectURL(item.file);

    try {
      const image = new Image();

      await new Promise<void>((resolve, reject) => {
        image.onload = () => resolve();

        image.onerror = () =>
          reject(
            new Error(t.readImage)
          );

        image.src = imageUrl;
      });

      if (
        image.naturalWidth < 1 ||
        image.naturalHeight < 1
      ) {
        throw new Error(t.readSelected);
      }

      if (
        image.naturalWidth * image.naturalHeight >
        50_000_000
      ) {
        throw new Error(
          t.tooLarge
        );
      }

      const canvas =
        document.createElement("canvas");

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      const context =
        canvas.getContext("2d");

      if (!context) {
        throw new Error(
          t.canvas
        );
      }

      context.drawImage(
        image,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight
      );

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

      const resultUrl =
        URL.createObjectURL(blob);

      return {
        ...item,
        status: "done",
        resultBlob: blob,
        resultUrl,
        resultSize: blob.size,
      };
    } finally {
      URL.revokeObjectURL(imageUrl);
    }
  }

  async function convertAll() {
    if (files.length === 0 || isProcessing) {
      return;
    }

    setError("");
    setIsProcessing(true);

    resetResults();

    try {
      // Give React a chance to update the UI before processing begins.
      await new Promise((resolve) =>
        setTimeout(resolve, 0)
      );

      for (const item of files) {
        setFiles((current) =>
          current.map((currentItem) =>
            currentItem.id === item.id
              ? {
                  ...currentItem,
                  status: "processing",
                }
              : currentItem
          )
        );

        try {
          const result =
            await convertFile(item);

          setFiles((current) =>
            current.map((currentItem) =>
              currentItem.id === item.id
                ? result
                : currentItem
            )
          );
        } catch (conversionError) {
          console.error(
            conversionError
          );

          setFiles((current) =>
            current.map((currentItem) =>
              currentItem.id === item.id
                ? {
                    ...currentItem,
                    status: "error",
                  }
                : currentItem
            )
          );
        }
      }
    } finally {
      setIsProcessing(false);
    }
  }

  function downloadSingle(item: BatchFile) {
    if (
      !item.resultUrl ||
      !item.resultBlob
    ) {
      return;
    }

    const extension =
      getExtension(format);

    const originalName =
      item.file.name.replace(
        /\.[^/.]+$/,
        ""
      );

    const link =
      document.createElement("a");

    link.href = item.resultUrl;

    link.download =
      `${originalName}-converted.${extension}`;

    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  async function downloadAll() {
    const completedFiles =
      files.filter(
        (item) =>
          item.status === "done" &&
          item.resultBlob
      );

    if (completedFiles.length === 0) {
      return;
    }

    setIsDownloading(true);
    setError("");

    try {
      const zip = new JSZip();

      const extension =
        getExtension(format);

      const usedNames =
        new Set<string>();

      completedFiles.forEach(
        (item, index) => {
          if (!item.resultBlob) {
            return;
          }

          const originalName =
            item.file.name.replace(
              /\.[^/.]+$/,
              ""
            );

          let fileName =
            `${originalName}-converted.${extension}`;

          if (usedNames.has(fileName)) {
            fileName =
              `${originalName}-converted-${index + 1}.${extension}`;
          }

          usedNames.add(fileName);

          zip.file(
            fileName,
            item.resultBlob
          );
        }
      );

      const zipBlob =
        await zip.generateAsync({
          type: "blob",
          compression: "DEFLATE",
          compressionOptions: {
            level: 6,
          },
        });

      const url =
        URL.createObjectURL(zipBlob);

      const link =
        document.createElement("a");

      link.href = url;
      link.download =
        "convertimagefreely-batch.zip";

      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(url);
    } catch (downloadError) {
      console.error(
        downloadError
      );

      setError(
        t.zipError
      );
    } finally {
      setIsDownloading(false);
    }
  }

  const completedCount =
    files.filter(
      (item) => item.status === "done"
    ).length;

  return (
    <div className="mx-auto max-w-5xl">
      {/* Single file input used by both upload and Add images */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />

      {files.length === 0 && (
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
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl text-blue-600">
            +
          </div>

          <h2 className="mt-5 text-xl font-semibold text-gray-900">
            {t.dropMultiple}
          </h2>

          <p className="mt-2 text-gray-500">
            {t.browse}
          </p>

          <p className="mt-5 text-sm text-gray-400">
            {t.multipleFormats}
          </p>
        </div>
      )}

      {files.length > 0 && (
        <div className="space-y-6">
          {/* File list */}
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col justify-between gap-4 border-b border-gray-100 px-6 py-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {t.selectedImages}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {files.length}{" "}
                  {files.length === 1
                    ? "image"
                    : t.images}{" "}
                  {t.selected}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={() =>
                    inputRef.current?.click()
                  }
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {t.addImages}
                </button>

                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={clearFiles}
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {t.clearAll}
                </button>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {files.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 px-6 py-4"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                    <img
                      src={item.previewUrl}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-gray-900">
                      {item.file.name}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {formatFileSize(
                        item.file.size
                      )}
                    </p>

                    {item.status ===
                      "processing" && (
                      <p className="mt-1 text-sm text-blue-600">
                        {t.converting}
                      </p>
                    )}

                    {item.status ===
                      "done" && (
                      <p className="mt-1 text-sm text-green-600">
                        {t.done} ·{" "}
                        {formatFileSize(
                          item.resultSize ?? 0
                        )}
                      </p>
                    )}

                    {item.status ===
                      "error" && (
                      <p className="mt-1 text-sm text-red-600">
                        {t.conversionFailed}
                      </p>
                    )}
                  </div>

                  {item.status === "done" && (
                    <button
                      type="button"
                      onClick={() =>
                        downloadSingle(item)
                      }
                      className="hidden rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 sm:block"
                    >
                      {t.download}
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      removeFile(item.id)
                    }
                    disabled={isProcessing}
                    className="rounded-lg px-2 py-2 text-gray-400 transition hover:bg-gray-50 hover:text-gray-600 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label={`${t.remove}: ${item.file.name}`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              {t.conversionSettings}
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
                      disabled={isProcessing}
                      onClick={() => {
                        setFormat(value);
                        resetResults();
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
                    htmlFor="batch-quality"
                    className="text-sm font-semibold text-gray-900"
                  >
                    {t.quality}
                  </label>

                  <span className="font-semibold text-blue-600">
                    {quality}
                  </span>
                </div>

                <input
                  id="batch-quality"
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={quality}
                  disabled={isProcessing}
                  onChange={(event) => {
                    setQuality(
                      Number(
                        event.target.value
                      )
                    );

                    resetResults();
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
              onClick={convertAll}
              disabled={
                isProcessing ||
                files.length === 0
              }
              className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isProcessing
                ? t.converting
                : `Convert ${files.length} ${
                    files.length === 1
                      ? t.image
                      : t.images
                  }`}
            </button>
          </div>

          {/* Results */}
          {completedCount > 0 && (
            <div className="rounded-3xl border border-green-100 bg-green-50/50 p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {t.conversionComplete}
              </h2>

              <p className="mt-2 text-gray-600">
                {completedCount} {t.of} {files.length} {t.images} {t.converted}
              </p>

              <button
                type="button"
                onClick={downloadAll}
                disabled={isDownloading}
                className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isDownloading
                  ? t.creatingZip
                  : t.downloadZip}
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