"use client";

import {
  ChangeEvent,
  DragEvent,
  useEffect,
  useState,
} from "react";

import {
  convertImage,
  ImageFormat,
} from "@/lib/image/converter";

type UploadBoxProps = {
  inputFormat: "JPG" | "PNG" | "WebP";
  outputFormat: ImageFormat;
};

const MAX_FILE_SIZE = 50 * 1024 * 1024;
const MAX_IMAGE_DIMENSION = 10000;
const MAX_IMAGE_PIXELS = 50_000_000;

const MIME_TYPES = {
  JPG: "image/jpeg",
  PNG: "image/png",
  WebP: "image/webp",
} as const;

export default function UploadBox({
  inputFormat,
  outputFormat,
}: UploadBoxProps) {
  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [previewUrl, setPreviewUrl] =
    useState("");

  const [convertedBlob, setConvertedBlob] =
    useState<Blob | null>(null);

  const [isConverting, setIsConverting] =
    useState(false);

  const [isDragging, setIsDragging] =
    useState(false);

  const [error, setError] =
    useState("");

  const [quality, setQuality] =
    useState(92);

  const [convertedSize, setConvertedSize] =
    useState<number | null>(null);

  const [compressionRate, setCompressionRate] =
    useState<number | null>(null);

  // Preview URL cleanup
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  function getImageDimensions(
    file: File
  ): Promise<{ width: number; height: number }> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);

      img.onload = () => {
        URL.revokeObjectURL(url);

        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(
          new Error("Unable to read image.")
        );
      };

      img.src = url;
    });
  }

  async function handleFile(file: File) {
    setError("");
    setConvertedBlob(null);
    setConvertedSize(null);
    setCompressionRate(null);

    const expectedMime =
      MIME_TYPES[inputFormat];

    if (file.type !== expectedMime) {
      setError(
        `Please select a ${inputFormat} image.`
      );
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError(
        "The maximum file size is 50MB."
      );
      return;
    }

    try {
      const dimensions =
        await getImageDimensions(file);

      if (
        dimensions.width >
          MAX_IMAGE_DIMENSION ||
        dimensions.height >
          MAX_IMAGE_DIMENSION
      ) {
        setError(
          `Image dimensions cannot exceed ${MAX_IMAGE_DIMENSION.toLocaleString()} × ${MAX_IMAGE_DIMENSION.toLocaleString()} pixels.`
        );
        return;
      }

      const totalPixels =
        dimensions.width *
        dimensions.height;

      if (totalPixels > MAX_IMAGE_PIXELS) {
        setError(
          "This image has too many pixels to process safely. Please choose a smaller image."
        );
        return;
      }
    } catch {
      setError(
        "Unable to read the image. Please try another file."
      );
      return;
    }

    const url =
      URL.createObjectURL(file);

    setSelectedFile(file);
    setPreviewUrl(url);
  }

  function handleFileChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const file =
      event.target.files?.[0];

    if (file) {
      void handleFile(file);
    }

    // Allow selecting the same file again.
    event.target.value = "";
  }

  function handleDragOver(
    event: DragEvent<HTMLLabelElement>
  ) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(
    event: DragEvent<HTMLLabelElement>
  ) {
    event.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(
    event: DragEvent<HTMLLabelElement>
  ) {
    event.preventDefault();
    setIsDragging(false);

    const file =
      event.dataTransfer.files?.[0];

    if (file) {
      void handleFile(file);
    }
  }

  async function handleConvert() {
    if (!selectedFile || isConverting) {
      return;
    }

    try {
      setIsConverting(true);
      setError("");

      setConvertedBlob(null);
      setConvertedSize(null);
      setCompressionRate(null);

      const blob = await convertImage(
        selectedFile,
        outputFormat,
        quality / 100
      );

      setConvertedBlob(blob);
      setConvertedSize(blob.size);

      const reduction =
        ((selectedFile.size - blob.size) /
          selectedFile.size) *
        100;

      setCompressionRate(reduction);
    } catch (error) {
      console.error(error);

      setError(
        "Image conversion failed. Please try again."
      );
    } finally {
      setIsConverting(false);
    }
  }

  function handleDownload() {
    if (!convertedBlob || !selectedFile) {
      return;
    }

    const extension =
      outputFormat === "jpeg"
        ? "jpg"
        : outputFormat;

    const originalName =
      selectedFile.name;

    const lastDot =
      originalName.lastIndexOf(".");

    const baseName =
      lastDot > 0
        ? originalName.substring(
            0,
            lastDot
          )
        : originalName;

    const fileName =
      `${baseName}.${extension}`;

    const downloadUrl =
      URL.createObjectURL(
        convertedBlob
      );

    const link =
      document.createElement("a");

    link.href = downloadUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => {
      URL.revokeObjectURL(
        downloadUrl
      );
    }, 1000);
  }

  function resetFile() {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setSelectedFile(null);
    setPreviewUrl("");
    setConvertedBlob(null);
    setError("");
    setConvertedSize(null);
    setCompressionRate(null);
    setQuality(92);
  }

  const acceptType =
    MIME_TYPES[inputFormat];

  const outputName =
    outputFormat === "jpeg"
      ? "JPG"
      : outputFormat.toUpperCase();

  return (
    <div>
      {!selectedFile ? (
        <label
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`block cursor-pointer rounded-2xl border-2 border-dashed p-8 text-center transition sm:p-16 ${
            isDragging
              ? "border-black bg-gray-100"
              : "border-gray-300 bg-white hover:border-gray-500"
          }`}
        >
          <div className="text-lg font-medium text-gray-900">
            {isDragging
              ? "Drop your image here"
              : `Drag & drop your ${inputFormat} image here`}
          </div>

          {!isDragging && (
            <>
              <div className="mt-2 text-sm text-gray-500">
                or
              </div>

              <div className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white">
                Choose Image
              </div>
            </>
          )}

          <div className="mt-6 text-sm text-gray-400">
            {inputFormat} · Max 50MB · Max 10,000 × 10,000 px
          </div>

          <input
            type="file"
            accept={acceptType}
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      ) : (
        <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
          {/* Original image */}
          <div className="overflow-hidden rounded-xl bg-gray-100">
            <img
              src={previewUrl}
              alt="Selected image preview"
              className="mx-auto max-h-80 max-w-full object-contain"
            />
          </div>

          {/* Original file information */}
          <div className="mt-6">
            <p className="break-all font-medium text-gray-900">
              {selectedFile.name}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Original:{" "}
              {(
                selectedFile.size /
                1024 /
                1024
              ).toFixed(2)}{" "}
              MB
            </p>
          </div>

          {/* Quality */}
          {!convertedBlob &&
            (outputFormat === "jpeg" ||
              outputFormat === "webp") && (
              <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5 text-left">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="quality"
                    className="font-medium text-gray-900"
                  >
                    Image Quality
                  </label>

                  <span className="font-medium text-gray-900">
                    {quality}%
                  </span>
                </div>

                <input
                  id="quality"
                  type="range"
                  min="60"
                  max="100"
                  step="1"
                  value={quality}
                  onChange={(event) =>
                    setQuality(
                      Number(
                        event.target.value
                      )
                    )
                  }
                  className="mt-4 w-full"
                />

                <div className="mt-2 flex justify-between text-xs text-gray-400">
                  <span>
                    Smaller file
                  </span>

                  <span>
                    Higher quality
                  </span>
                </div>

                <p className="mt-3 text-xs leading-5 text-gray-500">
                  Higher quality produces a larger file.
                  Lower quality can reduce the file size.
                </p>
              </div>
            )}

          {/* Convert */}
          {!convertedBlob && (
            <button
              type="button"
              onClick={handleConvert}
              disabled={isConverting}
              className="mt-6 w-full rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isConverting
                ? "Converting..."
                : `Convert to ${outputName}`}
            </button>
          )}

          {/* Conversion result */}
          {convertedBlob &&
            convertedSize !== null &&
            compressionRate !== null && (
              <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  Conversion Complete
                </h3>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between gap-4">
                    <span>
                      Original
                    </span>

                    <span className="font-medium text-gray-900">
                      {(
                        selectedFile.size /
                        1024 /
                        1024
                      ).toFixed(2)}{" "}
                      MB
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>
                      Converted
                    </span>

                    <span className="font-medium text-gray-900">
                      {(
                        convertedSize /
                        1024 /
                        1024
                      ).toFixed(2)}{" "}
                      MB
                    </span>
                  </div>

                  <div className="border-t pt-2">
                    {compressionRate > 0 ? (
                      <p className="font-medium text-gray-900">
                        File size reduced by{" "}
                        {compressionRate.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : compressionRate < 0 ? (
                      <p className="font-medium text-gray-900">
                        File size increased by{" "}
                        {Math.abs(
                          compressionRate
                        ).toFixed(1)}
                        %
                      </p>
                    ) : (
                      <p className="font-medium text-gray-900">
                        File size unchanged
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleDownload}
                  className="mt-5 w-full rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
                >
                  Download {outputName}
                </button>
              </div>
            )}

          {/* Choose another image */}
          <button
            type="button"
            onClick={resetFile}
            disabled={isConverting}
            className="mt-3 w-full rounded-lg border border-gray-300 px-6 py-3 text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Choose Another Image
          </button>
        </div>
      )}

      {/* Error */}
      {error && (
        <div
          role="alert"
          className="mt-4 rounded-lg bg-red-50 p-4 text-sm text-red-600"
        >
          {error}
        </div>
      )}
    </div>
  );
}