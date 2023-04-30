import React from "react";
import { useLoaderData } from "react-router-dom";
import Client from "../components/Client";
import { getClients } from "../data/clients";

export async function loader() {
  const clients = await getClients();
  return clients;
}

function Index() {
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

          <tbody className="">
            {clientes.map((client) => (
              <Client client={client} key={client.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="txet-center mt-10">Aún no hay clientes</p>
      )}
    </>
  );
}

export default Index;
