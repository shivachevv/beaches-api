import { Router } from 'express';
import UserBeachController from '../modules/user-beach/user-beach.controller';
import { validatePayload } from '../lib/helpers/validation';
import userBeachValidation from '../modules/user-beach/user-beach.validation';

export default (router: Router) => {
  router.get('/user-beaches/:userBeachId', UserBeachController.getById);
  router.get('/user-beaches', UserBeachController.get);
  router.post(
    '/user-beaches',
    validatePayload(userBeachValidation),
    UserBeachController.create
  );
  router.patch(
    '/user-beaches/:userBeachId',
    validatePayload(userBeachValidation),
    UserBeachController.update
  );
  router.delete('/user-beaches/:userBeachId', UserBeachController.delete);

  return router;
};
