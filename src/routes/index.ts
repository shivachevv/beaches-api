import { Application } from 'express';
import mainRoutes from './main.routes';

export default (app: Application): void => {
  app.use(mainRoutes);
};
