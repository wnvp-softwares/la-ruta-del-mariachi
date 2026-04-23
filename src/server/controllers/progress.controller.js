import { User, Place, Route, UserRouteProgress } from '../models/index.js'

// ==========================================
// INICIAR UNA RUTA
// ==========================================
export const startRoute = async (req, res) => {
    try {
        const { userId, routeId } = req.body;

        const [progress, created] = await UserRouteProgress.findOrCreate({
            where: { userId, routeId },
            defaults: { status: 'in_progress' }
        });

        if (!created && progress.status === 'in_progress') {
            return res.status(400).json({ message: 'Ya tienes esta ruta en progreso.' });
        }

        res.status(200).json({ message: 'Ruta iniciada con éxito.', progress });
    } catch (error) {
        console.error('Error en startRoute:', error);
        res.status(500).json({ message: 'Error al iniciar la ruta.' });
    }
};

// ==========================================
// MARCAR LUGAR COMO VISITADO 
// ==========================================
export const markPlaceVisited = async (req, res) => {
    try {
        const { userId, placeId } = req.body;

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        await user.addPlace(placeId);

        res.status(200).json({ message: '¡Lugar registrado en tu progreso!' });
    } catch (error) {
        console.error('Error en markPlaceVisited:', error);
        res.status(500).json({ message: 'Error al registrar la visita.' });
    }
};

// ==========================================
// COMPLETAR RUTA
// ==========================================
export const completeRoute = async (req, res) => {
    try {
        const { userId, routeId } = req.body;

        const progress = await UserRouteProgress.findOne({
            where: { userId, routeId, status: 'in_progress' }
        });

        if (!progress) {
            return res.status(404).json({ message: 'No tienes esta ruta en progreso.' });
        }

        progress.status = 'completed';
        progress.completedAt = new Date();
        await progress.save();

        res.status(200).json({ message: '¡Felicidades! Has completado la ruta.' });
    } catch (error) {
        console.error('Error en completeRoute:', error);
        res.status(500).json({ message: 'Error al finalizar la ruta.' });
    }
};