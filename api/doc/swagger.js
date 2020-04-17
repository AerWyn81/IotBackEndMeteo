const swaggerJSDoc = require("swagger-jsdoc"),
  options = require("./swaggerDef"),
  swaggerSpec = swaggerJSDoc(options);

const swagger = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
};

module.exports = swagger;
