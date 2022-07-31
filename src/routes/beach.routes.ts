import { Router } from 'express';
import BeachController from '../modules/beach/beach.controller';
import { validatePayload } from '../lib/helpers/validation';
import beachValidation from '../modules/beach/beach.validation';
import { authenticate } from '../lib/helpers/authenticate';

export default (router: Router) => {
  router.get('/beaches/:beachId', authenticate, BeachController.getById);
  router.get('/beaches', authenticate, BeachController.get);
  router.post(
    '/beaches',
    authenticate,
    validatePayload(beachValidation),
    BeachController.create
  );
  router.patch(
    '/beaches/:beachId',
    authenticate,
    validatePayload(beachValidation),
    BeachController.update
  );
  router.delete('/beaches/:beachId', authenticate, BeachController.delete);

  return router;
};
