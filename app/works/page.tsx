import { Suspense } from "react";
import WorksList from "@/components/works/WorksList";
import ExpertiseFilter from "@/components/works/ExpertiseFilter";
import Loading from "@/app/loading";
import { getExpertises } from "@/libs/microcms";

export default async function WorksPage() {
  const expertises = await getExpertises();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">成果物一覧</h1>
      <ExpertiseFilter expertises={expertises} />
      <Suspense fallback={<Loading />}>
        <WorksList />
      </Suspense>
    </main>
  );
}
