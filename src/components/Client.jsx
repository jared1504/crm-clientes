import React from "react";
import { useNavigate, Form, redirect } from "react-router-dom";
import { destroyClient } from "../data/clients";

export async function action({ params }) {
  await destroyClient(params.id);
  return redirect("/");
}

function Client({ client }) {
  const navigate = useNavigate();
  const { nombre, empresa, email, telefono, id } = client;
  return (
    <tr className="border-b">
      <td className="p-4 space-y-2">
        <p className="text-2xl text-gray-800">
          <span className="text-gray-800  font-bold">Nombre:</span> {nombre}
        </p>
        <p className="">{empresa}</p>
      </td>
      <td className="p-4 space-y-2">
        <p className="text-gray-600 ">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>

        <p className="text-gray-600 ">
          <span className="text-gray-800 uppercase font-bold">Teléfono: </span>
          {telefono}
        </p>
      </td>
      <td className="p-4  space-y-2">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl w-full uppercase font-bold text-xs"
          type="button"
          onClick={() => navigate(`/clients/${id}/edit`)}
        >
          Editar
        </button>
        <Form
          method="POST"
          action={`/clients/${id}/destroy`}
          onSubmit={(e) => {
            if (!confirm("¿Deseas eliminar el cliente?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl w-full uppercase font-bold text-xs"
            type="submit"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
}

export default Client;
