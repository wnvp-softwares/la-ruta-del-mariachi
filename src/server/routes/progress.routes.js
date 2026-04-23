import { Router } from 'express';
import { 
    startRoute, 
    markPlaceVisited, 
    completeRoute 
} from '../controllers/progress.controller.js';

const router = Router();

router.post('/start', startRoute);

router.post('/visit', markPlaceVisited);

router.post('/complete', completeRoute);

export default router;