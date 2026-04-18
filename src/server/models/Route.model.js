import { DataTypes } from 'sequelize'
import sequelize from '../config/database.mysql.config'
// import sequelize from '../config/database.postgres.config'

const Route = sequelize.define('Route', {
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
    }
}, {
    tableName: 'routes',
    underscored: true,
    timestamps: false
})

export default Route