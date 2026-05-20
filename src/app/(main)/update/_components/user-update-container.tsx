import { searchUserAction } from "../userUpdate.actions";
import { UpdateForm } from "./updateForm";

export async function UserUpdateContainer({ query }: { query?: string }) {
  if (!query) return <p className="text-gray-500">Introduce un usuario</p>;

  let userData = null;
  let errorMessage = null;

  try {
    userData = await searchUserAction(query);
    
    if (!userData?.success || !userData.data) {
      errorMessage = "Usuario no encontrado";
    }
  } catch (error) {
    errorMessage = "Ocurrió un error al buscar el usuario";
  }

  if (errorMessage) {
    return <p className="text-red-600">{errorMessage}</p>;
  }

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <p className="text-gray-500">
        Usuario: <b>{userData?.data?.nombre}</b> - ID: <b>{userData?.data?.id}</b>
      </p>
      <UpdateForm {...userData?.data} />
    </div>
  );
}