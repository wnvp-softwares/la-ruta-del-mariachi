import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "La Ruta del Mariachi API",
        version: "1.0.0",
        description: "API de La Ruta del Mariachi. Documentacion con Swagger por @wnvp-softwares",
    },
    servers: [
        {
            url: "http://localhost:3000"
        },
    ]
};

const options = {
    definition: swaggerDefinition,
    apis: ["./src/server/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;