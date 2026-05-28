import UserData from "./_components/userData";
import { Suspense } from "react";

export default async function UserPage() {
  return (
    <main className="flex flex-col p-8 w-full justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Información del Usuario</h1>
      <div>
        <Suspense fallback={<p>Cargando...</p>}>
          <UserData />
        </Suspense>
      </div>
    </main>
  );
}
