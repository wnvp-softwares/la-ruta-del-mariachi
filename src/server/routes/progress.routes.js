import { Router } from "express";
import {
  startRoute,
  markPlaceVisited,
  completeRoute,
} from "../controllers/progress.controller.js";

const router = Router();

/**
 * @swagger
 * /api/progress/start:
 *   post:
 *     summary: Iniciar una ruta
 *     description: Inicia el progreso de una ruta para un usuario
 *     tags: [Progress]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               routeId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Ruta iniciada correctamente
 */
router.post("/start", startRoute);

/**
 * @swagger
 * /api/progress/visit:
 *   post:
 *     summary: Marcar lugar como visitado
 *     description: Marca un lugar como visitado dentro de una ruta
 *     tags: [Progress]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               placeId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Lugar marcado como visitado
 */
router.post("/visit", markPlaceVisited);

/**
 * @swagger
 * /api/progress/complete:
 *   post:
 *     summary: Completar ruta
 *     description: Marca una ruta como completada por el usuario
 *     tags: [Progress]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               routeId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Ruta completada exitosamente
 */
router.post("/complete", completeRoute);

export default router;
