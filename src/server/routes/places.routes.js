import { Router } from 'express';
import { 
    getAllPlaces, 
    getPlaceById, 
    getPlacesByRoute 
} from '../controllers/places.controller.js';

const router = Router();

router.get('/', getAllPlaces);

router.get('/:id', getPlaceById);

router.get('/route/:routeId', getPlacesByRoute);

export default router;