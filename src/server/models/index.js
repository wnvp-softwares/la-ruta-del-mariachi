import User from './User.js'
import Place from './Place.js'
import Route from './Route.js'

// Relación Muchos a Muchos: Rutas y Lugares (routes_details)
Route.belongsToMany(Place, { 
    through: 'routes_details', 
    foreignKey: 'route_id',
    otherKey: 'place_id'
})
Place.belongsToMany(Route, { 
    through: 'routes_details', 
    foreignKey: 'place_id',
    otherKey: 'route_id'
})

// Relación Muchos a Muchos: Usuarios y Lugares Visitados (visited_places)
User.belongsToMany(Place, { 
    through: 'visited_places', 
    foreignKey: 'user_id',
    otherKey: 'place_id'
})
Place.belongsToMany(User, { 
    through: 'visited_places', 
    foreignKey: 'place_id',
    otherKey: 'user_id'
})

export { User, Place, Route }