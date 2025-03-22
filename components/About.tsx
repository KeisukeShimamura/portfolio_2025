import { getExpertises } from "@/libs/microcms";
import { ExpertiseList } from "./ExpertiseList";

export default async function About() {
  const expertises = await getExpertises();

  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <h2 className="text-4xl font-objective font-bold text-center mb-8">
          About
        </h2>
        <div className="w-full text-sm lg:w-1/2 mx-auto mb-24">
          <p>
            私はフルスタックエンジニアとして、主にWebアプリケーションの開発に携わっています。フロントエンドからバックエンドまで、幅広い技術スタックの経験を持っており、最適なソリューションを提供することを心がけています。
          </p>
        </div>
        <ExpertiseList expertises={expertises} />
      </div>
    </section>
  );
}
