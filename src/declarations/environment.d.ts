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
    }
  }
}
export {};
