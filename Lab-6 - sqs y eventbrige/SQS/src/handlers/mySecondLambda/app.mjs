export const lambda_handler = async (event, context) => {
  // Procesamos el mensaje
  const message = JSON.parse(event.body);
  console.log("Mensaje recibido:", message);

  // Devolvemos una respuesta
  return {
    statusCode: 200,
    body: JSON.stringify({
      mensaje: "Procesado correctamente",
    }),
  };
};