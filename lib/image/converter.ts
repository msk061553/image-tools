export type ImageFormat = "png" | "jpeg" | "webp";

export function convertImage(
  file: File,
  outputFormat: ImageFormat,
  quality = 0.92
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);

      const canvas = document.createElement("canvas");

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Canvas is not supported."));
        return;
      }

      // JPG does not support transparency.
      // Use a white background when converting to JPG.
      if (outputFormat === "jpeg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(
          0,
          0,
          canvas.width,
          canvas.height
        );
      }

      ctx.drawImage(img, 0, 0);

      const mimeType = `image/${outputFormat}`;

      canvas.toBlob(
        (blob) => {
          // Release canvas memory after conversion.
          canvas.width = 1;
          canvas.height = 1;

          if (blob) {
            resolve(blob);
          } else {
            reject(
              new Error("Image conversion failed.")
            );
          }
        },
        mimeType,
        outputFormat === "jpeg" || outputFormat === "webp"
          ? quality
          : undefined
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);

      reject(
        new Error("Unable to load image.")
      );
    };

    img.src = objectUrl;
  });
}