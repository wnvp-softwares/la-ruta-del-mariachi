import express from "express";
import cors from "cors";
import "dotenv/config";
import sequelize from "./config/database.config.js";

// Swagger (TODO con import, nada de require)
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

// Importación de routers
import authRoutes from "./routes/auth.routes.js";
import placesRoutes from "./routes/places.routes.js";
import routeRoutes from "./routes/routes.routes.js";
import progressRoutes from "./routes/progress.routes.js";
import rewardsRoutes from "./routes/rewards.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// ===== Middlewares =====
app.use(cors());
app.use(express.json());

// ===== Swagger Config =====
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "La Ruta del Mariachi API",
      version: "1.0.0",
      description: "Documentación del servidor",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/server/routes/*.js"], // ruta correcta
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Ruta para documentación
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ===== Endpoints =====
app.use("/api/auth", authRoutes);
app.use("/api/places", placesRoutes);
app.use("/api/routes", routeRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/rewards", rewardsRoutes);

// ===== Arranque del servidor =====
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
      console.log(`Swagger disponible en http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
};

startServer();
