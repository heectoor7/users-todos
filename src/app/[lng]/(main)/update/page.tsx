import { Suspense } from "react";
import { UpdateSearchForm } from "./_components/updateSearchForm";
import { UserUpdateContainer } from "./_components/user-update-container";
import { UpdateFormSkeleton } from "./_components/skeleton-updateForm";

// 1. Tipamos la página. En Next.js 16, searchParams es una Promesa.
export default function UpdateUserPage({
  searchParams,
}: {
  searchParams: Promise<{ userId?: string }>;
}) {
  return (
    <main className="flex flex-col p-8 w-full justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Actualizar Usuario</h1>

      <div className="flex flex-col justify-center items-center w-full max-w-4xl gap-6">
        
        {/* 2. Envolvemos el buscador en Suspense porque dentro usa `nuqs` (URL) */}
        <Suspense fallback={<div className="h-10 w-full bg-muted animate-pulse rounded" />}>
          <UpdateSearchForm />
        </Suspense>

        {/* 3. Pasamos la promesa de searchParams directamente a un componente hijo asíncrono */}
        <Suspense fallback={<UpdateFormSkeleton />}>
          <DynamicUserContainer searchParamsPromise={searchParams} />
        </Suspense>
        
      </div>
    </main>
  );
}

// 4. Componente auxiliar interno para desenvolver los searchParams sin bloquear la página
async function DynamicUserContainer({
  searchParamsPromise,
}: {
  searchParamsPromise: Promise<{ userId?: string }>;
}) {
  const { userId: query } = await searchParamsPromise;
  
  return <UserUpdateContainer query={query} />;
}