import { DataTypes } from 'sequelize'
import sequelize from '../config/database.mysql.config'
// import sequelize from '../config/database.postgres.config'

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
    underscored: true,
    timestamps: false
})

export default Place