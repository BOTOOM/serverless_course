export const lambda_handler = async (event, context) => {
  // Procesamos el mensaje
  console.log("Mensaje recibido:", event);

  // Devolvemos una respuesta
  return {
    statusCode: 200,
    body: JSON.stringify({
      mensaje: "Procesado correctamente",
    }),
  };
};