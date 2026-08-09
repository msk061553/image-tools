import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Learn more about Image Tools, a free browser-based image conversion tool.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            About Image Tools
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Image Tools is a collection of simple, free image conversion
            tools that work directly in your web browser.
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                What is Image Tools?
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Image Tools provides easy-to-use tools for converting
                images between popular formats such as JPG, PNG, and WebP.
                The goal is to make common image tasks simple without
                requiring users to install desktop software.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                Browser-based processing
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Our image conversion tools process files directly in your
                browser whenever possible. This means your original image
                does not need to be uploaded to our server for conversion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                Why we built Image Tools
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Many image conversion websites are filled with unnecessary
                steps, software downloads, or complicated interfaces.
                Image Tools was created to provide a simple alternative:
                choose an image, convert it, and download the result.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                Available tools
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We currently provide several conversion tools for JPG,
                PNG, and WebP images.
              </p>

              <div className="mt-6">
                <Link
                  href="/"
                  className="inline-block rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
                >
                  View Image Tools
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}