import { Router } from 'express';
import { grantReward, getUserRewards } from '../controllers/rewards.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Rewards
 *   description: Endpoints relacionados con recompensas y logros de usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Reward:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Explorador del Centro Histórico
 *         description:
 *           type: string
 *           example: Recompensa obtenida por completar la ruta del centro histórico
 *         image:
 *           type: string
 *           example: explorer-badge.png
 *
 *     GrantRewardBody:
 *       type: object
 *       required:
 *         - userId
 *         - rewardId
 *       properties:
 *         userId:
 *           type: integer
 *           example: 1
 *         rewardId:
 *           type: integer
 *           example: 3
 */

/**
 * @swagger
 * /api/rewards/grant:
 *   post:
 *     summary: Otorgar una recompensa a un usuario
 *     description: Asigna una recompensa a un usuario si aún no la posee
 *     tags:
 *       - Rewards
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GrantRewardBody'
 *
 *     responses:
 *       200:
 *         description: Recompensa otorgada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ¡Recompensa desbloqueada con éxito!
 *
 *       400:
 *         description: El usuario ya posee esta recompensa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: El usuario ya posee esta recompensa.
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
 *         description: Error al otorgar la recompensa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al otorgar la recompensa.
 */
router.post('/grant', grantReward);

/**
 * @swagger
 * /api/rewards/user/{userId}:
 *   get:
 *     summary: Obtener recompensas de un usuario
 *     description: Retorna todas las recompensas desbloqueadas por un usuario
 *     tags:
 *       - Rewards
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *
 *     responses:
 *       200:
 *         description: Lista de recompensas obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reward'
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
 *         description: Error al obtener las recompensas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al obtener las recompensas.
 */
router.get('/user/:userId', getUserRewards);

export default router;