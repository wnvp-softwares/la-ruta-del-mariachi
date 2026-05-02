import { Place, Route } from '../models/index.js'

// ==========================================
// OBTENER TODOS LOS LUGARES 
// ==========================================
export const getAllPlaces = async (req, res) => {
    try {
        const places = await Place.findAll();
        res.status(200).json(places);
    } catch (error) {
        console.error('Error en getAllPlaces:', error);
        res.status(500).json({ message: 'Error al obtener los lugares.' });
    }
};

// ==========================================
// OBTENER UN LUGAR POR ID 
// ==========================================
export const getPlaceById = async (req, res) => {
    try {
        const { id } = req.params;
        const place = await Place.findByPk(id);

        if (!place) {
            return res.status(404).json({ message: 'El lugar escaneado no existe o no está disponible.' });
        }

        res.status(200).json(place);
    } catch (error) {
        console.error('Error en getPlaceById:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

// ==========================================
// OBTENER LUGARES POR RUTA 
// ==========================================
export const getPlacesByRoute = async (req, res) => {
    try {
        const { routeId } = req.params;

        const route = await Route.findByPk(routeId, {
            include: [{
                model: Place,
                through: { attributes: [] } 
            }]
        });

        if (!route) {
            return res.status(404).json({ message: 'Ruta no encontrada.' });
        }

        res.status(200).json({
            route: route.name,
            description: route.description,
            places: route.Places 
        });
    } catch (error) {
        console.error('Error en getPlacesByRoute:', error);
        res.status(500).json({ message: 'Error al obtener los lugares de la ruta.' });
    }
};