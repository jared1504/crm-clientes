import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation(); //obtener la uri del la pagina
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - React
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              location.pathname == "/" ? "text-blue-900 bg-white" : "text-white"
            } text-2xl font-bold text-center py-1 block mt-2 hover:text-blue-900 hover:bg-white rounded-lg`}
            to="/"
          >
            Clientes
          </Link>

          <Link
            className={`${
              location.pathname == "/clients/new"
                ? "text-blue-900 bg-white"
                : "text-white"
            } text-2xl font-bold text-center py-1 block mt-2 hover:text-blue-900 hover:bg-white rounded-lg`}
            to="/clients/new"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
