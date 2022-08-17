import { Router } from 'express';
import BeachController from '../modules/beach/beach.controller';
import { validatePayload } from '../middleware/validation';
import beachValidation from '../modules/beach/beach.validation';
import { authenticate } from '../middleware/authenticate';
import authorize from '../middleware/authorization';

export default (router: Router) => {
  router.get(
    '/beaches/:beachId',
    authenticate,
    authorize,
    BeachController.getById
  );
  router.get('/beaches', authenticate, authorize, BeachController.get);
  router.post(
    '/beaches',
    authenticate,
    authorize,
    validatePayload(beachValidation),
    BeachController.create
  );
  router.patch(
    '/beaches/:beachId',
    authenticate,
    authorize,
    validatePayload(beachValidation),
    BeachController.update
  );
  router.delete(
    '/beaches/:beachId',
    authenticate,
    authorize,
    BeachController.delete
  );

  return router;
};
