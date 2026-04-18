import { DataTypes } from 'sequelize'
import sequelize from '../config/database.mysql.config'
// import sequelize from '../config/database.postgres.config'

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
    }
}, {
    tableName: 'users',
    underscored: true,
    timestamps: true
})

export default User