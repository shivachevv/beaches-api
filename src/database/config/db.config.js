require('dotenv').config();

const testDbName = process.env.TEST_DB_NAME;

const devDbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbDialect = 'postgres';
const dbProtocol = process.env.DB_PROTOCOL;
const dbPort = +process.env.DB_PORT;

const dbName = process.env.NODE_ENV === 'development' ? devDbName : testDbName;

const options = {
  development: {
    username: dbUser,
    password: dbPassword,
    database: dbName,
    dialect: 'postgres',
    protocol: dbProtocol,
    host: dbHost,
    port: dbPort,
    logging: false,
    dialectOptions: { dateStrings: true, typeCast: true },
    define: {
      timestamps: true,
    },
  },
  test: {
    username: dbUser,
    password: dbPassword,
    database: dbName,
    dialect: 'postgres',
    protocol: dbProtocol,
    host: dbHost,
    port: dbPort,
    logging: false,
    dialectOptions: { dateStrings: true, typeCast: true },
    define: {
      timestamps: true,
    },
  },
};

module.exports = options;
