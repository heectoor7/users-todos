import { getSession } from "@/app/(auth)/auth.actions";
import { redirect } from "next/navigation";
import UserData from "./_components/userData";

export default async function UserPage() {
   const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  return (
    <main className="flex flex-col p-8 w-full justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">
        Información del Usuario</h1>
      <div>
        <UserData />
      </div>
    </main>
  );
}
