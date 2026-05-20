import { getSession } from "@/app/(auth)/auth.actions";

import BreadCrumb from "./breadcrumb";

export default async function Navbar() {
  const session = await getSession();
  const { isLoggedIn } = session;

  return (
    <nav className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">
          Gestión de Usuarios, ToDo, Productos
        </h1>
        {/* <div>{isLoggedIn ? <BreadCrumbLogged /> : <BreadCrumbNoLogged />}</div> */}
        <div>
          <BreadCrumb userIsLoggedIn={isLoggedIn} />
        </div>
      </div>
    </nav>
  );
}
