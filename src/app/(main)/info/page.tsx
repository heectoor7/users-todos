import SearchForm from "./_components/searchForm";

export default async function InfoUsersPage() {
  return (
    <main className="flex flex-col p-8 w-full justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Buscar Usuario</h1>

      <SearchForm />
    </main>
  );
}
