export type ImageTool = {
  slug: string;
  title: string;
  description: string;
  inputFormat: "JPG" | "PNG" | "WebP";
  outputFormat: "png" | "jpeg" | "webp";
  seo: {
    intro: string;
    why: string;
  };
};

export const imageTools: ImageTool[] = [
  {
    slug: "jpg-to-png",
    title: "JPG to PNG",
    description: "Convert JPG images to PNG format.",
    inputFormat: "JPG",
    outputFormat: "png",
    seo: {
      intro:
        "Convert JPG images to PNG format with a free online converter. Images are processed directly in your browser without being uploaded to a server.",
      why:
        "PNG uses lossless compression and supports transparent backgrounds. Converting JPG to PNG is useful for graphics, screenshots, logos, and images that need further editing.",
    },
  },

  {
    slug: "png-to-jpg",
    title: "PNG to JPG",
    description: "Convert PNG images to JPG format.",
    inputFormat: "PNG",
    outputFormat: "jpeg",
    seo: {
      intro:
        "Convert PNG images to JPG format quickly with a free browser-based image converter. No software installation or account is required.",
      why:
        "JPG files are widely supported and are often smaller than PNG files. Converting PNG to JPG is useful when you need a smaller image file for websites, email, or general sharing.",
    },
  },

  {
    slug: "jpg-to-webp",
    title: "JPG to WebP",
    description: "Convert JPG images to WebP format.",
    inputFormat: "JPG",
    outputFormat: "webp",
    seo: {
      intro:
        "Convert JPG images to WebP format online for free. The conversion happens directly in your browser, so your images stay on your device.",
      why:
        "WebP is designed for efficient image delivery on the web. Converting JPG to WebP can reduce image file sizes while maintaining good visual quality.",
    },
  },

  {
    slug: "png-to-webp",
    title: "PNG to WebP",
    description: "Convert PNG images to WebP format.",
    inputFormat: "PNG",
    outputFormat: "webp",
    seo: {
      intro:
        "Convert PNG images to WebP format using a free browser-based image converter. No server upload is required.",
      why:
        "WebP can produce smaller files than PNG for many types of images. Converting PNG to WebP can be useful for improving website loading performance.",
    },
  },

  {
    slug: "webp-to-jpg",
    title: "WebP to JPG",
    description: "Convert WebP images to JPG format.",
    inputFormat: "WebP",
    outputFormat: "jpeg",
    seo: {
      intro:
        "Convert WebP images to JPG format online for free. Process your images directly in your browser without uploading them to a server.",
      why:
        "JPG has broad compatibility across image viewers, applications, websites, and devices. Converting WebP to JPG is useful when a website or application does not support WebP.",
    },
  },

  {
    slug: "webp-to-png",
    title: "WebP to PNG",
    description: "Convert WebP images to PNG format.",
    inputFormat: "WebP",
    outputFormat: "png",
    seo: {
      intro:
        "Convert WebP images to PNG format online for free. Process your images directly in your browser without uploading them to a server.",
      why:
        "PNG supports lossless compression and transparent backgrounds. Converting WebP to PNG is useful when you need a widely supported image format for editing, graphics, or other applications.",
    },
  },

  {
    slug: "jpg-to-jpeg",
    title: "JPG to JPEG",
    description: "Convert JPG images to JPEG format.",
    inputFormat: "JPG",
    outputFormat: "jpeg",
    seo: {
      intro:
        "Convert JPG images to JPEG format directly in your browser with a free online image converter.",
      why:
        "JPG and JPEG use the same image compression standard. Converting between the two extensions can be useful when a particular application requires a specific file extension.",
    },
  },

  {
    slug: "jpeg-to-png",
    title: "JPEG to PNG",
    description: "Convert JPEG images to PNG format.",
    inputFormat: "JPG",
    outputFormat: "png",
    seo: {
      intro:
        "Convert JPEG images to PNG format online for free. Your images are processed directly in your browser.",
      why:
        "PNG uses lossless compression and supports transparency. It is useful for graphics, screenshots, logos, and images that need additional editing.",
    },
  },

  {
    slug: "jpeg-to-webp",
    title: "JPEG to WebP",
    description: "Convert JPEG images to WebP format.",
    inputFormat: "JPG",
    outputFormat: "webp",
    seo: {
      intro:
        "Convert JPEG images to WebP format online for free using a browser-based image converter.",
      why:
        "WebP is optimized for web delivery and can provide smaller image files than JPEG in many situations.",
    },
  },

  {
    slug: "png-to-jpeg",
    title: "PNG to JPEG",
    description: "Convert PNG images to JPEG format.",
    inputFormat: "PNG",
    outputFormat: "jpeg",
    seo: {
      intro:
        "Convert PNG images to JPEG format quickly and easily with a free browser-based image converter.",
      why:
        "JPEG is widely supported and can produce smaller files than PNG for many photographic images. It is useful for websites, email, and general image sharing.",
    },
  },
];