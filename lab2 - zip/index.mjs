export const handler = async (event) => {
    // TODO implement
    const response = {
      statusCode: 200,
      body: `Your random number ${getRandomInt(event.max)}`,
    };
    return response;
  };
  
  function getRandomInt(max = 10) {
    console.log("use max", max)
    return Math.floor(Math.random() * Math.floor(max));
  }
  