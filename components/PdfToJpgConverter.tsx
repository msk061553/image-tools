 "use client";

import { ChangeEvent, DragEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import * as pdfjsLib from "pdfjs-dist";
import JSZip from "jszip";

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const MAX_FILE_SIZE = 50 * 1024 * 1024;
const MAX_PAGES = 30;
const MAX_DIMENSION = 3000;
const MAX_PIXELS = 8_000_000;

type PageOutput = { pageNumber: number; url: string; blob: Blob };

const translations = {
  en: {
    badge: "Free browser-based PDF tool", title: "PDF to JPG Converter",
    description: "Convert PDF pages into JPG images directly in your browser. Preview each page and download individual images or one ZIP file.",
    drop: "Drop your PDF file here", or: "or", browse: "Choose PDF",
    info: "PDF files · Max 50 MB · Up to 30 pages",
    privacy: "Your PDF stays on your device. Files are not uploaded to our servers.",
    selected: "Selected PDF", pages: "pages", convert: "Convert to JPG",
    converting: "Converting pages...", complete: "Conversion complete",
    downloadAll: "Download all as ZIP", download: "Download JPG",
    another: "Choose another PDF", remove: "Remove PDF",
    stepsTitle: "How to convert PDF to JPG",
    steps: [["1. Select a PDF", "Choose a PDF file from your device or drag it into the upload area."], ["2. Convert pages", "The tool renders each PDF page as a JPG image in your browser."], ["3. Download images", "Download individual page images or all converted pages in a ZIP file."]],
    aboutTitle: "Convert PDF pages into JPG images",
    about: "This PDF to JPG converter turns each page of a PDF document into a separate JPEG image. It is useful when you need to share a page as an image, add a document page to a presentation, or use a PDF page in an image-based workflow. Conversion is performed locally in your browser.",
    limitsTitle: "Image output and page limits",
    limits: "Pages are rendered at a screen-friendly resolution and exported as JPG images. To limit browser memory use, this tool supports PDF files up to 50 MB and documents with up to 30 pages. Output dimensions depend on each PDF page.",
    privacyTitle: "Are my PDF files uploaded?",
    privacyText: "No. Your PDF is read and rendered locally by your browser. The document contents are not sent to ConvertImageFreely for conversion. The PDF.js worker is served by this website, but your selected PDF remains on your device.",
    faqTitle: "Frequently asked questions",
    faq: [["Can I convert every page in a PDF?", "Yes. The tool converts all pages in the selected PDF, subject to the current 30-page limit."], ["Can I download one page at a time?", "Yes. Each converted page has its own JPG download link. You can also download all pages together as a ZIP file."], ["Why is there a page limit?", "Rendering PDF pages uses browser memory. The limit helps keep conversion responsive and reduces the risk of the browser running out of memory."], ["Does conversion preserve selectable text?", "No. JPG is an image format, so text and vector content on each page become pixels in the resulting image."]],
    errors: {
      invalid: "Please choose a valid PDF file.",
      large: "This PDF is larger than 50 MB. Please choose a smaller file.",
      many: "This PDF has more than 30 pages. Please use a smaller document.",
      read: "Unable to read this PDF. It may be damaged or password-protected.",
      convert: "The PDF could not be converted. Please try another file.",
      worker: "The PDF rendering worker could not be loaded. Check that public/pdf.worker.min.mjs exists, then restart the development server."
    }
  },
  ko: {
    badge: "무료 브라우저 기반 PDF 도구", title: "PDF to JPG 변환기",
    description: "PDF 문서의 각 페이지를 브라우저에서 JPG 이미지로 변환하세요. 페이지별 미리보기와 개별 다운로드, ZIP 일괄 다운로드를 지원합니다.",
    drop: "PDF 파일을 여기에 놓으세요", or: "또는", browse: "PDF 파일 선택",
    info: "PDF 파일 · 최대 50MB · 최대 30페이지",
    privacy: "PDF 파일은 기기에 남아 있으며 서버로 업로드되지 않습니다.",
    selected: "선택한 PDF", pages: "페이지", convert: "JPG로 변환",
    converting: "페이지 변환 중...", complete: "변환 완료",
    downloadAll: "전체 ZIP 다운로드", download: "JPG 다운로드",
    another: "다른 PDF 선택", remove: "PDF 삭제",
    stepsTitle: "PDF를 JPG로 변환하는 방법",
    steps: [["1. PDF 선택", "기기에서 PDF 파일을 선택하거나 업로드 영역으로 끌어다 놓으세요."], ["2. 페이지 변환", "브라우저에서 PDF의 각 페이지를 JPG 이미지로 렌더링합니다."], ["3. 이미지 다운로드", "페이지별로 다운로드하거나 모든 페이지를 ZIP 파일로 한 번에 받을 수 있습니다."]],
    aboutTitle: "PDF 페이지를 JPG 이미지로 변환",
    about: "이 PDF to JPG 변환기는 PDF 문서의 각 페이지를 별도의 JPEG 이미지로 만듭니다. 문서의 특정 페이지를 이미지로 공유하거나 프레젠테이션에 삽입할 때 유용합니다. 변환은 사용자의 브라우저에서 로컬로 처리됩니다.",
    limitsTitle: "이미지 출력 및 페이지 제한",
    limits: "각 페이지는 화면에서 사용하기 적합한 해상도로 렌더링된 후 JPG 이미지로 저장됩니다. 브라우저 메모리 사용량을 고려해 현재 최대 50MB, 30페이지까지 지원합니다.",
    privacyTitle: "PDF 파일이 서버에 업로드되나요?",
    privacyText: "아니요. PDF 파일은 브라우저에서 직접 읽고 렌더링합니다. 변환을 위해 문서 내용이 ConvertImageFreely 서버로 전송되지 않습니다. PDF.js 워커 파일은 웹사이트에서 제공되지만, 선택한 PDF 파일은 기기에 남아 있습니다.",
    faqTitle: "자주 묻는 질문",
    faq: [["PDF의 모든 페이지를 변환할 수 있나요?", "네. 현재 30페이지 제한 내에서 선택한 PDF의 모든 페이지를 변환합니다."], ["페이지 하나씩 다운로드할 수 있나요?", "네. 각 페이지에 개별 JPG 다운로드 링크가 제공됩니다. 전체 페이지를 ZIP 파일로 받을 수도 있습니다."], ["페이지 수 제한이 있는 이유는 무엇인가요?", "PDF 페이지 렌더링은 브라우저 메모리를 사용합니다. 원활한 처리와 메모리 부족 위험을 줄이기 위해 제한을 두었습니다."], ["변환 후 텍스트를 선택할 수 있나요?", "아니요. JPG는 이미지 형식이므로 페이지의 텍스트와 벡터 요소가 픽셀 이미지로 변환됩니다."]],
    errors: {
      invalid: "올바른 PDF 파일을 선택해 주세요.",
      large: "PDF 파일이 50MB를 초과합니다. 더 작은 파일을 선택해 주세요.",
      many: "PDF가 30페이지를 초과합니다. 페이지 수가 적은 문서를 사용해 주세요.",
      read: "PDF를 읽을 수 없습니다. 파일이 손상되었거나 암호로 보호되어 있을 수 있습니다.",
      convert: "PDF를 변환하지 못했습니다. 다른 파일로 다시 시도해 주세요.",
      worker: "PDF 렌더링 워커를 불러오지 못했습니다. public/pdf.worker.min.mjs 파일이 있는지 확인하고 개발 서버를 다시 시작해 주세요."
    }
  },
  ja: {
    badge: "無料のブラウザベースPDFツール", title: "PDF to JPG 変換ツール",
    description: "PDFの各ページをブラウザ内でJPG画像に変換します。ページのプレビュー、個別ダウンロード、ZIP一括ダウンロードに対応しています。",
    drop: "PDFファイルをここにドロップ", or: "または", browse: "PDFを選択",
    info: "PDFファイル · 最大50MB · 最大30ページ", privacy: "PDFはデバイス内で処理され、サーバーにアップロードされません。",
    selected: "選択したPDF", pages: "ページ", convert: "JPGに変換", converting: "ページを変換中...", complete: "変換完了",
    downloadAll: "すべてZIPでダウンロード", download: "JPGをダウンロード", another: "別のPDFを選択", remove: "PDFを削除",
    stepsTitle: "PDFをJPGに変換する方法",
    steps: [["1. PDFを選択", "デバイスからPDFを選択するか、アップロード領域にドラッグします。"], ["2. ページを変換", "ブラウザ内でPDFの各ページをJPG画像としてレンダリングします。"], ["3. 画像をダウンロード", "ページごとにダウンロードするか、ZIPファイルでまとめて保存できます。"]],
    aboutTitle: "PDFページをJPG画像に変換", about: "このツールはPDF文書の各ページを個別のJPEG画像に変換します。ページを画像として共有したり、プレゼンテーションに追加したりする場合に便利です。変換処理はブラウザ内で行われます。",
    limitsTitle: "画像出力とページ制限", limits: "各ページは画面表示に適した解像度でレンダリングされます。ブラウザのメモリ使用量を抑えるため、最大50MB、30ページまで対応しています。",
    privacyTitle: "PDFファイルはアップロードされますか？", privacyText: "いいえ。PDFはブラウザ内で読み込まれ、レンダリングされます。文書の内容が変換のためにサーバーへ送信されることはありません。",
    faqTitle: "よくある質問", faq: [["PDFのすべてのページを変換できますか？", "はい。30ページの制限内ですべてのページを変換します。"], ["ページごとにダウンロードできますか？", "はい。各ページを個別にJPGとして、またはZIPでまとめてダウンロードできます。"], ["なぜページ数に制限がありますか？", "PDFのレンダリングにはブラウザのメモリが必要なため、安定した処理のために制限しています。"], ["変換後もテキストを選択できますか？", "いいえ。JPGは画像形式のため、テキストやベクター要素はピクセル画像になります。"]],
    errors: { invalid: "有効なPDFファイルを選択してください。", large: "PDFが50MBを超えています。小さいファイルを選択してください。", many: "PDFが30ページを超えています。ページ数の少ない文書を使用してください。", read: "PDFを読み込めません。破損またはパスワード保護の可能性があります。", convert: "PDFを変換できませんでした。別のファイルでお試しください。", worker: "PDFワーカーを読み込めません。public/pdf.worker.min.mjsを確認し、開発サーバーを再起動してください。" }
  },
  zh: {
    badge: "免费浏览器 PDF 工具", title: "PDF 转 JPG 转换器",
    description: "直接在浏览器中将 PDF 的每一页转换为 JPG 图片。支持页面预览、单独下载和 ZIP 批量下载。",
    drop: "将 PDF 文件拖放到这里", or: "或", browse: "选择 PDF", info: "PDF 文件 · 最大 50 MB · 最多 30 页", privacy: "PDF 保留在您的设备上，不会上传到服务器。",
    selected: "已选择的 PDF", pages: "页", convert: "转换为 JPG", converting: "正在转换页面...", complete: "转换完成", downloadAll: "下载全部 ZIP", download: "下载 JPG", another: "选择其他 PDF", remove: "移除 PDF",
    stepsTitle: "如何将 PDF 转换为 JPG", steps: [["1. 选择 PDF", "从设备中选择 PDF 文件，或将文件拖入上传区域。"], ["2. 转换页面", "工具会在浏览器中将 PDF 的每一页渲染为 JPG 图片。"], ["3. 下载图片", "可以单独下载每一页，也可以将所有图片打包为 ZIP 文件。"]],
    aboutTitle: "将 PDF 页面转换为 JPG 图片", about: "此工具会将 PDF 文档的每一页转换为独立的 JPEG 图片，适合分享文档页面、插入演示文稿或用于图像工作流程。转换在浏览器本地完成。",
    limitsTitle: "图片输出与页数限制", limits: "每页会以适合屏幕使用的分辨率渲染并导出为 JPG。为控制浏览器内存使用，目前支持最大 50 MB、最多 30 页。",
    privacyTitle: "PDF 文件会上传吗？", privacyText: "不会。PDF 在浏览器中读取和渲染，文档内容不会发送到 ConvertImageFreely 服务器进行转换。",
    faqTitle: "常见问题", faq: [["可以转换 PDF 的所有页面吗？", "可以，在最多 30 页的限制内转换所选 PDF 的全部页面。"], ["可以逐页下载吗？", "可以。每页都有单独的 JPG 下载链接，也可以打包为 ZIP 下载。"], ["为什么限制页数？", "PDF 页面渲染需要浏览器内存，页数限制有助于保持处理流畅。"], ["转换后还能选择文本吗？", "不能。JPG 是图像格式，文本和矢量内容会变成像素。"]],
    errors: { invalid: "请选择有效的 PDF 文件。", large: "PDF 文件超过 50 MB，请选择较小的文件。", many: "PDF 超过 30 页，请使用页数较少的文档。", read: "无法读取此 PDF，文件可能已损坏或受密码保护。", convert: "无法转换 PDF，请尝试其他文件。", worker: "无法加载 PDF worker。请确认 public/pdf.worker.min.mjs 存在并重启开发服务器。" }
  },
  es: {
    badge: "Herramienta PDF gratuita en el navegador", title: "Convertidor de PDF a JPG",
    description: "Convierte cada página de un PDF en imágenes JPG directamente en tu navegador. Previsualiza las páginas y descarga imágenes individuales o un ZIP.",
    drop: "Suelta tu archivo PDF aquí", or: "o", browse: "Elegir PDF", info: "Archivos PDF · Máx. 50 MB · Hasta 30 páginas", privacy: "Tu PDF permanece en tu dispositivo. No se sube a nuestros servidores.",
    selected: "PDF seleccionado", pages: "páginas", convert: "Convertir a JPG", converting: "Convirtiendo páginas...", complete: "Conversión completada", downloadAll: "Descargar todo en ZIP", download: "Descargar JPG", another: "Elegir otro PDF", remove: "Quitar PDF",
    stepsTitle: "Cómo convertir PDF a JPG", steps: [["1. Selecciona un PDF", "Elige un archivo PDF de tu dispositivo o arrástralo al área de carga."], ["2. Convierte las páginas", "La herramienta procesa cada página como una imagen JPG en tu navegador."], ["3. Descarga las imágenes", "Descarga cada página por separado o todas juntas en un ZIP."]],
    aboutTitle: "Convierte páginas PDF en imágenes JPG", about: "Este convertidor transforma cada página de un documento PDF en una imagen JPEG independiente. Es útil para compartir páginas como imágenes o añadirlas a presentaciones. La conversión se realiza localmente en tu navegador.",
    limitsTitle: "Salida de imagen y límites", limits: "Cada página se renderiza con una resolución adecuada para pantalla y se exporta como JPG. Para limitar la memoria del navegador, se admiten archivos de hasta 50 MB y 30 páginas.",
    privacyTitle: "¿Se suben mis archivos PDF?", privacyText: "No. Tu navegador lee y renderiza el PDF localmente. El contenido del documento no se envía a los servidores de ConvertImageFreely.",
    faqTitle: "Preguntas frecuentes", faq: [["¿Puedo convertir todas las páginas?", "Sí, dentro del límite actual de 30 páginas."], ["¿Puedo descargar una página individual?", "Sí. Cada página tiene su propio enlace JPG y también puedes descargar un ZIP."], ["¿Por qué existe un límite?", "El renderizado utiliza memoria del navegador. El límite ayuda a mantener un funcionamiento estable."], ["¿El texto seguirá siendo seleccionable?", "No. JPG es un formato de imagen y el texto se convierte en píxeles."]],
    errors: { invalid: "Selecciona un archivo PDF válido.", large: "El PDF supera los 50 MB. Selecciona un archivo más pequeño.", many: "El PDF tiene más de 30 páginas. Utiliza un documento más corto.", read: "No se puede leer el PDF. Puede estar dañado o protegido con contraseña.", convert: "No se pudo convertir el PDF. Inténtalo con otro archivo.", worker: "No se pudo cargar el worker PDF. Comprueba public/pdf.worker.min.mjs y reinicia el servidor." }
  },
  de: {
    badge: "Kostenloses browserbasiertes PDF-Tool", title: "PDF-zu-JPG-Konverter",
    description: "Wandle PDF-Seiten direkt im Browser in JPG-Bilder um. Sieh dir jede Seite an und lade einzelne Bilder oder eine ZIP-Datei herunter.",
    drop: "PDF-Datei hier ablegen", or: "oder", browse: "PDF auswählen", info: "PDF-Dateien · Max. 50 MB · Bis zu 30 Seiten", privacy: "Dein PDF bleibt auf deinem Gerät und wird nicht auf unsere Server hochgeladen.",
    selected: "Ausgewähltes PDF", pages: "Seiten", convert: "In JPG umwandeln", converting: "Seiten werden umgewandelt...", complete: "Umwandlung abgeschlossen", downloadAll: "Alle als ZIP herunterladen", download: "JPG herunterladen", another: "Anderes PDF auswählen", remove: "PDF entfernen",
    stepsTitle: "So wandelst du PDF in JPG um", steps: [["1. PDF auswählen", "Wähle eine PDF-Datei auf deinem Gerät aus oder ziehe sie in den Upload-Bereich."], ["2. Seiten umwandeln", "Das Tool rendert jede PDF-Seite direkt im Browser als JPG-Bild."], ["3. Bilder herunterladen", "Lade einzelne Seiten oder alle Bilder zusammen als ZIP-Datei herunter."]],
    aboutTitle: "PDF-Seiten in JPG-Bilder umwandeln", about: "Dieser Konverter erstellt aus jeder Seite eines PDF-Dokuments ein eigenes JPEG-Bild. Das ist hilfreich, wenn du eine Seite als Bild teilen oder in eine Präsentation einfügen möchtest. Die Umwandlung erfolgt lokal im Browser.",
    limitsTitle: "Bildausgabe und Seitenlimits", limits: "Jede Seite wird mit einer bildschirmgerechten Auflösung gerendert und als JPG exportiert. Unterstützt werden Dateien bis 50 MB und Dokumente mit bis zu 30 Seiten.",
    privacyTitle: "Werden meine PDF-Dateien hochgeladen?", privacyText: "Nein. Dein Browser liest und rendert das PDF lokal. Der Dokumentinhalt wird nicht zur Umwandlung an ConvertImageFreely gesendet.",
    faqTitle: "Häufig gestellte Fragen", faq: [["Kann ich alle PDF-Seiten umwandeln?", "Ja, innerhalb des aktuellen Limits von 30 Seiten."], ["Kann ich einzelne Seiten herunterladen?", "Ja. Jede Seite hat einen eigenen JPG-Download. Du kannst auch alle Seiten als ZIP herunterladen."], ["Warum gibt es ein Seitenlimit?", "Das Rendern benötigt Browserspeicher. Das Limit unterstützt eine stabile Verarbeitung."], ["Bleibt der Text auswählbar?", "Nein. JPG ist ein Bildformat. Text und Vektorelemente werden zu Pixeln."]],
    errors: { invalid: "Bitte wähle eine gültige PDF-Datei aus.", large: "Das PDF ist größer als 50 MB. Bitte wähle eine kleinere Datei.", many: "Das PDF hat mehr als 30 Seiten. Bitte verwende ein kürzeres Dokument.", read: "Das PDF kann nicht gelesen werden. Es ist möglicherweise beschädigt oder passwortgeschützt.", convert: "Das PDF konnte nicht umgewandelt werden. Bitte versuche eine andere Datei.", worker: "Der PDF-Worker konnte nicht geladen werden. Prüfe public/pdf.worker.min.mjs und starte den Server neu." }
  },
  fr: {
    badge: "Outil PDF gratuit dans le navigateur", title: "Convertisseur PDF en JPG",
    description: "Convertissez chaque page d’un PDF en image JPG directement dans votre navigateur. Prévisualisez les pages et téléchargez des images individuelles ou un ZIP.",
    drop: "Déposez votre fichier PDF ici", or: "ou", browse: "Choisir un PDF", info: "Fichiers PDF · Max. 50 Mo · Jusqu’à 30 pages", privacy: "Votre PDF reste sur votre appareil et n’est pas envoyé à nos serveurs.",
    selected: "PDF sélectionné", pages: "pages", convert: "Convertir en JPG", converting: "Conversion des pages...", complete: "Conversion terminée", downloadAll: "Tout télécharger en ZIP", download: "Télécharger le JPG", another: "Choisir un autre PDF", remove: "Supprimer le PDF",
    stepsTitle: "Comment convertir un PDF en JPG", steps: [["1. Sélectionner un PDF", "Choisissez un fichier PDF sur votre appareil ou faites-le glisser dans la zone de dépôt."], ["2. Convertir les pages", "L’outil affiche chaque page du PDF sous forme d’image JPG dans votre navigateur."], ["3. Télécharger les images", "Téléchargez les pages individuellement ou réunies dans un fichier ZIP."]],
    aboutTitle: "Convertir les pages PDF en images JPG", about: "Ce convertisseur transforme chaque page d’un document PDF en une image JPEG distincte. Il est utile pour partager une page sous forme d’image ou l’ajouter à une présentation. La conversion est effectuée localement dans votre navigateur.",
    limitsTitle: "Sortie image et limites de pages", limits: "Chaque page est rendue dans une résolution adaptée à l’écran puis exportée en JPG. Les fichiers sont limités à 50 Mo et 30 pages pour limiter l’utilisation de la mémoire.",
    privacyTitle: "Mes fichiers PDF sont-ils envoyés sur un serveur ?", privacyText: "Non. Votre navigateur lit et affiche le PDF localement. Le contenu du document n’est pas envoyé aux serveurs de ConvertImageFreely pour la conversion.",
    faqTitle: "Questions fréquentes", faq: [["Puis-je convertir toutes les pages d’un PDF ?", "Oui, dans la limite actuelle de 30 pages."], ["Puis-je télécharger une seule page ?", "Oui. Chaque page dispose de son propre téléchargement JPG. Vous pouvez aussi tout télécharger dans un ZIP."], ["Pourquoi limiter le nombre de pages ?", "Le rendu utilise la mémoire du navigateur. Cette limite aide à maintenir un traitement stable."], ["Le texte restera-t-il sélectionnable ?", "Non. JPG est un format image : le texte et les éléments vectoriels deviennent des pixels."]],
    errors: { invalid: "Veuillez choisir un fichier PDF valide.", large: "Ce PDF dépasse 50 Mo. Veuillez choisir un fichier plus petit.", many: "Ce PDF dépasse 30 pages. Veuillez utiliser un document plus court.", read: "Impossible de lire ce PDF. Il est peut-être endommagé ou protégé par mot de passe.", convert: "La conversion du PDF a échoué. Veuillez essayer un autre fichier.", worker: "Impossible de charger le worker PDF. Vérifiez public/pdf.worker.min.mjs puis redémarrez le serveur." }
  }
} as const;

type Locale = keyof typeof translations;
function getLocale(pathname: string): Locale {
  const segment = pathname.split("/")[1] as Locale;
  return segment in translations ? segment : "en";
}
function sizeLabel(size: number) {
  return size < 1024 * 1024 ? `${(size / 1024).toFixed(1)} KB` : `${(size / 1024 / 1024).toFixed(2)} MB`;
}
function toJpeg(canvas: HTMLCanvasElement) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error("JPG export failed")), "image/jpeg", 0.92);
  });
}

export default function PdfToJpgConverter() {
  const pathname = usePathname();
  const t = translations[getLocale(pathname)];
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [outputs, setOutputs] = useState<PageOutput[]>([]);
  const [zipBlob, setZipBlob] = useState<Blob | null>(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [converting, setConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => () => outputs.forEach(item => URL.revokeObjectURL(item.url)), [outputs]);

  function clearOutputs() {
    outputs.forEach(item => URL.revokeObjectURL(item.url));
    setOutputs([]);
    setZipBlob(null);
    setProgress(0);
  }

  async function chooseFile(next: File) {
    setError("");
    clearOutputs();
    if (next.type !== "application/pdf" && !next.name.toLowerCase().endsWith(".pdf")) {
      setError(t.errors.invalid); return;
    }
    if (next.size > MAX_FILE_SIZE) {
      setError(t.errors.large); return;
    }
    setLoading(true);
    try {
      const data = new Uint8Array(await next.arrayBuffer());
      const pdf = await pdfjsLib.getDocument({ data }).promise;
      const count = pdf.numPages;

      if (count > MAX_PAGES) {
        setError(t.errors.many); setFile(null); setPageCount(0); return;
      }
      setFile(next);
      setPageCount(count);
    } catch (e) {
      console.error(e);
      const msg = e instanceof Error ? e.message.toLowerCase() : "";
      setError(msg.includes("worker") ? t.errors.worker : t.errors.read);
      setFile(null); setPageCount(0);
    } finally {
      setLoading(false);
    }
  }

  function onFileChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    if (selected) void chooseFile(selected);
    e.target.value = "";
  }

  async function convert() {
    if (!file || converting) return;
    setError(""); clearOutputs(); setConverting(true);
    const made: PageOutput[] = [];
    const zip = new JSZip();
    try {
      const data = new Uint8Array(await file.arrayBuffer());
      const pdf = await pdfjsLib.getDocument({ data }).promise;
      const base = file.name.replace(/\.pdf$/i, "") || "converted";
      for (let n = 1; n <= pdf.numPages; n++) {
        setProgress(n);
        const page = await pdf.getPage(n);
        const original = page.getViewport({ scale: 1 });
        const pixelScale = Math.sqrt(MAX_PIXELS / (original.width * original.height));
        const dimensionScale = Math.min(MAX_DIMENSION / original.width, MAX_DIMENSION / original.height);
        const scale = Math.max(0.1, Math.min(2, pixelScale, dimensionScale));
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.ceil(viewport.width));
        canvas.height = Math.max(1, Math.ceil(viewport.height));
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) throw new Error("Canvas is unavailable");
        ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, canvas.width, canvas.height);
        await page.render({ canvas, canvasContext: ctx, viewport }).promise;
        const blob = await toJpeg(canvas);
        canvas.width = 0; canvas.height = 0;
        const filename = `${base}-page-${String(n).padStart(2, "0")}.jpg`;
        zip.file(filename, blob);
        made.push({ pageNumber: n, url: URL.createObjectURL(blob), blob });
        setOutputs([...made]);
      }
      setZipBlob(await zip.generateAsync({ type: "blob" }));
      
    } catch (e) {
      console.error(e);
      made.forEach(item => URL.revokeObjectURL(item.url));
      setOutputs([]);
      const msg = e instanceof Error ? e.message.toLowerCase() : "";
      setError(msg.includes("worker") ? t.errors.worker : t.errors.convert);
    } finally {
      setConverting(false);
    }
  }

  function downloadAll() {
    if (!zipBlob || !file) return;
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement("a");
    a.href = url; a.download = `${file.name.replace(/\.pdf$/i, "") || "converted"}-jpg.zip`;
    document.body.appendChild(a); a.click(); a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1200);
  }

  function reset() {
    clearOutputs(); setFile(null); setPageCount(0); setError("");
    if (inputRef.current) inputRef.current.value = "";
  }

  return <div>
    {!file ? <label
      onDragOver={e => { e.preventDefault(); setDragging(true); }}
      onDragLeave={e => { e.preventDefault(); setDragging(false); }}
      onDrop={e => { e.preventDefault(); setDragging(false); const f = e.dataTransfer.files?.[0]; if (f) void chooseFile(f); }}
      className={`group block cursor-pointer rounded-2xl border-2 border-dashed p-8 text-center transition duration-200 sm:p-14 ${dragging ? "border-blue-500 bg-blue-50" : "border-blue-200 bg-blue-50/40 hover:border-blue-400 hover:bg-blue-50/70"}`}
    >
      <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${dragging ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 0L7 9m5-5 5 5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
        </svg>
      </div>
      <div className="mt-6 text-xl font-semibold text-gray-900">{t.drop}</div>
      <div className="mt-2 text-sm text-gray-500">{t.or}</div>
      <div className="mt-6 inline-flex rounded-lg bg-blue-600 px-7 py-3 font-medium text-white shadow-sm transition group-hover:bg-blue-700">{loading ? t.converting : t.browse}</div>
      <div className="mt-6 text-sm text-gray-400">{t.info}</div>
      <div className="mt-3 text-xs text-gray-400">{t.privacy}</div>
      <input ref={inputRef} type="file" accept="application/pdf,.pdf" className="hidden" onChange={onFileChange} disabled={loading} />
    </label> : <div className="rounded-2xl border border-blue-100 bg-white p-5 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-500">{t.selected}</p>
          <p className="mt-1 break-all font-semibold text-gray-900">{file.name}</p>
          <p className="mt-1 text-sm text-gray-500">{sizeLabel(file.size)} · {pageCount} {t.pages}</p>
        </div>
        <button type="button" onClick={reset} disabled={converting} className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 disabled:opacity-50">{t.remove}</button>
      </div>
      {!outputs.length && <button type="button" onClick={convert} disabled={converting} className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:from-blue-700 hover:to-purple-700 disabled:cursor-not-allowed disabled:opacity-50">{converting ? `${t.converting} ${progress}/${pageCount}` : t.convert}</button>}
      {converting && <div className="mt-5">
        <div className="mb-2 flex justify-between text-sm text-gray-500"><span>{t.converting}</span><span>{progress} / {pageCount}</span></div>
        <div className="h-2 overflow-hidden rounded-full bg-gray-100"><div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${pageCount ? progress / pageCount * 100 : 0}%` }} /></div>
      </div>}
      {outputs.length > 0 && <div className="mt-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-semibold text-gray-900">{converting ? `${t.converting} ${outputs.length}/${pageCount}` : t.complete}</h3>
          {zipBlob && !converting && <button type="button" onClick={downloadAll} className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">{t.downloadAll}</button>}
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outputs.map(item => <div key={item.pageNumber} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="flex h-52 items-center justify-center bg-gray-50 p-3"><img src={item.url} alt={`PDF page ${item.pageNumber} converted to JPG`} className="max-h-full max-w-full object-contain shadow-sm" /></div>
            <div className="p-3">
              <div className="flex items-center justify-between gap-2"><span className="text-sm font-medium text-gray-800">Page {item.pageNumber}</span><span className="text-xs text-gray-400">{sizeLabel(item.blob.size)}</span></div>
              <a href={item.url} download={`${file.name.replace(/\.pdf$/i, "") || "converted"}-page-${String(item.pageNumber).padStart(2, "0")}.jpg`} className="mt-3 block rounded-lg border border-blue-200 px-3 py-2 text-center text-sm font-medium text-blue-700 transition hover:bg-blue-50">{t.download}</a>
            </div>
          </div>)}
        </div>
      </div>}
      {!converting && outputs.length > 0 && <button type="button" onClick={reset} className="mt-5 w-full rounded-xl border border-gray-200 bg-white px-6 py-3 text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">{t.another}</button>}
    </div>}
    {error && <div role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">{error}</div>}
    <div className="mt-4 text-center text-xs text-gray-400">{t.privacy}</div>
  </div>;
}
