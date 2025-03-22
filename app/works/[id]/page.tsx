import { notFound } from "next/navigation";
import WorkDetail from "@/components/works/WorkDetail";
import { getWork, getWorks } from "@/libs/microcms";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import { Work } from "@/types";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function WorkPage({ params }: Props) {
  const { id } = await params;
  const work = await getWork(id);

  if (!work) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "WORKS", href: "/works" },
    { label: work.name, href: `/works/${id}` },
  ];

  return (
    <main className="container mx-auto mt-24 px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      <WorkDetail work={work} />
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const work = await getWork(id);

  if (!work) {
    notFound();
  }

  return {
    title: `${work.name} - ${work.sub_name} | ポートフォリオ`,
    description: work.body,
    openGraph: {
      title: `${work.name} - ${work.sub_name} | ポートフォリオ`,
      description: work.body,
      images: work.images.length > 0 ? [{ url: work.images[0].image.url }] : [],
    },
  };
}

export async function generateStaticParams() {
  const works = await getWorks();

  return works.map((work: Work) => ({
    id: work.id,
  }));
}
