const swaggerDefinition = {
  info: {
    title: "IotBackEndMeteo",
    version: "1.0.0",
    description:
      "Simple API to retrieve several information from different sensors such as average temperature, " +
      "humidity, wind speed and average device data. It is also possible to convert degrees to Fahrenheit.",
  },
  host: "localhost:9000/api/v1",
  basePath: "/",
};

const options = {
  swaggerDefinition: swaggerDefinition,
  apis: ["./routes/*.js"],
};

module.exports = options;
