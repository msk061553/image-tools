import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ToolCard({
  title,
  description,
  href,
}: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-blue-600">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {description}
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition duration-200 group-hover:bg-blue-600 group-hover:text-white">
          →
        </div>
      </div>

      <div className="mt-6 text-sm font-semibold text-blue-600 transition group-hover:text-purple-600">
        Use tool →
      </div>
    </Link>
  );
}