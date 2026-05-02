-- 1. Función y Trigger para lastLogin
CREATE OR REPLACE FUNCTION update_lastlogin_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.lastLogin = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 2. Tabla de Usuarios
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profileIcon VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastLogin TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER update_users_lastlogin
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_lastlogin_column();

-- 3. Tabla de Lugares
CREATE TABLE IF NOT EXISTS places (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    imageUrl VARCHAR(255),
    latitude DECIMAL(9,6) NOT NULL,
    longitude DECIMAL(9,6) NOT NULL
);

-- 4. Tabla de Rutas
CREATE TABLE IF NOT EXISTS routes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

-- 5. Configuración de Rutas 
CREATE TABLE IF NOT EXISTS routes_details (
    id SERIAL PRIMARY KEY,
    routeId INT NOT NULL REFERENCES routes(id) ON DELETE CASCADE,
    placeId INT NOT NULL REFERENCES places(id) ON DELETE CASCADE
);

-- 6. Progreso de Lugares Visitados 
CREATE TABLE IF NOT EXISTS visited_places (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    placeId INT NOT NULL REFERENCES places(id) ON DELETE CASCADE,
    visitedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- NUEVAS TABLAS: EFICIENCIA Y RECOMPENSAS
-- ==========================================

-- 7. Eficiencia de Rutas: Rastrea si una ruta está en proceso o terminada
CREATE TABLE IF NOT EXISTS user_route_progress (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    routeId INT NOT NULL REFERENCES routes(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'in_progress', -- Puede ser 'in_progress' o 'completed'
    completedAt TIMESTAMP NULL
);

-- 8. Catálogo de Recompensas Digitales
CREATE TABLE IF NOT EXISTS rewards (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    iconUrl VARCHAR(255) NOT NULL
);

-- 9. Recompensas ganadas por el usuario
CREATE TABLE IF NOT EXISTS user_rewards (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    rewardId INT NOT NULL REFERENCES rewards(id) ON DELETE CASCADE,
    earnedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);