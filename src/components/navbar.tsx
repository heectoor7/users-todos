import { headers } from "next/headers";


import BreadCrumb from "./breadcrumb";

export default async function Navbar() {
  const h = await headers();
  const isLoggedIn = h.get("x-is-logged-in") === "true";

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
