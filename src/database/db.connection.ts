import { Dialect, Sequelize } from 'sequelize';
import models from './models';
require('dotenv').config();

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbDialect = process.env.DB_DIALECT as Dialect;
const dbProtocol = process.env.DB_PROTOCOL as string;
const dbPort = +process.env.DB_PORT! as number;

export const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: dbDialect,
  protocol: dbProtocol,
  host: dbHost,
  port: dbPort,
  logging: false,
  dialectOptions: { dateStrings: true, typeCast: true },
  define: {
    timestamps: true,
  },
});

export const dbInitialize = () => {
  Object.values(models).forEach((model) => model(sequelizeConnection));
};
