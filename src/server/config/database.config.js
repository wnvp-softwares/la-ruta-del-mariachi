import { Sequelize } from 'sequelize';
import 'dotenv/config';

let sequelize;

if (process.env.DB_DIALECT === 'postgres') {
    sequelize = new Sequelize(
        process.env.PG_DB_NAME,
        process.env.PG_DB_USER,
        process.env.PG_DB_PASSWORD,
        {
            host: process.env.PG_DB_HOST,
            port: process.env.PG_DB_PORT,
            dialect: 'postgres',
            dialectOptions: {
                ssl: { require: true, rejectUnauthorized: false }
            },
            logging: false
        }
    );
} else {
    sequelize = new Sequelize(
        process.env.MYSQL_DB_NAME,
        process.env.MYSQL_DB_USER,
        process.env.MYSQL_DB_PASSWORD,
        {
            host: process.env.MYSQL_DB_HOST,
            port: process.env.MYSQL_DB_PORT,
            dialect: 'mysql',
            logging: false
        }
    );
}

export default sequelize;