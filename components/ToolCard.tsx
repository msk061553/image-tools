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
      className="group block rounded-xl border bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {description}
          </p>
        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition group-hover:bg-gray-900 group-hover:text-white">
          →
        </div>

      </div>

      <div className="mt-6 text-sm font-medium text-gray-900">
        Use tool →
      </div>
    </Link>
  );
}