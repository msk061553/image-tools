export type GuideSection = {
  heading: string;
  paragraphs: string[];
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  relatedTool?: string;
  sections: GuideSection[];
  faq?: GuideFaq[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-convert-jpg-to-png",
    title: "How to Convert JPG to PNG",
    description:
      "Learn how to convert JPG images to PNG format quickly and easily using a free browser-based image converter.",
    relatedTool: "jpg-to-png",
    sections: [
      {
        heading: "Why convert JPG to PNG?",
        paragraphs: [
          "JPG is widely used for photographs because it can produce relatively small files. PNG, on the other hand, uses lossless compression and is often better suited to graphics, screenshots, logos, and images that need to preserve sharp details.",
          "Converting a JPG image to PNG can be useful when you plan to edit the image again or need a lossless format for your workflow.",
        ],
      },
      {
        heading: "How to convert JPG to PNG",
        paragraphs: [
          "Choose a JPG image from your device or drag it into the converter.",
          "Click the conversion button to process the image. The conversion is performed directly in your browser.",
          "When the conversion is complete, download the resulting PNG image to your device.",
        ],
      },
      {
        heading: "JPG and PNG file formats",
        paragraphs: [
          "JPG uses lossy compression, which means some image information may be discarded to reduce file size. PNG uses lossless compression, so it can preserve image information more accurately.",
          "PNG files can also support transparent backgrounds, while standard JPG images do not support transparency.",
        ],
      },
    ],
    faq: [
      {
        question: "Is JPG to PNG conversion free?",
        answer:
          "Yes. ConvertImageFreely provides a free browser-based JPG to PNG converter without requiring an account or software installation.",
      },
      {
        question: "Are my JPG images uploaded?",
        answer:
          "The conversion is performed directly in your browser, so your image does not need to be uploaded to a remote server for the conversion.",
      },
    ],
  },

  {
    slug: "how-to-convert-png-to-jpg",
    title: "How to Convert PNG to JPG",
    description:
      "Learn how to convert PNG images to JPG format and when JPG can be a better choice for smaller image files.",
    relatedTool: "png-to-jpg",
    sections: [
      {
        heading: "Why convert PNG to JPG?",
        paragraphs: [
          "PNG is useful when image quality and transparency are important, but PNG files can be relatively large. JPG is often more suitable for photographs and situations where a smaller file size is preferred.",
          "Converting PNG to JPG can make an image easier to share, store, or upload to websites that prefer JPG files.",
        ],
      },
      {
        heading: "How to convert PNG to JPG",
        paragraphs: [
          "Select the PNG image you want to convert.",
          "Start the conversion and allow your browser to process the image.",
          "Download the resulting JPG image when the conversion is complete.",
        ],
      },
      {
        heading: "Things to know before converting",
        paragraphs: [
          "JPG does not support transparent backgrounds. If your PNG contains transparency, the transparent areas may need to be represented by a solid background in the resulting JPG.",
          "Because JPG uses lossy compression, the converted image may not contain exactly the same image data as the original PNG.",
        ],
      },
    ],
    faq: [
      {
        question: "Will PNG transparency be preserved?",
        answer:
          "No. JPG does not support transparency. Transparent areas of a PNG therefore cannot remain transparent in a standard JPG image.",
      },
      {
        question: "Will the JPG file be smaller?",
        answer:
          "Often, yes. JPG is designed to provide relatively small files, particularly for photographic images, although the final size depends on the original image.",
      },
    ],
  },

  {
    slug: "how-to-convert-jpg-to-webp",
    title: "How to Convert JPG to WebP",
    description:
      "Learn how to convert JPG images to WebP format and why WebP can be useful for websites and online applications.",
    relatedTool: "jpg-to-webp",
    sections: [
      {
        heading: "Why convert JPG to WebP?",
        paragraphs: [
          "WebP is a modern image format designed for efficient delivery on the web. Converting JPG images to WebP can help reduce file sizes while maintaining good visual quality.",
          "Smaller image files can be useful for websites because they require less data to transfer to visitors.",
        ],
      },
      {
        heading: "How to convert JPG to WebP",
        paragraphs: [
          "Select the JPG image you want to convert.",
          "Start the JPG to WebP conversion in your browser.",
          "Download the WebP image after the conversion finishes.",
        ],
      },
      {
        heading: "When should you use WebP?",
        paragraphs: [
          "WebP is particularly useful for websites, blogs, online stores, and web applications where image file size can affect loading performance.",
          "Before replacing existing images with WebP files, make sure the applications and services in your workflow support the format.",
        ],
      },
    ],
    faq: [
      {
        question: "Is WebP better than JPG?",
        answer:
          "Neither format is always better. WebP can provide efficient compression for web use, while JPG remains widely supported and is commonly used for photographs.",
      },
      {
        question: "Can I use WebP on a website?",
        answer:
          "Yes. WebP is widely supported by modern web browsers and is commonly used for website images.",
      },
    ],
  },

  {
    slug: "how-to-convert-png-to-webp",
    title: "How to Convert PNG to WebP",
    description:
      "Learn how to convert PNG images to WebP and reduce image file sizes for web use.",
    relatedTool: "png-to-webp",
    sections: [
      {
        heading: "Why convert PNG to WebP?",
        paragraphs: [
          "PNG is a useful lossless image format, but PNG files can become large, especially for detailed images. WebP can provide smaller files while maintaining good visual quality.",
          "This can make WebP useful when optimizing images for websites and web applications.",
        ],
      },
      {
        heading: "How to convert PNG to WebP",
        paragraphs: [
          "Choose the PNG image you want to convert.",
          "Run the conversion directly in your browser.",
          "Download the converted WebP image when processing is complete.",
        ],
      },
      {
        heading: "PNG and WebP differences",
        paragraphs: [
          "PNG is widely used for graphics, screenshots, and images where lossless quality is important. WebP offers modern compression options and is designed with web delivery in mind.",
          "The best format depends on how the image will be used and which applications or platforms need to support it.",
        ],
      },
    ],
    faq: [
      {
        question: "Does WebP reduce image file size?",
        answer:
          "WebP can produce smaller files than PNG in many situations, although the exact result depends on the image and conversion settings.",
      },
      {
        question: "Can WebP preserve transparency?",
        answer:
          "Yes. WebP supports transparency, making it suitable for many use cases where PNG transparency is required.",
      },
    ],
  },

  {
    slug: "how-to-convert-webp-to-jpg",
    title: "How to Convert WebP to JPG",
    description:
      "Learn how to convert WebP images to JPG for compatibility with applications and services that require JPG files.",
    relatedTool: "webp-to-jpg",
    sections: [
      {
        heading: "Why convert WebP to JPG?",
        paragraphs: [
          "WebP is widely supported today, but some older applications, websites, and workflows may still expect JPG files.",
          "Converting WebP to JPG can make an image easier to use with systems that specifically require the JPG format.",
        ],
      },
      {
        heading: "How to convert WebP to JPG",
        paragraphs: [
          "Select the WebP image from your device.",
          "Start the conversion in your browser.",
          "Download the resulting JPG image after processing is complete.",
        ],
      },
      {
        heading: "WebP and JPG differences",
        paragraphs: [
          "JPG is one of the most widely supported image formats and is commonly used for photographs. WebP is a newer format designed to provide efficient compression for modern web use.",
          "Choose JPG when broad compatibility is important and WebP when efficient web delivery is a priority.",
        ],
      },
    ],
    faq: [
      {
        question: "Why would I convert WebP to JPG?",
        answer:
          "You may need JPG when an application, website, or device does not support WebP or specifically requires a JPG file.",
      },
      {
        question: "Can I convert WebP to JPG without installing software?",
        answer:
          "Yes. ConvertImageFreely provides a browser-based WebP to JPG converter that does not require additional software.",
      },
    ],
  },

  {
    slug: "jpg-vs-png",
    title: "JPG vs PNG: What's the Difference?",
    description:
      "Compare JPG and PNG image formats and learn which format is better for photographs, graphics, transparency, and web use.",
    sections: [
      {
        heading: "What is JPG?",
        paragraphs: [
          "JPG is a widely used image format that uses lossy compression. It is particularly common for photographs because it can provide relatively small files while maintaining acceptable visual quality.",
          "JPG is supported by a wide range of applications, devices, websites, and operating systems.",
        ],
      },
      {
        heading: "What is PNG?",
        paragraphs: [
          "PNG uses lossless compression and is commonly used for graphics, screenshots, logos, and images where preserving sharp details is important.",
          "PNG also supports transparent backgrounds, which makes it useful for logos, icons, and other graphic elements.",
        ],
      },
      {
        heading: "Which format should you choose?",
        paragraphs: [
          "JPG is often a good choice for photographs and situations where keeping the file size relatively small is important.",
          "PNG is often a better choice for graphics, screenshots, logos, and images that require transparency or lossless quality.",
        ],
      },
    ],
    faq: [
      {
        question: "Is PNG higher quality than JPG?",
        answer:
          "PNG uses lossless compression, so it can preserve image information better during compression. However, JPG can provide excellent visual quality with substantially smaller files for many photographs.",
      },
      {
        question: "Which format is better for websites?",
        answer:
          "It depends on the image. JPG is often suitable for photographs, while PNG can be useful for graphics and transparent images.",
      },
    ],
  },

  {
    slug: "jpg-vs-webp",
    title: "JPG vs WebP: Which Image Format Is Better?",
    description:
      "Compare JPG and WebP to understand the differences in compression, compatibility, file size, and web performance.",
    sections: [
      {
        heading: "JPG and WebP at a glance",
        paragraphs: [
          "JPG is an established image format with extremely broad compatibility. WebP is a newer format designed to provide efficient image compression for modern web use.",
          "Both formats can be useful for photographs, but the best choice depends on your compatibility and file-size requirements.",
        ],
      },
      {
        heading: "JPG compatibility",
        paragraphs: [
          "JPG has been supported by image software, operating systems, browsers, and online services for many years. This makes it a safe choice when compatibility with older systems matters.",
        ],
      },
      {
        heading: "WebP for web performance",
        paragraphs: [
          "WebP can provide efficient compression and is widely supported by modern browsers. Smaller images can reduce the amount of data that needs to be downloaded by website visitors.",
          "For modern websites, WebP can therefore be an attractive alternative to JPG when the surrounding tools and platforms support it.",
        ],
      },
    ],
    faq: [
      {
        question: "Is WebP smaller than JPG?",
        answer:
          "WebP can produce smaller files for similar visual quality in many cases, but the result depends on the image and compression settings.",
      },
      {
        question: "Should I replace every JPG with WebP?",
        answer:
          "Not necessarily. Consider browser and application compatibility, image quality requirements, and your site's overall image delivery strategy.",
      },
    ],
  },

  {
    slug: "png-vs-webp",
    title: "PNG vs WebP: Which Format Should You Use?",
    description:
      "Compare PNG and WebP and learn which format is suitable for graphics, transparency, image quality, and websites.",
    sections: [
      {
        heading: "PNG and WebP differences",
        paragraphs: [
          "PNG is a well-established lossless format that is commonly used for graphics, screenshots, and transparent images. WebP is a newer format designed to provide efficient image compression for web use.",
          "Both formats can support transparency, but their compression characteristics and compatibility can differ.",
        ],
      },
      {
        heading: "When PNG is a good choice",
        paragraphs: [
          "PNG is useful when lossless image quality is important or when you need a format that is widely supported by image editing and design software.",
          "It is particularly common for logos, icons, screenshots, diagrams, and other graphics with sharp edges.",
        ],
      },
      {
        heading: "When WebP is a good choice",
        paragraphs: [
          "WebP can be useful when reducing image file size is important, particularly for websites and online applications.",
          "Before choosing WebP for a particular workflow, check that the software or service you use supports the format.",
        ],
      },
    ],
    faq: [
      {
        question: "Does WebP support transparency?",
        answer:
          "Yes. WebP supports transparent images, so it can be used for many of the same types of graphics that commonly use PNG.",
      },
      {
        question: "Is PNG better than WebP?",
        answer:
          "Neither format is universally better. PNG can be preferable for compatibility and lossless workflows, while WebP can be advantageous when efficient web delivery is important.",
      },
    ],
  },

  {
    slug: "how-to-reduce-image-file-size",
    title: "How to Reduce Image File Size",
    description:
      "Learn practical ways to reduce image file size while maintaining suitable image quality for websites, sharing, and storage.",
    sections: [
      {
        heading: "Why reduce image file size?",
        paragraphs: [
          "Large image files take more storage space and require more data to upload or download. Reducing file size can make images easier to share and can help websites deliver images more efficiently.",
        ],
      },
      {
        heading: "Choose an appropriate image format",
        paragraphs: [
          "The image format has a major effect on file size. JPG is commonly used for photographs, while WebP can provide efficient compression for many web images. PNG is useful when lossless quality or transparency is important.",
        ],
      },
      {
        heading: "Resize large images",
        paragraphs: [
          "If an image is much larger than the size at which it will be displayed, reducing its dimensions can significantly reduce the amount of image data.",
          "For example, an image intended to appear at a small size on a website does not necessarily need to retain extremely large pixel dimensions.",
        ],
      },
      {
        heading: "Balance quality and file size",
        paragraphs: [
          "The smallest possible file is not always the best result. Choose a file size that provides an appropriate balance between visual quality and loading or storage requirements.",
        ],
      },
    ],
    faq: [
      {
        question: "Which image format usually has the smallest file size?",
        answer:
          "There is no single format that always produces the smallest file. The result depends on the image, dimensions, compression method, and quality settings.",
      },
      {
        question: "Does converting an image always reduce its size?",
        answer:
          "No. Conversion can make a file smaller, larger, or roughly the same size depending on the source format and conversion settings.",
      },
    ],
  },

  {
    slug: "what-is-webp",
    title: "What Is WebP and Why Is It Used?",
    description:
      "Learn what WebP is, how it compares with JPG and PNG, and why it is commonly used for images on modern websites.",
    sections: [
      {
        heading: "What is WebP?",
        paragraphs: [
          "WebP is an image format developed for efficient image delivery on the web. It supports both lossy and lossless compression and can also support transparency.",
          "Its goal is to provide useful image quality while keeping image files efficient for online delivery.",
        ],
      },
      {
        heading: "Why websites use WebP",
        paragraphs: [
          "Images can account for a significant amount of the data transferred when loading a web page. Efficient image formats can therefore help reduce the amount of data that browsers need to download.",
          "WebP is widely supported by modern browsers, making it a practical format for many websites and web applications.",
        ],
      },
      {
        heading: "WebP compared with JPG and PNG",
        paragraphs: [
          "JPG remains a highly compatible choice for photographs, while PNG is commonly used for lossless graphics and transparent images. WebP provides another option with modern compression capabilities.",
          "The best format depends on the image and the requirements of the website, application, or workflow.",
        ],
      },
    ],
    faq: [
      {
        question: "Is WebP better than PNG?",
        answer:
          "WebP can provide smaller files in many situations, but PNG may still be preferable for certain editing workflows, compatibility requirements, or lossless image processing.",
      },
      {
        question: "Is WebP better than JPG?",
        answer:
          "WebP can provide efficient compression and is well suited to modern web delivery, while JPG has extremely broad compatibility. The better choice depends on the intended use.",
      },
    ],
  },
];