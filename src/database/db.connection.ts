import { Dialect, Sequelize } from 'sequelize';
import { models } from './models';
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

export const { Beach, Flag, Role, User, UserBeach } =
  require('./models').getModels(sequelize);

export const dbInitialize = async () => {
  Object.values(models).forEach((model) => {
    model(sequelize).associate(models);
  });

  Beach.belongsTo(Flag, {
    foreignKey: 'flagId',
  });
  Beach.belongsTo(User, {
    foreignKey: 'beachAdminId',
  });
  Beach.belongsTo(UserBeach, {
    foreignKey: 'beachId',
  });

  Flag.hasMany(Beach, {
    foreignKey: 'flagId',
  });

  Role.hasOne(User, {
    foreignKey: 'roleId',
  });

  UserBeach.belongsTo(User, {
    foreignKey: 'userId',
  });
  UserBeach.belongsTo(Beach, {
    foreignKey: 'beachId',
  });

  User.belongsTo(Role, {
    foreignKey: 'roleId',
  });
  User.hasMany(Beach, {
    foreignKey: 'beachAdminId',
  });
  User.hasMany(UserBeach, {
    foreignKey: 'userId',
  });

  console.log(
    `Database: ${sequelize.config.database} successfully initialized!`
  );
};
