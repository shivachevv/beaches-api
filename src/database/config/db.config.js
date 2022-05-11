require('dotenv').config();

const options = {
  development: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    protocol: process.env.DB_PROTOCOL,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    logging: false,
    dialectOptions: { dateStrings: true, typeCast: true },
    define: {
      timestamps: true,
    },
  },
};

module.exports = options;
