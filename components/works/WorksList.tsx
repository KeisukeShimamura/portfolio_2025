import Image from "next/image";
import Link from "next/link";
import { getWorks } from "@/libs/microcms";

export default async function WorksList() {
  const works = await getWorks();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24 mt-8">
      {works.map((work) => (
        <article key={work.id}>
          <Link href={`/works/${work.id}`} className="group block">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              {work.images[0] && (
                <Image
                  src={work.images[0].image.url}
                  alt={work.name}
                  fill
                  className="object-contain group-hover:scale-[98%] transition-all duration-500"
                />
              )}
            </div>
          </Link>
          <p className="inline-flex items-center text-[10px] font-medium my-4 border-b border-green-500">
            {work.expertise.name}
          </p>
          <h3 className="font-medium">
            <Link
              href={`/works/${work.id}`}
              className="border-b border-transparent hover:border-inherit transition-all duration-300"
            >
              <span className="font-objective">{work.name}</span>
            </Link>
          </h3>
          <p className="mt-2 text-xs">{work.sub_name}</p>
        </article>
      ))}
    </div>
  );
}
