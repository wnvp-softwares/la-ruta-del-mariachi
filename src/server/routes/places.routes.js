import { Router } from "express";
import {
  getAllPlaces,
  getPlaceById,
  getPlacesByRoute,
} from "../controllers/places.controller.js";

const router = Router();

/**
 * @swagger
 * /api/places:
 *   get:
 *     summary: Obtener todos los lugares
 *     description: Retorna una lista de todos los lugares disponibles
 *     tags: [Places]
 *     responses:
 *       200:
 *         description: Lista de lugares obtenida correctamente
 */
router.get("/", getAllPlaces);

/**
 * @swagger
 * /api/places/{id}:
 *   get:
 *     summary: Obtener un lugar por ID
 *     description: Retorna un lugar específico usando su ID
 *     tags: [Places]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del lugar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lugar encontrado
 *       404:
 *         description: Lugar no encontrado
 */
router.get("/:id", getPlaceById);

/**
 * @swagger
 * /api/places/route/{routeId}:
 *   get:
 *     summary: Obtener lugares por ruta
 *     description: Retorna todos los lugares asociados a una ruta específica
 *     tags: [Places]
 *     parameters:
 *       - in: path
 *         name: routeId
 *         required: true
 *         description: ID de la ruta
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lugares encontrados
 *       404:
 *         description: No se encontraron lugares
 */
router.get("/route/:routeId", getPlacesByRoute);

export default router;
