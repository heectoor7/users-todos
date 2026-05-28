import { getUsersUseCase } from "./_core/users.use-cases";
import { UsersList } from "./_components/users-list";
import { CreateUserFormDialog } from "./_components/form/user-form-create-dialog";
import { Suspense } from "react";

export default async function UsersPage() {
  const users = await getUsersUseCase();

  console.log("📦 Usuarios enviados al cliente:", users);

  return (
    <main className="flex flex-col p-8 w-full justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Gestor de Usuarios</h1>

      <p className="pb-4 text-gray-700">Número de usuarios: {users.length}</p>

      <CreateUserFormDialog />
      <Suspense fallback={<p>Cargando...</p>}>
        <UsersList users={users} />
      </Suspense>
    </main>
  );
}
