require('dotenv').config();
import 'reflect-metadata';
import express, { Application } from 'express';
import middlewareConfig from './config/middleware';
import routes from './routes';
import { dbInitialize } from './database/db.connection';

const port = process.env.SERVER_PORT || 3000;

const app: Application = express();

dbInitialize();

middlewareConfig(app);

routes(app);

const start = async (): Promise<void> => {
  try {
    app.listen(+port, process.env.SERVER_HOST || '127.0.0.1', () => {
      console.log(`Application started on port ${port}!`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
