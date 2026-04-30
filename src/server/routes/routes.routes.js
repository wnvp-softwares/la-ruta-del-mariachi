import { Router } from "express";
import { getAllRoutes } from "../controllers/routes.controller.js";

const router = Router();

/**
 * @swagger
 * /api/routes:
 *   get:
 *     summary: Obtener todas las rutas
 *     description: Retorna todas las rutas disponibles en el sistema
 *     tags: [Routes]
 *     responses:
 *       200:
 *         description: Lista de rutas obtenida correctamente
 */
router.get("/", getAllRoutes);

export default router;
