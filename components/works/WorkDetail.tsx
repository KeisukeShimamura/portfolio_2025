import { Work } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  work: Work;
};

export default function WorkDetail({ work }: Props) {
  return (
    <article className="max-w-4xl mx-auto">
      <Link
        href="/works"
        className="inline-block mb-8 text-sm hover:text-gray-600 dark:hover:text-gray-300"
      >
        ← 一覧に戻る
      </Link>
      <h1 className="text-4xl font-bold mb-4">{work.name}</h1>
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-2">専門分野</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {work.expertise.name}
        </p>
      </div>
      {work.images.length > 0 && (
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {work.images.map((image, index) => (
              <div key={index} className="relative aspect-video">
                <Image
                  src={image.image.url}
                  alt={`${work.name}の画像${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {work.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-2">使用技術</h2>
          <div className="flex flex-wrap gap-2">
            {work.skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
              >
                {skill.iconid && (
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.iconid}`}
                    alt=""
                    width={16}
                    height={16}
                  />
                )}
                {skill.svg && (
                  <Image src={skill.svg.url} alt="" width={16} height={16} />
                )}
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {work.body_html ? (
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: work.body_html }}
        />
      ) : work.body ? (
        <div className="prose dark:prose-invert max-w-none">
          <p>{work.body}</p>
        </div>
      ) : null}
    </article>
  );
}
