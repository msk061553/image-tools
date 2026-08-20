import Link from "next/link";

type GuideCardProps = {
  slug: string;
  title: string;
  description: string;
};

export default function GuideCard({
  slug,
  title,
  description,
}: GuideCardProps) {
  return (
    <Link
      href={`/guides/${slug}`}
      className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
        {title}
      </h2>

      <p className="mt-3 leading-7 text-gray-600">
        {description}
      </p>

      <div className="mt-5 text-sm font-medium text-blue-600">
        Read guide →
      </div>
    </Link>
  );
}