import Link from "next/link";
import Image from "next/image";
import { getWorks } from "@/libs/microcms";

export default async function Works() {
  const works = await getWorks({ limit: 3 });

  return (
    <section className="py-20 px-4 bg-white" id="works">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <Link
              key={work.id}
              href={`/works/${work.id}`}
              className="group block"
            >
              <div className="aspect-video relative overflow-hidden ">
                {work.images[0] && (
                  <Image
                    src={work.images[0].image.url}
                    alt={work.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                )}
              </div>
              <h3 className="mt-4 text-lg font-bold group-hover:text-gray-600">
                {work.name}
              </h3>
              <p className="inline-flex items-center gap-2 px-2 py-1 text-xs bg-gray-100 rounded">
                {work.expertise.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/works"
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            View All Works
          </Link>
        </div>
      </div>
    </section>
  );
}
