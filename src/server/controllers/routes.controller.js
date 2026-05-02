import { Route } from '../models/index.js'

// ==========================================
// OBTENER TODAS LAS RUTAS DISPONIBLES
// ==========================================
export const getAllRoutes = async (req, res) => {
    try {
        const routes = await Route.findAll();
        res.status(200).json(routes);
    } catch (error) {
        console.error('Error en getAllRoutes:', error);
        res.status(500).json({ message: 'Error al obtener el catálogo de rutas.' });
    }
};