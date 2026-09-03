import type { ReactNode } from "react";
import ImageCompressor from "@/components/ImageCompressor";
import ImageResizer from "@/components/ImageResizer";
import ImageCropper from "@/components/ImageCropper";
import ImageRotator from "@/components/ImageRotator";
import BatchImageConverter from "@/components/BatchImageConverter";

export type ToolSlug =
  | "compress-image"
  | "resize-image"
  | "crop-image"
  | "rotate-image"
  | "batch-converter";

export type Locale = "ko" | "ja" | "zh" | "es" | "de" | "fr";

type Copy = {
  badge: string;
  heroTitle: string;
  heroDescription: string;
  privacyNote: string;
  how: string;
  stepsTitle: string;
  stepsDescription: string;
  steps: { title: string; description: string }[];
  privacyTitle: string;
  privacyDescription: string;
  why: string;
  whyTitle: string;
  whyDescription: string;
  reasons: { title: string; description: string }[];
  extraTitle: string;
  extraDescription: string;
  extraCards: { title: string; description: string }[];
};

const copies: Partial<Record<Locale, Record<ToolSlug, Copy>>> = {
  ko: {
    "compress-image": {
      badge: "무료 · 브라우저 기반 · 회원가입 불필요",
      heroTitle: "온라인에서 이미지 압축",
      heroDescription: "JPG, PNG, WebP 이미지의 파일 크기를 줄이면서 좋은 화질을 유지하세요. 모든 처리는 브라우저에서 직접 이루어집니다.",
      privacyNote: "이미지는 브라우저에서 직접 처리됩니다. 서버에 파일을 업로드할 필요가 없습니다.",
      how: "사용 방법", stepsTitle: "세 단계로 간단하게 이미지 압축",
      stepsDescription: "별도의 프로그램을 설치하지 않고 이미지 파일 크기를 줄일 수 있습니다.",
      steps: [
        {title:"이미지 선택",description:"기기에서 JPG, PNG 또는 WebP 이미지를 선택해 이미지 압축기에 불러옵니다."},
        {title:"압축 설정 조정",description:"파일 크기와 이미지 품질 사이에서 원하는 균형에 맞게 압축 또는 품질 설정을 선택합니다."},
        {title:"결과 다운로드",description:"압축된 이미지를 다운로드해 웹사이트, 공유, 저장 등에 사용합니다."}
      ],
      privacyTitle:"이미지는 기기에 그대로 남습니다.",
      privacyDescription:"이미지 압축은 브라우저에서 직접 수행됩니다. 파일을 원격 서버에 업로드할 필요가 없습니다.",
      why:"이미지 압축이 필요한 이유", whyTitle:"이미지 파일 크기를 줄이면 좋은 점",
      whyDescription:"작은 이미지 파일은 저장, 공유, 웹 사용이 더 편리합니다.",
      reasons:[
        {title:"웹사이트 로딩 속도 향상",description:"불필요하게 큰 이미지를 압축하면 브라우저가 다운로드해야 하는 데이터 양을 줄이는 데 도움이 됩니다."},
        {title:"공유하기 쉬운 작은 파일",description:"작은 이미지는 이메일 첨부, 웹사이트 업로드, 메신저 전송 및 저장이 편리합니다."},
        {title:"저장 공간 절약",description:"많은 사진이나 웹사이트 이미지를 압축하면 필요한 저장 공간을 줄일 수 있습니다."}
      ],
      extraTitle:"화질과 파일 크기의 균형", extraDescription:"압축률이 높을수록 일반적으로 파일은 작아지지만 지나친 압축은 화질 저하를 만들 수 있습니다.",
      extraCards:[
        {title:"높은 품질",description:"화질을 중요하게 생각하는 사진이나 이미지에 적합합니다."},
        {title:"적당한 압축",description:"웹사이트와 일반적인 공유 용도에서 좋은 출발점이 될 수 있습니다."},
        {title:"높은 압축",description:"파일 크기가 매우 중요한 경우 사용할 수 있지만 화질을 확인하는 것이 좋습니다."}
      ]
    },
    "resize-image": {
      badge:"무료 · 브라우저 기반 · 회원가입 불필요", heroTitle:"온라인에서 이미지 크기 조절",
      heroDescription:"픽셀 또는 비율로 이미지 크기를 변경하세요. JPG, PNG, WebP 이미지를 브라우저에서 직접 처리할 수 있습니다.",
      privacyNote:"이미지는 브라우저에서 직접 처리됩니다. 서버에 파일을 업로드할 필요가 없습니다.",
      how:"사용 방법", stepsTitle:"세 단계로 간단하게 이미지 크기 조절", stepsDescription:"프로그램을 설치하지 않고 이미지의 가로와 세로 크기를 변경할 수 있습니다.",
      steps:[
        {title:"이미지 선택",description:"기기에서 JPG, PNG 또는 WebP 이미지를 선택해 이미지 크기 조절기에 불러옵니다."},
        {title:"새 크기 설정",description:"원하는 가로와 세로 픽셀을 입력하거나 비율을 사용해 이미지 크기를 변경합니다."},
        {title:"결과 다운로드",description:"새로운 크기를 적용하고 변경된 이미지를 기기에 다운로드합니다."}
      ],
      privacyTitle:"이미지는 기기에 그대로 남습니다.", privacyDescription:"이미지 크기 조절은 브라우저에서 직접 수행됩니다. 파일을 원격 서버에 업로드할 필요가 없습니다.",
      why:"이미지 크기 조절이 필요한 이유", whyTitle:"이미지 크기를 변경하는 이유", whyDescription:"사용 목적에 맞는 이미지 크기는 저장과 공유, 웹 사용을 더 편리하게 합니다.",
      reasons:[
        {title:"이미지 크기 줄이기",description:"실제 표시 크기보다 지나치게 큰 이미지는 가로와 세로를 줄여 관리하기 쉽게 만들 수 있습니다."},
        {title:"웹사이트용 이미지 준비",description:"필요한 표시 크기에 맞추면 불필요하게 큰 이미지 데이터를 줄이는 데 도움이 됩니다."},
        {title:"형식은 그대로 유지",description:"크기 조절은 다른 형식으로 변환하지 않고 JPG, PNG, WebP의 크기만 변경할 수 있습니다."}
      ],
      extraTitle:"비율을 유지해 왜곡 방지", extraDescription:"가로와 세로를 독립적으로 변경하면 이미지가 늘어나거나 눌릴 수 있습니다.",
      extraCards:[
        {title:"원본 비율 유지",description:"사람이나 물체가 왜곡되지 않도록 원래 가로세로 비율을 유지하는 것이 좋습니다."},
        {title:"픽셀 기준",description:"정확한 가로와 세로 크기가 필요한 경우 픽셀 단위로 설정합니다."},
        {title:"비율 기준",description:"원본 크기에서 일정 비율로 줄이거나 확대할 때 편리합니다."}
      ]
    },
    "crop-image": {
      badge:"무료 · 브라우저 기반 · 회원가입 불필요", heroTitle:"온라인에서 이미지 자르기",
      heroDescription:"JPG, PNG, WebP 이미지에서 필요한 영역만 잘라내세요. 모든 작업은 브라우저에서 직접 이루어집니다.",
      privacyNote:"이미지는 브라우저에서 직접 처리됩니다. 서버에 파일을 업로드할 필요가 없습니다.",
      how:"사용 방법", stepsTitle:"세 단계로 간단하게 이미지 자르기", stepsDescription:"원하는 영역을 선택하고 잘라낸 이미지를 바로 다운로드할 수 있습니다.",
      steps:[
        {title:"이미지 선택",description:"기기에서 JPG, PNG 또는 WebP 이미지를 선택해 이미지 자르기 도구에 불러옵니다."},
        {title:"자를 영역 선택",description:"남길 영역을 조정하고 필요한 부분만 선택합니다. 선택 영역은 이동하거나 크기를 변경할 수 있습니다."},
        {title:"결과 다운로드",description:"자르기를 적용하고 완성된 이미지를 기기에 다운로드합니다."}
      ],
      privacyTitle:"이미지는 기기에 그대로 남습니다.", privacyDescription:"이미지 자르기는 브라우저에서 직접 수행됩니다. 파일을 원격 서버에 업로드할 필요가 없습니다.",
      why:"이미지 자르기가 필요한 이유", whyTitle:"이미지를 자르면 좋은 점", whyDescription:"불필요한 영역을 제거하고 중요한 부분에 시선을 집중할 수 있습니다.",
      reasons:[
        {title:"불필요한 영역 제거",description:"사진 주변의 여백이나 필요 없는 부분을 잘라내 더 집중된 구도를 만들 수 있습니다."},
        {title:"원하는 구도 만들기",description:"프로필, 웹사이트, 문서, SNS 등에 맞게 주요 피사체의 위치와 구도를 조정할 수 있습니다."},
        {title:"용도에 맞는 이미지 준비",description:"플랫폼이나 레이아웃에 필요한 이미지 형태에 맞춰 기존 이미지를 준비할 수 있습니다."}
      ],
      extraTitle:"자르기와 크기 조절은 다릅니다.", extraDescription:"자르기는 이미지에서 보이는 영역을 변경하고, 크기 조절은 전체 이미지의 가로세로 크기를 변경합니다.",
      extraCards:[
        {title:"자르기",description:"이미지의 일부를 제거하고 보이는 영역을 변경합니다."},
        {title:"크기 조절",description:"전체 이미지를 유지하면서 가로와 세로 크기를 변경합니다."},
        {title:"함께 사용",description:"필요한 영역을 먼저 자른 다음 원하는 픽셀 크기로 조절할 수도 있습니다."}
      ]
    },
    "rotate-image": {
      badge:"무료 · 브라우저 기반 · 회원가입 불필요", heroTitle:"온라인에서 이미지 회전 및 뒤집기",
      heroDescription:"JPG, PNG, WebP 이미지를 90, 180, 270도 회전하거나 가로 및 세로로 뒤집을 수 있습니다.",
      privacyNote:"이미지는 브라우저에서 직접 처리됩니다. 서버에 파일을 업로드할 필요가 없습니다.",
      how:"사용 방법", stepsTitle:"세 단계로 간단하게 이미지 회전 또는 뒤집기", stepsDescription:"프로그램을 설치하지 않고 이미지 방향을 바로 수정할 수 있습니다.",
      steps:[
        {title:"이미지 선택",description:"기기에서 JPG, PNG 또는 WebP 이미지를 선택해 회전 도구에 불러옵니다."},
        {title:"회전 또는 뒤집기",description:"시계 방향이나 반시계 방향으로 회전하거나 가로 및 세로로 뒤집습니다."},
        {title:"결과 다운로드",description:"변경을 적용하고 수정된 이미지를 기기에 다운로드합니다."}
      ],
      privacyTitle:"이미지는 기기에 그대로 남습니다.", privacyDescription:"이미지 회전과 뒤집기는 브라우저에서 직접 수행됩니다. 파일을 원격 서버에 업로드할 필요가 없습니다.",
      why:"이미지 회전이 필요한 이유", whyTitle:"이미지를 회전하거나 뒤집는 이유", whyDescription:"사진의 방향을 바로잡고 이미지의 방향을 쉽게 변경할 수 있습니다.",
      reasons:[
        {title:"옆으로 돌아간 사진 수정",description:"기기나 앱 사이에서 사진을 옮긴 뒤 방향이 잘못 표시되는 경우 회전으로 바로잡을 수 있습니다."},
        {title:"거꾸로 된 이미지 수정",description:"180도 회전을 사용하면 거꾸로 된 이미지를 빠르게 바로잡을 수 있습니다."},
        {title:"미러 이미지 만들기",description:"가로 또는 세로 뒤집기를 사용해 반전된 이미지를 만들 수 있습니다."}
      ],
      extraTitle:"회전 옵션", extraDescription:"이미지 방향에 따라 필요한 변환을 선택할 수 있습니다.",
      extraCards:[
        {title:"90°",description:"세로 이미지를 가로 방향으로 바꾸거나 옆으로 돌아간 이미지를 바로잡을 때 유용합니다."},
        {title:"180°",description:"거꾸로 표시된 이미지를 원래 방향으로 돌릴 때 사용할 수 있습니다."},
        {title:"뒤집기",description:"가로 또는 세로 방향으로 이미지를 반전할 수 있습니다."}
      ]
    },
    "batch-converter": {
      badge:"무료 · 브라우저 기반 · 회원가입 불필요", heroTitle:"여러 이미지를 한 번에 변환",
      heroDescription:"JPG, PNG, WebP 이미지를 하나씩 처리하지 않고 여러 파일을 한 번에 변환하세요. 모든 처리는 브라우저에서 이루어집니다.",
      privacyNote:"이미지는 브라우저에서 직접 처리됩니다. 서버에 파일을 업로드할 필요가 없습니다.",
      how:"사용 방법", stepsTitle:"세 단계로 간단하게 여러 이미지 변환", stepsDescription:"여러 파일을 한 번에 처리해 반복 작업을 줄일 수 있습니다.",
      steps:[
        {title:"여러 이미지 선택",description:"변환할 이미지 파일을 여러 개 선택합니다. 각 파일을 반복해서 처리할 필요가 없습니다."},
        {title:"출력 형식 선택",description:"사용 목적에 맞는 변환 결과 형식을 선택합니다."},
        {title:"파일 다운로드",description:"선택한 이미지를 변환한 후 처리가 끝난 파일을 다운로드합니다."}
      ],
      privacyTitle:"이미지는 기기에 그대로 남습니다.", privacyDescription:"일괄 변환은 브라우저에서 직접 수행됩니다. 파일을 원격 서버에 업로드할 필요가 없습니다.",
      why:"일괄 변환이 필요한 이유", whyTitle:"여러 이미지를 한 번에 변환하는 이유", whyDescription:"같은 변환을 여러 이미지에 적용해야 할 때 일괄 처리가 편리합니다.",
      reasons:[
        {title:"시간 절약",description:"많은 이미지를 하나씩 변환하는 반복 작업을 줄이고 여러 파일을 함께 처리할 수 있습니다."},
        {title:"일관된 출력 형식",description:"한 프로젝트에서 사용하는 이미지들을 같은 형식으로 한 번에 준비하기 쉽습니다."},
        {title:"많은 이미지에 유용",description:"웹사이트 이미지, 사진 모음, 문서 등 여러 파일을 다룰 때 편리합니다."}
      ],
      extraTitle:"지원 이미지 형식", extraDescription:"사용 목적에 따라 적절한 출력 형식을 선택하세요.",
      extraCards:[
        {title:"JPG",description:"사진과 다양한 색상이 포함된 이미지에 널리 사용됩니다."},
        {title:"PNG",description:"투명도가 필요하거나 무손실 품질이 중요한 그래픽에 적합합니다."},
        {title:"WebP",description:"웹에서 파일 크기와 이미지 품질 사이의 균형을 맞추는 데 유용합니다."}
      ]
    }
  },  
};

function toolComponent(slug: ToolSlug): ReactNode {
  if (slug === "compress-image") return <ImageCompressor />;
  if (slug === "resize-image") return <ImageResizer />;
  if (slug === "crop-image") return <ImageCropper />;
  if (slug === "rotate-image") return <ImageRotator />;
  return <BatchImageConverter />;
}

function fallbackCopy(locale: Locale, slug: ToolSlug): Copy {
  const en: Record<ToolSlug, Copy> = {
    "compress-image": {
      badge:"Free · Browser-based · No sign up",heroTitle:"Compress images online",heroDescription:"Reduce JPG, PNG and WebP image file sizes while keeping good visual quality. Everything happens directly in your browser.",privacyNote:"Your images are processed directly in your browser. No server upload is required.",how:"How it works",stepsTitle:"Compress your image in three simple steps",stepsDescription:"Reduce image file size without installing additional software.",steps:[{title:"Select your image",description:"Choose a JPG, PNG or WebP image from your device."},{title:"Adjust compression",description:"Choose the right balance between file size and image quality."},{title:"Download the result",description:"Download your compressed image directly to your device."}],privacyTitle:"Your images stay on your device",privacyDescription:"Image processing happens directly in your browser.",why:"Why compress images?",whyTitle:"Why reduce image file size?",whyDescription:"Smaller image files are easier to store, share, and use online.",reasons:[{title:"Faster website loading",description:"Smaller files can reduce the amount of data a browser needs to download."},{title:"Smaller files for sharing",description:"Smaller images are easier to attach, upload, send, and store."},{title:"Save storage space",description:"Compression can reduce the storage needed for image collections."}],extraTitle:"Quality and file size",extraDescription:"Higher compression usually creates smaller files, but excessive compression can reduce visual quality.",extraCards:[{title:"Higher quality",description:"Useful when image quality is the priority."},{title:"Moderate compression",description:"A useful starting point for websites and everyday sharing."},{title:"Higher compression",description:"Useful when file size is especially important."}]
    },
    "resize-image": {badge:"Free · Browser-based · No sign up",heroTitle:"Resize images online",heroDescription:"Change image dimensions by pixels or percentage. Resize JPG, PNG and WebP images directly in your browser.",privacyNote:"Your images are processed directly in your browser. No server upload is required.",how:"How it works",stepsTitle:"Resize your image in three simple steps",stepsDescription:"Change image dimensions without installing software.",steps:[{title:"Select your image",description:"Choose a JPG, PNG or WebP image from your device."},{title:"Set the new dimensions",description:"Enter the desired width and height or use a percentage."},{title:"Download the resized image",description:"Apply the new dimensions and download the result."}],privacyTitle:"Your images stay on your device",privacyDescription:"Images are resized directly in your browser.",why:"Why resize images?",whyTitle:"Why change image dimensions?",whyDescription:"The right dimensions make images easier to store, share, and use online.",reasons:[{title:"Reduce image dimensions",description:"Reduce unnecessarily large width and height."},{title:"Prepare images for websites",description:"Match images to their intended display size."},{title:"Keep the format",description:"Resize JPG, PNG and WebP without changing the format."}],extraTitle:"Keep the aspect ratio",extraDescription:"Keeping the original aspect ratio helps prevent distortion.",extraCards:[{title:"Original ratio",description:"Keep people and objects from looking stretched."},{title:"Pixel size",description:"Use exact width and height when needed."},{title:"Percentage",description:"Convenient for proportional resizing."}]},
    "crop-image": {badge:"Free · Browser-based · No sign up",heroTitle:"Crop images online",heroDescription:"Crop JPG, PNG and WebP images to the area you need. Everything works directly in your browser.",privacyNote:"Your images are processed directly in your browser. No server upload is required.",how:"How it works",stepsTitle:"Crop your image in three simple steps",stepsDescription:"Select the area you want to keep and download the cropped image.",steps:[{title:"Select your image",description:"Choose a JPG, PNG or WebP image from your device."},{title:"Select the area to crop",description:"Adjust the crop area to keep the part of the image you want."},{title:"Download the cropped image",description:"Apply the crop and download the result."}],privacyTitle:"Your images stay on your device",privacyDescription:"Images are cropped directly in your browser.",why:"Why crop images?",whyTitle:"Why crop an image?",whyDescription:"Cropping removes unwanted areas and focuses attention on the important part.",reasons:[{title:"Remove unwanted areas",description:"Remove extra space around the main subject."},{title:"Create the right composition",description:"Adjust the visible area for profiles, websites, documents, and social media."},{title:"Prepare images for different uses",description:"Create the shape or composition needed for different layouts."}],extraTitle:"Crop vs resize",extraDescription:"Cropping changes what is visible; resizing changes the overall dimensions.",extraCards:[{title:"Crop",description:"Remove part of an image and change the visible area."},{title:"Resize",description:"Change the width and height of the whole image."},{title:"Use both",description:"Crop first and then resize to the desired dimensions."}]},
    "rotate-image": {badge:"Free · Browser-based · No sign up",heroTitle:"Rotate & flip images online",heroDescription:"Rotate JPG, PNG and WebP images by 90, 180 or 270 degrees, or flip them horizontally and vertically.",privacyNote:"Your images are processed directly in your browser. No server upload is required.",how:"How it works",stepsTitle:"Rotate or flip your image in three simple steps",stepsDescription:"Correct image orientation without installing software.",steps:[{title:"Select your image",description:"Choose a JPG, PNG or WebP image from your device."},{title:"Rotate or flip",description:"Rotate clockwise or counterclockwise, or flip horizontally or vertically."},{title:"Download the result",description:"Apply the transformation and download the corrected image."}],privacyTitle:"Your images stay on your device",privacyDescription:"Images are rotated and flipped directly in your browser.",why:"Why rotate images?",whyTitle:"Why rotate or flip an image?",whyDescription:"Correct orientation and adjust image direction easily.",reasons:[{title:"Correct sideways photos",description:"Fix photos that appear sideways after transfer."},{title:"Turn an image upside down",description:"Use a 180-degree rotation to correct upside-down images."},{title:"Create a mirrored image",description:"Flip horizontally or vertically to create a mirrored version."}],extraTitle:"Rotation options",extraDescription:"Choose the transformation that fits the image orientation.",extraCards:[{title:"90°",description:"Useful for turning portrait images into landscape orientation."},{title:"180°",description:"Useful for correcting upside-down images."},{title:"Flip",description:"Mirror an image horizontally or vertically."}]},
    "batch-converter": {badge:"Free · Browser-based · No sign up",heroTitle:"Convert multiple images at once",heroDescription:"Batch convert JPG, PNG and WebP images without processing each file individually.",privacyNote:"Your images are processed directly in your browser. No server upload is required.",how:"How it works",stepsTitle:"Convert multiple images in three simple steps",stepsDescription:"Process multiple image files together instead of one by one.",steps:[{title:"Select multiple images",description:"Select the image files you want to convert."},{title:"Choose the output format",description:"Select the format for the converted files."},{title:"Download your files",description:"Convert the selected images and download the results."}],privacyTitle:"Your images stay on your device",privacyDescription:"Batch conversion is performed directly in your browser.",why:"Why batch convert?",whyTitle:"Why convert multiple images at once?",whyDescription:"Batch processing is useful when many images need the same conversion.",reasons:[{title:"Save time",description:"Reduce repetitive conversion steps."},{title:"Keep a consistent output format",description:"Prepare a consistent set of files for a project."},{title:"Useful for large image collections",description:"Helpful for website assets, photos, and documents."}],extraTitle:"Supported formats",extraDescription:"Choose the format that best fits your intended use.",extraCards:[{title:"JPG",description:"Widely used for photographs."},{title:"PNG",description:"Useful for transparency and lossless graphics."},{title:"WebP",description:"Useful for efficient web delivery."}]}
  };
  return en[slug];
}

function getCopy(locale: Locale, slug: ToolSlug): Copy {
  const localized = copies[locale];

  if (localized && localized[slug]) {
    return localized[slug];
  }

  return fallbackCopy(locale, slug);
}

export default function LocalizedImageToolPage({ locale, slug }: { locale: Locale; slug: ToolSlug }) {
  const c = getCopy(locale, slug);
  return (
    <main>
      <section id="top" className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-16 md:pb-20 md:pt-20">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">{c.badge}</div>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">{c.heroTitle}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">{c.heroDescription}</p>
          </div>
          <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-4 shadow-lg shadow-blue-100/50 md:p-6">
            {toolComponent(slug)}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-gray-500">{c.privacyNote}</p>
        </div>
      </section>

      <section className="border-b border-blue-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">{c.how}</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{c.stepsTitle}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">{c.stepsDescription}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {c.steps.map((step, i) => (
              <div key={step.title} className={`rounded-2xl border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${i === 1 ? "border-purple-100 bg-purple-50/40" : "border-blue-100 bg-blue-50/40"}`}>
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl font-semibold ${i === 1 ? "bg-purple-100 text-purple-600" : "bg-blue-100 text-blue-600"}`}>{i + 1}</div>
                <div className={`mt-5 text-sm font-medium ${i === 1 ? "text-purple-600" : "text-blue-600"}`}>Step {i + 1}</div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 leading-7 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-blue-50/50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">🔒</div>
          <h2 className="mt-5 text-2xl font-bold text-gray-900">{c.privacyTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">{c.privacyDescription}</p>
          <div className="mt-5 text-sm font-medium text-blue-700">Private · Secure · Browser-based</div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">{c.why}</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{c.whyTitle}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">{c.whyDescription}</p>
          </div>
          <div className="space-y-10">
            {c.reasons.map((r) => <div key={r.title}><h3 className="text-2xl font-bold text-gray-900">{r.title}</h3><p className="mt-4 leading-8 text-gray-600">{r.description}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-blue-50/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">More information</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{c.extraTitle}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">{c.extraDescription}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {c.extraCards.map((card, i) => <div key={card.title} className={`rounded-2xl border bg-white p-7 shadow-sm ${i === 1 ? "border-purple-100" : "border-blue-100"}`}><h3 className="text-lg font-semibold text-gray-900">{card.title}</h3><p className="mt-3 leading-7 text-gray-600">{card.description}</p></div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
