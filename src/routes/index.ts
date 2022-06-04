import express, { Application } from 'express';
import mainRoutes from './main.routes';
import userRoutes from './user.routes';

const router = express.Router();

export default (app: Application): void => {
  app.use(userRoutes(router));
  app.use(mainRoutes(router));
};
