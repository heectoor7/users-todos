import { getUsersUseCase } from "./_core/users.use-cases";
import { getSession } from "@/app/(auth)/auth.actions";
import { redirect } from "next/navigation";
import { UsersList } from "./_components/users-list";
import { CreateUserFormDialog } from "./_components/form/user-form-create-dialog";

export default async function UsersPage() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  const users = await getUsersUseCase();

  console.log("📦 Usuarios enviados al cliente:", users);

  return (
    <main className="flex flex-col p-8 w-full justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Gestor de Usuarios</h1>

      <p className="pb-4 text-gray-700">Número de usuarios: {users.length}</p>

      <CreateUserFormDialog />
      <UsersList users={users} />
    </main>
  );
}
