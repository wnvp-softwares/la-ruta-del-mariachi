import { User, Reward } from '../models/index.js'

// ==========================================
// OTORGAR UNA RECOMPENSA AL USUARIO
// ==========================================
export const grantReward = async (req, res) => {
    try {
        const { userId, rewardId } = req.body;

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        const hasReward = await user.hasReward(rewardId);
        if (hasReward) {
            return res.status(400).json({ message: 'El usuario ya posee esta recompensa.' });
        }

        await user.addReward(rewardId);

        res.status(200).json({ message: '¡Recompensa desbloqueada con éxito!' });
    } catch (error) {
        console.error('Error en grantReward:', error);
        res.status(500).json({ message: 'Error al otorgar la recompensa.' });
    }
};

// ==========================================
// OBTENER LAS RECOMPENSAS DE UN USUARIO
// ==========================================
export const getUserRewards = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findByPk(userId, {
            include: [{
                model: Reward,
                through: { attributes: ['earnedAt'] } 
            }]
        });

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        res.status(200).json(user.Rewards);
    } catch (error) {
        console.error('Error en getUserRewards:', error);
        res.status(500).json({ message: 'Error al obtener las recompensas.' });
    }
};