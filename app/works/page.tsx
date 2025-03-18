import WorksList from "@/components/works/WorksList";

export default async function WorksPage() {
  return (
    <main className="container mx-auto mt-24 px-4 py-8">
      <h1 className="text-3xl font-objective font-bold mb-8">Works</h1>
      <WorksList />
    </main>
  );
}
