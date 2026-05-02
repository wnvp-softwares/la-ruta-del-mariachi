import { Router } from 'express';
import { 
    startRoute, 
    markPlaceVisited, 
    completeRoute 
} from '../controllers/progress.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Progress
 *   description: Endpoints relacionados con el progreso del usuario en las rutas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserRouteProgress:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         userId:
 *           type: integer
 *           example: 5
 *         routeId:
 *           type: integer
 *           example: 2
 *         status:
 *           type: string
 *           example: in_progress
 *         completedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *
 *     StartRouteBody:
 *       type: object
 *       required:
 *         - userId
 *         - routeId
 *       properties:
 *         userId:
 *           type: integer
 *           example: 1
 *         routeId:
 *           type: integer
 *           example: 2
 *
 *     VisitPlaceBody:
 *       type: object
 *       required:
 *         - userId
 *         - placeId
 *       properties:
 *         userId:
 *           type: integer
 *           example: 1
 *         placeId:
 *           type: integer
 *           example: 8
 *
 *     CompleteRouteBody:
 *       type: object
 *       required:
 *         - userId
 *         - routeId
 *       properties:
 *         userId:
 *           type: integer
 *           example: 1
 *         routeId:
 *           type: integer
 *           example: 2
 */

/**
 * @swagger
 * /api/progress/start:
 *   post:
 *     summary: Iniciar una ruta
 *     description: Crea o reanuda el progreso de una ruta para un usuario
 *     tags:
 *       - Progress
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StartRouteBody'
 *
 *     responses:
 *       200:
 *         description: Ruta iniciada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Ruta iniciada con éxito.
 *                 progress:
 *                   $ref: '#/components/schemas/UserRouteProgress'
 *
 *       400:
 *         description: La ruta ya está en progreso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Ya tienes esta ruta en progreso.
 *
 *       500:
 *         description: Error al iniciar la ruta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al iniciar la ruta.
 */
router.post('/start', startRoute);

/**
 * @swagger
 * /api/progress/visit:
 *   post:
 *     summary: Registrar un lugar visitado
 *     description: Marca un lugar como visitado para un usuario
 *     tags:
 *       - Progress
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VisitPlaceBody'
 *
 *     responses:
 *       200:
 *         description: Lugar registrado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ¡Lugar registrado en tu progreso!
 *
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario no encontrado.
 *
 *       500:
 *         description: Error al registrar la visita
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al registrar la visita.
 */
router.post('/visit', markPlaceVisited);

/**
 * @swagger
 * /api/progress/complete:
 *   post:
 *     summary: Completar una ruta
 *     description: Marca una ruta como completada para un usuario
 *     tags:
 *       - Progress
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CompleteRouteBody'
 *
 *     responses:
 *       200:
 *         description: Ruta completada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ¡Felicidades! Has completado la ruta.
 *
 *       404:
 *         description: No existe una ruta en progreso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No tienes esta ruta en progreso.
 *
 *       500:
 *         description: Error al finalizar la ruta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al finalizar la ruta.
 */
router.post('/complete', completeRoute);

export default router;