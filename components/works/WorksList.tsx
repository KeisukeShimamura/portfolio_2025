import Image from "next/image";
import Link from "next/link";
import { getWorks } from "@/libs/microcms";

export default async function WorksList() {
  const works = await getWorks();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {works.map((work) => (
        <Link key={work.id} href={`/works/${work.id}`} className="group block">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            {work.images[0] && (
              <Image
                src={work.images[0].image.url}
                alt={work.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            )}
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300">
              {work.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {work.expertise.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
