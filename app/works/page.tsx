import WorksList from "@/components/works/WorksList";
import Breadcrumb from "@/components/Breadcrumb";
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
