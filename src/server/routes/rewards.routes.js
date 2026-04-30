import { Router } from "express";
import {
  grantReward,
  getUserRewards,
} from "../controllers/rewards.controller.js";

const router = Router();

/**
 * @swagger
 * /api/rewards/grant:
 *   post:
 *     summary: Otorgar recompensa
 *     description: Asigna una recompensa a un usuario
 *     tags: [Rewards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               rewardId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Recompensa otorgada correctamente
 */
router.post("/grant", grantReward);

/**
 * @swagger
 * /api/rewards/user/{userId}:
 *   get:
 *     summary: Obtener recompensas del usuario
 *     description: Retorna todas las recompensas asociadas a un usuario
 *     tags: [Rewards]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de recompensas obtenida correctamente
 *       404:
 *         description: Usuario no encontrado o sin recompensas
 */
router.get("/user/:userId", getUserRewards);

export default router;
