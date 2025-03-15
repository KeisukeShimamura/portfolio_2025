import { notFound } from "next/navigation";
import WorkDetail from "@/components/works/WorkDetail";
import { getWork } from "@/libs/microcms";

export default async function WorkPage({ params }: { params: { id: string } }) {
  const work = await getWork(params.id);

  if (!work) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <WorkDetail work={work} />
    </main>
  );
}
