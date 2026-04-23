import { DataTypes } from 'sequelize'
import sequelize from '../config/database.config.js'

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    profileIcon: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    lastLogin: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'users',
    timestamps: true, 
    createdAt: 'createdAt',
    updatedAt: false 
})

export default User