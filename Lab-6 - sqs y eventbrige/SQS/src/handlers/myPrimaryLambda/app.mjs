import { SQSClient,SendMessageBatchCommand } from "@aws-sdk/client-sqs";
// import { v4 as uuidv4 } from "uuid";
const client = new SQSClient();


export const lambda_handler = async (event, context) => {
  // const groupId = event["groupId"]+ `${Date.now()}`;
  const messages = [];
  for (let i = 0; i <= 6; i++) {
    messages.push({
      Id: `mi-id-${i}`,
      MessageBody: JSON.stringify({
        "id": `mi-id-${i}`,
        "message": `hola ${i}`,
        "verificador": i
      }),
    });
  }
  try {
    if (messages.length > 0) {
      const queueUrl = process.env.MY_SQS_URL;
      const command = new SendMessageBatchCommand({
        QueueUrl: queueUrl,
        Entries: messages,
      });
      const sqs_status = await client.send(command);

      console.log(`Messages sent successfully: ${JSON.stringify(sqs_status)}`);
    }
  } catch (sqs_error) {
    console.error(`Error sending messages: ${sqs_error}`);
  }

  return { status: 200, msg: "los mensjes se han enviado exitosamente" };
};
