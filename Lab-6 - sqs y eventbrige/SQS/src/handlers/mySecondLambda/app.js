import fetch from "node-fetch";

export const lambda_handler = function (event, context) {
  console.log(event, "\n\n\n");
  event.Records.forEach(async (record) => {
    console.log("record");
    console.log(record);
    let url = "";
    if (record.eventSourceARN.toLowerCase().includes("twitter")) {
      url = process.env.CS_POST_TW.toLowerCase();
    }
    if (record.eventSourceARN.toLowerCase().includes("onlyfans")) {
      url = process.env.CS_POST_OF_WH.toLowerCase();
    }
    console.log("url:", url);
    const params = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: record.body,
    };
    console.log("PARAMS TO SEND")
    console.log(params)

    try {
      const res = await fetch(url, params);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  });
};
