import { Router } from 'express';
import UserController from '../modules/user/user.controller';
import { validatePayload } from '../lib/helpers/validation';
import userValidation from '../modules/user/user.validation';
import { authenticate } from '../lib/helpers/authenticate';
import authorize from '../middleware/authorization';

export default (router: Router) => {
  router.get('/users/:userId', authenticate, authorize, UserController.getById);
  router.get('/users', authenticate, authorize, UserController.get);
  router.post('/users', validatePayload(userValidation), UserController.create);
  router.patch(
    '/users/:userId',
    authenticate,
    authorize,
    validatePayload(userValidation),
    UserController.update
  );
  router.delete(
    '/users/:userId',
    authenticate,
    authorize,
    UserController.delete
  );

  return router;
};
