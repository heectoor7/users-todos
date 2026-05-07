import { UsersT } from "../_core/users.definitions";
import { UsersItem } from "./users-item";

export function UsersList({ users }: { users: UsersT[] }) {
  return (
    <ul>
      {users.length === 0 ? (
        <li className="p-4 text-gray-500 italic">
          No se encontraron usuarios.
        </li>
      ) : (
        <div className="flex gap-6 w-full justify-center">
          <div className="gap-6 md:grid md:grid-cols-3">
            {users.map((user) => (
              <UsersItem key={user.id} user={user} />
            ))}
          </div>
        </div>
      )}
    </ul>
  );
}
