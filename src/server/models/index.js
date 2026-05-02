import User from './User.model.js'
import Place from './Place.model.js'
import Route from './Route.model.js'
import Reward from './Reward.model.js'
import UserRouteProgress from './UserRouteProgress.model.js'

// 1. Relación Muchos a Muchos: Rutas y Lugares (routes_details)
Route.belongsToMany(Place, { 
    through: 'routes_details', 
    foreignKey: 'routeId', // Corregido a camelCase
    otherKey: 'placeId',   // Corregido a camelCase
    timestamps: false
})
Place.belongsToMany(Route, { 
    through: 'routes_details', 
    foreignKey: 'placeId',
    otherKey: 'routeId',
    timestamps: false
})

// 2. Relación Muchos a Muchos: Usuarios y Lugares Visitados (visited_places)
User.belongsToMany(Place, { 
    through: 'visited_places', 
    foreignKey: 'userId',
    otherKey: 'placeId',
    timestamps: false
})
Place.belongsToMany(User, { 
    through: 'visited_places', 
    foreignKey: 'placeId',
    otherKey: 'userId',
    timestamps: false
})

// 3. Relación Muchos a Muchos: Usuarios y Recompensas (user_rewards)
User.belongsToMany(Reward, {
    through: 'user_rewards',
    foreignKey: 'userId',
    otherKey: 'rewardId',
    timestamps: false
})
Reward.belongsToMany(User, {
    through: 'user_rewards',
    foreignKey: 'rewardId',
    otherKey: 'userId',
    timestamps: false
})

// 4. Relación Muchos a Muchos con atributos extra: Progreso de Rutas
User.belongsToMany(Route, {
    through: UserRouteProgress, // Pasamos el modelo directamente aquí
    foreignKey: 'userId',
    otherKey: 'routeId'
})
Route.belongsToMany(User, {
    through: UserRouteProgress,
    foreignKey: 'routeId',
    otherKey: 'userId'
})

export { User, Place, Route, Reward, UserRouteProgress }