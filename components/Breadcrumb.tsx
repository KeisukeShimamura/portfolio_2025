import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="mb-8 font-objective">
      <ol className="flex flex-wrap items-center text-sm md:text-base gap-2 md:gap-6">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index === items.length - 1 ? (
              <span className="text-gray-900">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-gray-600 border-b border-transparent hover:text-gray-900 hover:border-gray-900"
              >
                {item.label}
              </Link>
            )}
            {index < items.length - 1 && (
              <ChevronRightIcon className="w-4 h-4 ml-2 md:ml-6 mb-1" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
