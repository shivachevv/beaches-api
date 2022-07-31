import { Router } from 'express';
import UserController from '../modules/user/user.controller';
import { validatePayload } from '../lib/helpers/validation';
import userValidation from '../modules/user/user.validation';
import { authenticate } from '../lib/helpers/authenticate';

export default (router: Router) => {
  router.get('/users/:userId', authenticate, UserController.getById);
  router.get('/users', authenticate, UserController.get);
  router.post(
    '/users',
    authenticate,
    validatePayload(userValidation),
    UserController.create
  );
  router.patch(
    '/users/:userId',
    authenticate,
    validatePayload(userValidation),
    UserController.update
  );
  router.delete('/users/:userId', authenticate, UserController.delete);

  return router;
};
