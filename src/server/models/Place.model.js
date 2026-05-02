import { DataTypes } from 'sequelize'
import sequelize from '../config/database.config.js'

const Place = sequelize.define('Place', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING(255),
        allowNull: true 
    },
    latitude: {
        type: DataTypes.DECIMAL(9, 6),
        allowNull: false
    },
    longitude: {
        type: DataTypes.DECIMAL(9, 6),
        allowNull: false
    }
}, {
    tableName: 'places',
    timestamps: false 
})

export default Place