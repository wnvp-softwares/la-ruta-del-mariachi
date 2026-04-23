import { Router } from 'express';
import { grantReward, getUserRewards } from '../controllers/rewards.controller.js';

const router = Router();

router.post('/grant', grantReward);

router.get('/user/:userId', getUserRewards);

export default router;