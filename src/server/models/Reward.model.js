import { DataTypes } from 'sequelize'
import sequelize from '../config/database.config.js'

const Reward = sequelize.define('Reward', {
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
    iconUrl: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'rewards',
    timestamps: false
})

export default Reward