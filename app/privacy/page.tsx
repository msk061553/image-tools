export const metadata = {
  title: "Privacy Policy - ConvertImageFreely",
  description:
    "Privacy Policy for ConvertImageFreely, including information about image processing, cookies, advertising, and third-party services.",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
          <p className="mt-4 text-sm text-gray-500">Last updated: August 19, 2026</p>
          <div className="mt-12 space-y-10">
            <section><h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              <p className="mt-4 leading-7 text-gray-600">
                Welcome to ConvertImageFreely. We respect your privacy and aim to be transparent about
                how information may be handled when you use our website. This Privacy Policy explains
                the types of information that may be collected, how it may be used, and the choices available to you.
              </p>
            </section>
            <section><h2 className="text-2xl font-bold text-gray-900">Image Processing</h2>
              <p className="mt-4 leading-7 text-gray-600">
                ConvertImageFreely provides browser-based image conversion tools. Supported images selected
                for conversion are processed directly in your web browser whenever possible.
              </p>
              <p className="mt-4 leading-7 text-gray-600">
                Our conversion process does not require your original image file to be uploaded to our server.
                Files selected for local conversion remain on your device during the browser-based conversion process.
              </p>
            </section>
            <section><h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              <p className="mt-4 leading-7 text-gray-600">
                We do not intentionally collect the image files that you select for browser-based conversion.
                However, the website and third-party services used to operate the website may process limited
                technical or usage information, such as browser type, device information, approximate location,
                and website usage data.
              </p>
            </section>
            <section><h2 className="text-2xl font-bold text-gray-900">Cookies and Similar Technologies</h2>
              <p className="mt-4 leading-7 text-gray-600">
                ConvertImageFreely and third-party services may use cookies or similar technologies to operate
                the website, understand website usage, measure performance, and improve the user experience.
                Depending on the services enabled on the website, these technologies may also be used for advertising purposes.
              </p>
            </section>
            <section><h2 className="text-2xl font-bold text-gray-900">Advertising</h2>
              <p className="mt-4 leading-7 text-gray-600">
                We may use third-party advertising services, including Google AdSense, to display advertisements
                on the website. Advertising providers may use cookies or similar technologies to provide,
                personalize, measure, and report advertising in accordance with their applicable policies and settings.
              </p>
            </section>
            <section><h2 className="text-2xl font-bold text-gray-900">Third-Party Services</h2>
              <p className="mt-4 leading-7 text-gray-600">
                We may use third-party services for hosting, analytics, advertising, security, and other website
                operations. These services may process information according to their own privacy policies and terms.
              </p>
            </section>
            <section><h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
              <p className="mt-4 leading-7 text-gray-600">
                We take reasonable measures to protect information associated with the operation of this website.
                However, no internet transmission or electronic storage system can be guaranteed to be completely secure.
              </p>
            </section>
            <section><h2 className="text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
              <p className="mt-4 leading-7 text-gray-600">
                We may update this Privacy Policy from time to time to reflect changes to the website, services,
                or applicable requirements. Any changes will be reflected on this page by updating the date shown above.
              </p>
            </section>
            <section><h2 className="text-2xl font-bold text-gray-900">Contact</h2>
              <p className="mt-4 leading-7 text-gray-600">
                If you have questions about this Privacy Policy or ConvertImageFreely, please contact us using
                the contact information provided on our Contact page.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
