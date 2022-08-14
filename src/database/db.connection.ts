import { Dialect, Sequelize } from 'sequelize';
import { models } from './models';
// import { UserInit } from './models/user.model';
// import { RoleInit } from './models/beach.model';
// import { BeachInit } from './models/flag.model';
// import { FlagInit } from './models/role.model';
// import { UserBeachInit } from './models/user-beach.model';
require('dotenv').config();

const testDbName = process.env.TEST_DB_NAME as string;

const devDbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbDialect = process.env.DB_DIALECT as Dialect;
const dbProtocol = process.env.DB_PROTOCOL as string;
const dbPort = +process.env.DB_PORT! as number;

const dbName = process.env.NODE_ENV === 'development' ? devDbName : testDbName;

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: 'postgres',
  protocol: dbProtocol,
  host: dbHost,
  port: dbPort,
  logging: false,
  dialectOptions: { dateStrings: true, typeCast: true },
  define: {
    timestamps: true,
  },
});

export const dbInitialize = async () => {
  Object.values(models).forEach((model) => model(sequelize));
  Object.values(models).forEach((model) => {
    model(sequelize).associate(models);
  });
  console.log(
    `Database: ${sequelize.config.database} successfully initialized!`
  );
};

// export default {
//   sequelize,
//   models: sequelize.models,
// };
