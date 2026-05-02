CREATE DATABASE IF NOT EXISTS LRDM;

USE LRDM;

-- ! Las tablas de la base de datos estan en ingles
-- ! Realizar script de duplicacion de datos para mantener info en caso de falla general o corrupcion

-- TODO: Tenemos que buscar migrar la BD al sistema SUPERBASE para poder generar una multiconexion y una manera mas viable de trabajar

-- TODO: Traducir a PostgreSQL, porque aunque es MUY similar, no es lo mismo

-- ! Todas las imagenes son en modelo "VARCHAR" debido al uso de MULTER y guardadas en UPLOADS

-- * La tabla de usuarios guarda los siguientes datos:
-- * -id; Dato basico, para relaciones multiples
-- * -username; Nombre de usuario definido al crearse
-- * -password; Contraseña de usuario encriptada con bcryptjs
-- * -profileIcon; Icono de perfil del usuario
-- * -createdAt; Fecha de creacion del usuario
-- * -lastLogin; Fecha de ultimo inicio de sesion / ultimo login en la app movil

-- ? Ven viable el uso de un modelo de recuperacion de contraseñas?

CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profileIcon VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    lastLogin DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- * La tabla de lugares guarda los siguientes datos:
-- * -id; Dato basico, para relaciones multiples
-- * -name; Nombre del lugar / apodo del lugar
-- * -description; Descripcion del lugar para usar como referencia en recomendaciones de la app
-- * -latitude; Latitud del lugar (para la API de maps)
-- * -longitude; Longitud del lugar (para la API de maps)

-- ? Cual seria la viabilidad de usar imagenes en las referencias de los lugares?
-- ? De ser viable, quien tomaria tales imagenes?

CREATE TABLE IF NOT EXISTS places (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    imageUrl VARCHAR(255),
    latitude DECIMAL(9,6) NOT NULL,
    longitude DECIMAL(9,6) NOT NULL,
    PRIMARY KEY (id)
);

-- * La tabla de rutas guarda los siguientes datos:
-- * -id; Dato basico, para relaciones multiples
-- * -name; Nombre de la ruta
-- * -description; Descripcion de la ruta

CREATE TABLE IF NOT EXISTS routes (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (id)
);

-- * La tabla de rutas guarda los siguientes datos:
-- * -id; Dato basico, para relaciones multiples
-- * -routeId; Id de la ruta
-- * -placeId; Id del lugar

--! Esta es una tabla auxiliar / pivote para relacionar las rutas con los lugares

CREATE TABLE IF NOT EXISTS routes_details (
    id INT NOT NULL AUTO_INCREMENT,
    routeId INT NOT NULL,
    placeId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (routeId) REFERENCES routes(id) ON DELETE CASCADE,
    FOREIGN KEY (placeId) REFERENCES places(id) ON DELETE CASCADE
);

-- * La tabla de visitados guarda los siguientes datos:
-- * -id; Dato basico, para relaciones multiples
-- * -userId; Id del usuario
-- * -placeId; Id del lugar

-- ? Pregunta para @diego-fregoso: Habra manera de aplicar otro pivote para hacer una relacion de muchos a muchos y manejar de manera mas eficiente las rutas realizadas?

-- TODO: Hacer sistema de guardado de datos de recompensas al completar rutas

CREATE TABLE IF NOT EXISTS visited_places (
    id INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    placeId INT NOT NULL,
    visitedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (placeId) REFERENCES places(id) ON DELETE CASCADE
);

-- NUEVAS TABLAS
CREATE TABLE IF NOT EXISTS user_route_progress (
    id INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    routeId INT NOT NULL,
    status VARCHAR(20) DEFAULT 'in_progress',
    completedAt DATETIME NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (routeId) REFERENCES routes(id) ON DELETE CASCADE
);

-- Catálogo de Recompensas
CREATE TABLE IF NOT EXISTS rewards (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    iconUrl VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Tabla pivote de Recompensas del Usuario
CREATE TABLE IF NOT EXISTS user_rewards (
    id INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    rewardId INT NOT NULL,
    earnedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (rewardId) REFERENCES rewards(id) ON DELETE CASCADE
);