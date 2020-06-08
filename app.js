const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=14cf73f014272a5492845e04a1fe01ad&query=Suresnes";
request.get(
  {
    url,
  },
  (err, { body }) => {
    const { current } = JSON.parse(body);
    console.log(current);
  }
);
