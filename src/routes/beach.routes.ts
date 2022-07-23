import { Router } from 'express';
import BeachController from '../modules/beach/beach.controller';
import { validatePayload } from '../lib/helpers/validation';
import beachValidation from '../modules/beach/beach.validation';

export default (router: Router) => {
  router.get('/beaches/:beachId', BeachController.getById);
  router.get('/beaches', BeachController.get);
  router.post(
    '/beaches',
    validatePayload(beachValidation),
    BeachController.create
  );
  router.patch(
    '/beaches/:beachId',
    validatePayload(beachValidation),
    BeachController.update
  );
  router.delete('/beaches/:beachId', BeachController.delete);

  return router;
};
