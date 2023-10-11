import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
const sqs = new AWS.SQS();

export const lambda_handler = async (event) => {

  // const groupId = event["groupId"]+ `${Date.now()}`;
  try {
    if (SQSEntries.length > 0) {
      let queueUrl;
      
      const sqs_status = await sqs
        .sendMessageBatch({
          QueueUrl: queueUrl,
          Entries: SQSEntries,
        })
        .promise();

      console.log(`Messages sent successfully: ${JSON.stringify(sqs_status)}`);
    }
  } catch (sqs_error) {
    console.error(`Error sending messages: ${sqs_error}`);
  }


  return { status: 200, msg: "Cronjob successfully processed" };
};
