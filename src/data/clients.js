export async function getClients() {
  const url_api = `${import.meta.env.VITE_API_URL}/clients` //usar la variable de la url
  const respuesta = await fetch(url_api)
  const resultado = await respuesta.json()
  return resultado
}

export async function getClient(id) {
  const url_api = `${import.meta.env.VITE_API_URL}/clients/${id}` //usar la variable de la url
  const respuesta = await fetch(url_api)
  const resultado = await respuesta.json()
  return resultado
}

export async function addClient(datos) {//agregar un cliente
  try {
    const url_api = `${import.meta.env.VITE_API_URL}/clients` //usar la variable de la url
    const respuesta = await fetch(url_api, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    await respuesta.json()
  } catch (error) {
    console.log(error)
  }
}

export async function updateClient(id, datos) {//agregar un cliente
  try {
    const url_api = `${import.meta.env.VITE_API_URL}/clients/${id}` //usar la variable de la url
    const respuesta = await fetch(url_api, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    await respuesta.json()
  } catch (error) {
    console.log(error)
  }
}