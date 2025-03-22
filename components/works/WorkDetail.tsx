import { Work } from "@/types";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import Content from "../Content";

type Props = {
  work: Work;
};

export default function WorkDetail({ work }: Props) {
  const mainImage = work.images.length > 0 ? work.images[0].image.url : null;
  const subImages = work.images.slice(1).map((image) => image.image.url);

  return (
    <article className="max-w-4xl mx-auto">
      {mainImage && (
        <div className="mb-8">
          <div className="relative aspect-video">
            <Image src={mainImage} alt={`${work.name}`} fill />
          </div>
        </div>
      )}
      <p className="inline-flex items-center text-[12px] font-medium my-4 border-b border-green-500">
        {work.expertise.name}
      </p>
      <h1 className="text-2xl font-objective font-bold mb-2">{work.name}</h1>
      <p className="text-sm mb-8">{work.sub_name}</p>
      {work.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="font-bold text-lg mb-2">使用技術</h2>
          <div className="flex flex-wrap gap-2">
            {work.skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center gap-2 px-3 py-1 bg-white border border-green-500 rounded-full"
              >
                {skill.iconid && (
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.iconid}`}
                    alt=""
                    width={20}
                    height={20}
                  />
                )}
                {skill.svg && (
                  <Image src={skill.svg.url} alt="" width={20} height={20} />
                )}
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {work.body_html && <Content content={work.body_html} />}
      {subImages.length > 0 && (
        <div className="mb-8">
          <div className="flex flex-wrap ">
            {subImages.map((image) => (
              <Image
                key={image}
                src={image}
                alt=""
                className="w-1/2 p-2"
                width={500}
                height={500}
              />
            ))}
          </div>
        </div>
      )}
      <Link
        href="/works"
        className="mt-8 px-6 py-3 flex gap-2 items-center text-sm"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        一覧に戻る
      </Link>
    </article>
  );
}
