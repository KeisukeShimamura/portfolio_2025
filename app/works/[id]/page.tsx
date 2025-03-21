import { notFound } from "next/navigation";
import WorkDetail from "@/components/works/WorkDetail";
import { getWork } from "@/libs/microcms";
import Breadcrumb from "@/components/Breadcrumb";
export default async function WorkPage({ params }: { params: { id: string } }) {
  const work = await getWork(params.id);

  if (!work) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "WORKS", href: "/works" },
    { label: work.name, href: `/works/${params.id}` },
  ];

  return (
    <main className="container mx-auto mt-24 px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      <WorkDetail work={work} />
    </main>
  );
}
