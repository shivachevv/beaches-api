import express, { Application } from 'express';
import mainRoutes from './main.routes';
import userRoutes from './user.routes';
import roleRoutes from './role.routes';

const router = express.Router();

export default (app: Application): void => {
  app.use(userRoutes(router));
  app.use(roleRoutes(router));
  app.use(mainRoutes(router));
};
