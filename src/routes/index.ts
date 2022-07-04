import express, { Application } from 'express';
import mainRoutes from './main.routes';
import userRoutes from './user.routes';
import roleRoutes from './role.routes';
import flagRoutes from './flag.routes';
import beachRoutes from './beach.routes';
import userBeachRoutes from './user-beach.routes';

const router = express.Router();

export default (app: Application): void => {
  app.use(userBeachRoutes(router));
  app.use(userRoutes(router));
  app.use(roleRoutes(router));
  app.use(flagRoutes(router));
  app.use(beachRoutes(router));
  app.use(mainRoutes(router));
};
