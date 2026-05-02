import { Router } from 'express';
import { getAllRoutes } from '../controllers/routes.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Routes
 *   description: Endpoints relacionados con rutas turísticas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Route:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Ruta Centro Histórico
 *         description:
 *           type: string
 *           example: Recorrido turístico por el centro histórico de Guadalajara
 *         difficulty:
 *           type: string
 *           example: Intermedio
 *         estimatedTime:
 *           type: integer
 *           example: 120
 *         image:
 *           type: string
 *           example: centro-historico.jpg
 */

/**
 * @swagger
 * /api/routes:
 *   get:
 *     summary: Obtener todas las rutas turísticas
 *     description: Retorna el catálogo completo de rutas disponibles
 *     tags:
 *       - Routes
 *
 *     responses:
 *       200:
 *         description: Lista de rutas obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Route'
 *
 *       500:
 *         description: Error al obtener el catálogo de rutas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al obtener el catálogo de rutas.
 */
router.get('/', getAllRoutes);

export default router;