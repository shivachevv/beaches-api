import { Router } from 'express';
import UserBeachController from '../modules/user-beach/user-beach.controller';
import { validatePayload } from '../lib/helpers/validation';
import userBeachValidation from '../modules/user-beach/user-beach.validation';
import { authenticate } from '../lib/helpers/authenticate';
import authorize from '../middleware/authorization';

export default (router: Router) => {
  router.get(
    '/user-beaches/:userBeachId',
    authenticate,
    authorize,
    UserBeachController.getById
  );
  router.get('/user-beaches', authenticate, authorize, UserBeachController.get);
  router.post(
    '/user-beaches',
    authenticate,
    authorize,
    validatePayload(userBeachValidation),
    UserBeachController.create
  );
  router.patch(
    '/user-beaches/:userBeachId',
    authenticate,
    authorize,
    validatePayload(userBeachValidation),
    UserBeachController.update
  );
  router.delete(
    '/user-beaches/:userBeachId',
    authenticate,
    authorize,
    UserBeachController.delete
  );

  return router;
};
