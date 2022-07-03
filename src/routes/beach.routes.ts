import { Router } from 'express';
import BeachController from '../modules/beach/beach.controller';

export default (router: Router) => {
  router.get('/beaches/:beachId', BeachController.getById);
  router.get('/beaches', BeachController.get);
  router.post('/beaches', BeachController.create);
  router.patch('/beaches/:beachId', BeachController.update);
  router.delete('/beaches/:beachId', BeachController.delete);

  return router;
};
