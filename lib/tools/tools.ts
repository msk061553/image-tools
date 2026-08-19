export type ImageTool = {
  slug: string;
  title: string;
  description: string;
  inputFormat: "JPG" | "PNG" | "WebP";
  outputFormat: "png" | "jpeg" | "webp";
  whyConvert: string;
};

export const imageTools: ImageTool[] = [
  {
    slug: "jpg-to-png",
    title: "JPG to PNG",
    description: "Convert JPG images to PNG format.",
    inputFormat: "JPG",
    outputFormat: "png",
    whyConvert:
      "Converting JPG to PNG is useful when you need lossless image quality, repeated editing, or better support for graphics and images with sharp edges.",
  },

  {
    slug: "png-to-jpg",
    title: "PNG to JPG",
    description: "Convert PNG images to JPG format.",
    inputFormat: "PNG",
    outputFormat: "jpeg",
     whyConvert:
      "Converting PNG to JPG can significantly reduce file size, making images easier to share, store, and use on websites where transparency is not required.",
  },

  {
    slug: "jpg-to-webp",
    title: "JPG to WebP",
    description: "Convert JPG images to WebP format.",
    inputFormat: "JPG",
    outputFormat: "webp",
    whyConvert:
      "Converting JPG to WebP can reduce image file size while maintaining good visual quality, which can be useful for faster-loading websites and web applications.",
  },

  {
    slug: "png-to-webp",
    title: "PNG to WebP",
    description: "Convert PNG images to WebP format.",
    inputFormat: "PNG",
    outputFormat: "webp",
    whyConvert:
      "Converting PNG to WebP can produce a smaller file for web use while preserving strong image quality, making it useful for improving page loading performance.",
  },

  {
    slug: "webp-to-jpg",
    title: "WebP to JPG",
    description: "Convert WebP images to JPG format.",
    inputFormat: "WebP",
    outputFormat: "jpeg",
    whyConvert:
      "Converting WebP to JPG can improve compatibility with older applications, devices, and services that do not fully support the WebP format.",
  },

  {
    slug: "webp-to-png",
    title: "WebP to PNG",
    description: "Convert WebP images to PNG format.",
    inputFormat: "WebP",
    outputFormat: "png",
    whyConvert:
      "Converting WebP to PNG is useful when you need a widely supported lossless format for editing, archiving, graphics, or workflows that require PNG files.",
  },

  {
    slug: "jpg-to-jpeg",
    title: "JPG to JPEG",
    description: "Convert JPG images to JPEG format.",
    inputFormat: "JPG",
    outputFormat: "jpeg",
    whyConvert:
      "JPG and JPEG use the same underlying image format, so this conversion is mainly useful when a particular application or upload service expects the .jpeg file extension.",
  },

  {
    slug: "jpeg-to-png",
    title: "JPEG to PNG",
    description: "Convert JPEG images to PNG format.",
    inputFormat: "JPG",
    outputFormat: "png",
    whyConvert:
      "Converting JPEG to PNG is useful when you need a lossless format for further editing, graphics work, or workflows where preserving image data after conversion is important.",
  },

  {
    slug: "jpeg-to-webp",
    title: "JPEG to WebP",
    description: "Convert JPEG images to WebP format.",
    inputFormat: "JPG",
    outputFormat: "webp",
    whyConvert:
      "Converting JPEG to WebP can help reduce file size for web delivery while retaining good visual quality, making it useful for websites and online applications.",
  },

  {
    slug: "png-to-jpeg",
    title: "PNG to JPEG",
    description: "Convert PNG images to JPEG format.",
    inputFormat: "PNG",
    outputFormat: "jpeg",
    whyConvert:
      "Converting PNG to JPEG is useful when you want a smaller file size for photographs, email attachments, or websites where transparent backgrounds are not needed.",
  },
];