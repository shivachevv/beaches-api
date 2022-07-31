import { Router } from 'express';
import UserBeachController from '../modules/user-beach/user-beach.controller';
import { validatePayload } from '../lib/helpers/validation';
import userBeachValidation from '../modules/user-beach/user-beach.validation';
import { authenticate } from '../lib/helpers/authenticate';

export default (router: Router) => {
  router.get(
    '/user-beaches/:userBeachId',
    authenticate,
    UserBeachController.getById
  );
  router.get('/user-beaches', authenticate, UserBeachController.get);
  router.post(
    '/user-beaches',
    authenticate,
    validatePayload(userBeachValidation),
    UserBeachController.create
  );
  router.patch(
    '/user-beaches/:userBeachId',
    authenticate,
    validatePayload(userBeachValidation),
    UserBeachController.update
  );
  router.delete(
    '/user-beaches/:userBeachId',
    authenticate,
    UserBeachController.delete
  );

  return router;
};
