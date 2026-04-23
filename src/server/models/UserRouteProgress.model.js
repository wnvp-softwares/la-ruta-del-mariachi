import { DataTypes } from 'sequelize'
import sequelize from '../config/database.config.js'

const UserRouteProgress = sequelize.define('UserRouteProgress', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    routeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        defaultValue: 'in_progress'
    },
    completedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'user_route_progress',
    timestamps: false
})

export default UserRouteProgress