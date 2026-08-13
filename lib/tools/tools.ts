export type ImageTool = {
  slug: string;
  title: string;
  description: string;
  inputFormat: "JPG" | "PNG" | "WebP";
  outputFormat: "png" | "jpeg" | "webp";
};

export const imageTools: ImageTool[] = [
  {
    slug: "jpg-to-png",
    title: "JPG to PNG",
    description: "Convert JPG images to PNG format.",
    inputFormat: "JPG",
    outputFormat: "png",
  },

  {
    slug: "png-to-jpg",
    title: "PNG to JPG",
    description: "Convert PNG images to JPG format.",
    inputFormat: "PNG",
    outputFormat: "jpeg",
  },

  {
    slug: "jpg-to-webp",
    title: "JPG to WebP",
    description: "Convert JPG images to WebP format.",
    inputFormat: "JPG",
    outputFormat: "webp",
  },

  {
    slug: "png-to-webp",
    title: "PNG to WebP",
    description: "Convert PNG images to WebP format.",
    inputFormat: "PNG",
    outputFormat: "webp",
  },

  {
    slug: "webp-to-jpg",
    title: "WebP to JPG",
    description: "Convert WebP images to JPG format.",
    inputFormat: "WebP",
    outputFormat: "jpeg",
  },

  {
    slug: "webp-to-png",
    title: "WebP to PNG",
    description: "Convert WebP images to PNG format.",
    inputFormat: "WebP",
    outputFormat: "png",
  },

  {
    slug: "jpg-to-jpeg",
    title: "JPG to JPEG",
    description: "Convert JPG images to JPEG format.",
    inputFormat: "JPG",
    outputFormat: "jpeg",
  },

  {
    slug: "jpeg-to-png",
    title: "JPEG to PNG",
    description: "Convert JPEG images to PNG format.",
    inputFormat: "JPG",
    outputFormat: "png",
  },

  {
    slug: "jpeg-to-webp",
    title: "JPEG to WebP",
    description: "Convert JPEG images to WebP format.",
    inputFormat: "JPG",
    outputFormat: "webp",
  },

  {
    slug: "png-to-jpeg",
    title: "PNG to JPEG",
    description: "Convert PNG images to JPEG format.",
    inputFormat: "PNG",
    outputFormat: "jpeg",
  },
];