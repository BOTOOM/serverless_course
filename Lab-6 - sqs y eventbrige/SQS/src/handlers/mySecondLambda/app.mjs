export const lambda_handler = async (event, context) => {
  // Procesamos el mensaje
  console.log("Mensaje recibido:", event["Records"]);
  const records = event["Records"];
  for (const record of records) {
    console.log(record["body"]);
    const body = JSON.parse(record["body"]);
    if (body["verificador"] === 5) {
      console.log("podemos mandar error");
      throw new Error("Error simulado"); 
    }
  }

  // Devolvemos una respuesta
  return {
    statusCode: 200,
    body: JSON.stringify({
      mensaje: "Procesado correctamente",
    }),
  };
};
