export const metadata = {
  title: "Contact",
  description:
    "Contact Image Tools for questions, feedback, or support.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Contact
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have a question, suggestion, or problem with Image Tools?
            We would be happy to hear from you.
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                Questions and Feedback
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                If you have feedback about our image conversion tools,
                encounter a problem, or have a suggestion for a new tool,
                please contact us using the email address below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                Email
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Email:{" "}
                <a
                  href="mailto:contact@imagetools.example"
                  className="font-medium text-gray-900 underline"
                >
                  contact@imagetools.example
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                Image Conversion Issues
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                When contacting us about a conversion problem, please
                include the image format you were trying to convert,
                the target format, and a short description of the issue.
                Please do not send private or sensitive images unless
                necessary.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}