import { Router } from 'express';
import UserController from '../modules/user/user.controller';
import { validatePayload } from '../lib/helpers/validation';
import userValidation from '../modules/user/user.validation';

export default (router: Router) => {
  router.get('/users/:userId', UserController.getById);
  router.get('/users', UserController.get);
  router.post('/users', validatePayload(userValidation), UserController.create);
  router.patch(
    '/users/:userId',
    validatePayload(userValidation),
    UserController.update
  );
  router.delete('/users/:userId', UserController.delete);

  return router;
};
