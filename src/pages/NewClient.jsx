import React from "react";
import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import FormClient from "../components/FormClient";
import Error from "../components/Error";
import { addClient } from "../data/clients";

export async function action({ request }) {
  //es el action del formulario -> method: post
  //obtener los datos ingresados en el formulario
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  //console.log(datos);
  const { email, telefono } = datos;
  //validacion de los datos
  const errores = [];
  if (Object.values(datos).includes("")) {
    //hay campos vacions
    errores.push("Todos los campos son obligatorios");
  }
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push("El email no es válido");
  }

  if (Object.keys(errores).length) {
    //retornar si hay error
    return errores;
  }
  await addClient(datos);
  return redirect("/"); 
}

function NewClient() {
  const errores = useActionData(); //hacer disponibles el arreglo de errores
  const navigate = useNavigate();
  //console.log(errores);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Agregar Cliente</h1>
      <p className="mt-3">Llena los campos para agregar cliente</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-5 rounded-xl uppercase font-bold text-xs"
          onClick={() => navigate(-1)} //para volver a la pagina que estaba antes
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        {errores?.length
          ? errores.map((error, i) => <Error key={i}>{error}</Error>)
          : ""}
        <Form method="post" noValidate>
          <FormClient />
          <input
            type="submit"
            value="Registrar Cliente"
            className="bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-md w-full uppercase font-bold text-lg"
          />
        </Form>
      </div>
    </>
  );
}

export default NewClient;
