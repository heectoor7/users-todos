import { getSession } from "@/app/(auth)/auth.actions";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { UpdateSearchForm } from "./_components/updateSearchForm";
import { UserUpdateContainer } from "./_components/user-update-container";
import { Loading } from "@/components/loading";
import { UpdateFormSkeleton } from "./_components/skeleton-updateForm";

export default async function UpdateUserPage({
  searchParams,
}: {
  searchParams: Promise<{ userId?: string }>;
}) {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  const { userId: query } = await searchParams;

  return (
    <main className="flex flex-col p-8 w-full justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Actualizar Usuario</h1>

      <div className="flex flex-col justify-center items-center w-full max-w-4xl gap-6">
        <UpdateSearchForm />

        <Suspense key={query} fallback={<UpdateFormSkeleton />}>
          <UserUpdateContainer query={query} />
        </Suspense>
      </div>
    </main>
  );
}
