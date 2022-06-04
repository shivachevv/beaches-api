import { Router } from 'express';
import UserController from '../modules/user/user.controller';

export default (router: Router) => {
  router.get('/users/:userId', UserController.getById);
  router.get('/users', UserController.get);
  router.post('/users', UserController.create);
  router.patch('/users/:userId', UserController.update);
  router.delete('/users/:userId', UserController.delete);

  return router;
};
