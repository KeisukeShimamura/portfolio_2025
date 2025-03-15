import { getExpertises } from "@/libs/microcms";
import Image from "next/image";
import Content from "./Content";
export default async function About() {
  const expertises = await getExpertises();

  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About</h2>
        <div className="w-full lg:w-1/2 mx-auto mb-24">
          <p>
            私はフルスタックエンジニアとして、主にWebアプリケーションの開発に携わっています。フロントエンドからバックエンドまで、幅広い技術スタックの経験を持っており、最適なソリューションを提供することを心がけています。
          </p>
        </div>
        <div className="flex flex-col gap-32">
          {expertises.map((expertise, index) => (
            <div
              key={expertise.id}
              className={`flex flex-col w-full lg:w-3/5 ${
                index % 2 === 1 ? "lg:ml-auto" : ""
              }`}
            >
              <h3 className="text-3xl mb-4 font-bold flex flex-col gap-2">
                {expertise.english_name}
                <span className="text-sm">{expertise.name}</span>
              </h3>
              <Content content={expertise.note || ""} />
              <div className="flex flex-wrap gap-2">
                {expertise.skills.map((skill) => (
                  <div className="flex items-center gap-3" key={skill.id}>
                    {skill.iconid ? (
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.iconid}`}
                        alt={skill.name}
                        width={32}
                        height={32}
                      />
                    ) : skill.svg ? (
                      <Image
                        src={skill.svg.url}
                        alt={skill.name}
                        width={32}
                        height={32}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
