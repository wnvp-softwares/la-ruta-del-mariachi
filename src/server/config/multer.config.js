import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuración de rutas para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definición del almacenamiento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Apuntamos a la carpeta 'uploads' que ya tienes en tu esqueleto
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

// Filtro de seguridad: Solo aceptar imágenes
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Formato no válido. Solo se permiten imágenes (jpeg, jpg, png, webp).'));
    }
};

// Exportamos el middleware configurado con un límite de 5MB
export const upload = multer({ 
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, 
    fileFilter
});