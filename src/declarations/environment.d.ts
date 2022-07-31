import { Dialect } from 'sequelize/types';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_PORT: string;
      SERVER_HOST: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      DB_DIALECT: string;
      DB_PROTOCOL: string;
      DB_PORT: string;
      DB_HOST: string;
      ACCESS_JWT_SECRET: string;
      REFRESH_JWT_SECRET: string;
      ACCESS_JWT_LIFE: string;
      REFRESH_JWT_LIFE: string;
      SALT_ROUNDS: string;
    }
  }
}
export {};
