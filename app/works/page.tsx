import WorksList from "@/components/works/WorksList";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export default async function WorksPage() {
  const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "WORKS", href: "/works" },
  ];
  return (
    <main className="container mx-auto mt-24 px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      <WorksList />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "WORKS | ポートフォリオ",
    description:
      "WEBエンジニアしまむらけいすけの実績をご紹介します。Webサイト開発やデータスクレイピングなど多岐に渡る実績があります。",
    openGraph: {
      title: "WORKS | ポートフォリオ",
      description:
        "WEBエンジニアしまむらけいすけの実績をご紹介します。Webサイト開発やデータスクレイピングなど多岐に渡る実績があります。",
    },
  };
}
