import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import sequelize from './config/database.config.js';
import path from 'path';
import { fileURLToPath } from 'url';

//w: Importación de Swagger - @wnvp-softwares
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.config.js';

// Importación de todos los routers
import authRoutes from './routes/auth.routes.js';
import placesRoutes from './routes/places.routes.js';
import routeRoutes from './routes/routes.routes.js';
import progressRoutes from './routes/progress.routes.js';
import rewardsRoutes from './routes/rewards.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares globales
app.use(cors());
app.use(express.json());

// Exponer la carpeta uploads para que los clientes puedan ver las imágenes
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// ==========================================
// DEFINICIÓN DE ENDPOINTS PRINCIPALES
// ==========================================
app.use('/api/auth', authRoutes);
app.use('/api/places', placesRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/rewards', rewardsRoutes)

// ==========================================
// DEFINICIÓN DE ENDPOINTS PARA DOCUMENTACIÓN
// ==========================================

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ==========================================
// SINCRONIZACIÓN Y ARRANQUE
// ==========================================
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');

        app.listen(PORT, () => {
            console.log(`Servidor de La Ruta del Mariachi corriendo en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
};

startServer();