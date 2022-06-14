import { Router } from 'express';
import FlagController from '../modules/flag/flag.controller';

export default (router: Router) => {
  router.get('/flags/:flagId', FlagController.getById);
  router.get('/flags', FlagController.get);
  router.post('/flags', FlagController.create);
  router.patch('/flags/:flagId', FlagController.update);
  router.delete('/flags/:flagId', FlagController.delete);

  return router;
};
