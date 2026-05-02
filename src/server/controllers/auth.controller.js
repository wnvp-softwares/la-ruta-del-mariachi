import bcrypt from 'bcryptjs'
import { User } from '../models/index.js'

// ==========================================
// REGISTRO DE USUARIO
// ==========================================
export const registerUser = async (req, res) => {
    try {
        const { username, password, profileIcon } = req.body;

        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'El nombre de usuario ya está en uso.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3. Crear el usuario en la BD
        const newUser = await User.create({
            username,
            password: hashedPassword,
            profileIcon: profileIcon || 'default.png' 
        });

        res.status(201).json({
            message: 'Usuario registrado con éxito',
            user: {
                id: newUser.id,
                username: newUser.username,
                profileIcon: newUser.profileIcon
            }
        });

    } catch (error) {
        console.error('Error en registerUser:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

// ==========================================
// INICIO DE SESIÓN
// ==========================================
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Contraseña incorrecta.' });
        }

        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            user: {
                id: user.id,
                username: user.username,
                profileIcon: user.profileIcon
            }
        });

    } catch (error) {
        console.error('Error en loginUser:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};