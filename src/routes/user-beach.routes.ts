import { Router } from 'express';
import UserBeachController from '../modules/user-beach/user-beach.controller';

export default (router: Router) => {
  router.get('/user-beaches/:userBeachId', UserBeachController.getById);
  router.get('/user-beaches', UserBeachController.get);
  router.post('/user-beaches', UserBeachController.create);
  router.patch('/user-beaches/:userBeachId', UserBeachController.update);
  router.delete('/user-beaches/:userBeachId', UserBeachController.delete);

  return router;
};
