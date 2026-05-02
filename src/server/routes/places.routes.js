import { Router } from 'express';
import { 
    getAllPlaces, 
    getPlaceById, 
    getPlacesByRoute 
} from '../controllers/places.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Places
 *   description: Endpoints relacionados con lugares turísticos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Place:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Teatro Degollado
 *         description:
 *           type: string
 *           example: Teatro histórico ubicado en Guadalajara
 *         latitude:
 *           type: number
 *           example: 20.6767
 *         longitude:
 *           type: number
 *           example: -103.3475
 *         image:
 *           type: string
 *           example: teatro-degollado.jpg
 *
 *     RoutePlacesResponse:
 *       type: object
 *       properties:
 *         route:
 *           type: string
 *           example: Ruta Centro Histórico
 *         description:
 *           type: string
 *           example: Recorrido cultural por el centro de Guadalajara
 *         places:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Place'
 */

/**
 * @swagger
 * /api/places:
 *   get:
 *     summary: Obtener todos los lugares
 *     description: Retorna una lista de todos los lugares disponibles
 *     tags:
 *       - Places
 *     responses:
 *       200:
 *         description: Lista de lugares obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Place'
 *
 *       500:
 *         description: Error al obtener los lugares
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al obtener los lugares.
 */
router.get('/', getAllPlaces);

/**
 * @swagger
 * /api/places/route/{routeId}:
 *   get:
 *     summary: Obtener lugares pertenecientes a una ruta
 *     description: Retorna todos los lugares asociados a una ruta específica
 *     tags:
 *       - Places
 *     parameters:
 *       - in: path
 *         name: routeId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la ruta
 *
 *     responses:
 *       200:
 *         description: Lugares obtenidos correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RoutePlacesResponse'
 *
 *       404:
 *         description: Ruta no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Ruta no encontrada.
 *
 *       500:
 *         description: Error al obtener los lugares de la ruta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al obtener los lugares de la ruta.
 */
router.get('/route/:routeId', getPlacesByRoute);

/**
 * @swagger
 * /api/places/{id}:
 *   get:
 *     summary: Obtener un lugar por ID
 *     description: Retorna la información de un lugar específico
 *     tags:
 *       - Places
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del lugar
 *
 *     responses:
 *       200:
 *         description: Lugar encontrado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Place'
 *
 *       404:
 *         description: Lugar no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: El lugar escaneado no existe o no está disponible.
 *
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error interno del servidor.
 */
router.get('/:id', getPlaceById);

export default router;