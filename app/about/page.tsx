import Link from "next/link";

export const metadata = {
  title: "About ConvertImageFreely",
  description:
    "Learn more about ConvertImageFreely, a free browser-based image conversion service for JPG, PNG, and WebP images.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            About ConvertImageFreely
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ConvertImageFreely provides simple, free image conversion tools
            that work directly in your web browser.
          </p>
          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">What is ConvertImageFreely?</h2>
              <p className="mt-4 leading-7 text-gray-600">
                ConvertImageFreely is an online image conversion service for common image formats
                such as JPG, PNG, and WebP. Our goal is to make everyday image conversion
                straightforward without requiring users to install desktop software or create an account.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">Browser-based processing</h2>
              <p className="mt-4 leading-7 text-gray-600">
                Our image conversion tools process files directly in your browser whenever possible.
                This allows you to convert supported images on your own device without needing to
                upload the original image file to our server for conversion.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">Why we built ConvertImageFreely</h2>
              <p className="mt-4 leading-7 text-gray-600">
                Image conversion should not require complicated software or unnecessary steps.
                ConvertImageFreely was created to provide a straightforward alternative: choose an
                image, select the conversion you need, and download the result.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">Available tools</h2>
              <p className="mt-4 leading-7 text-gray-600">
                ConvertImageFreely provides online conversion tools for JPG, PNG, and WebP images,
                including conversions between commonly used image formats.
              </p>
              <div className="mt-6">
                <Link href="/" className="inline-block rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800">
                  View ConvertImageFreely
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
