import { Router } from 'express';
import FlagController from '../modules/flag/flag.controller';
import { validatePayload } from '../lib/helpers/validation';
import flagValidation from '../modules/flag/flag.validation';
import { authenticate } from '../lib/helpers/authenticate';
import authorize from '../middleware/authorization';

export default (router: Router) => {
  router.get('/flags/:flagId', authenticate, authorize, FlagController.getById);
  router.get('/flags', authenticate, authorize, FlagController.get);
  router.post(
    '/flags',
    authenticate,
    authorize,
    validatePayload(flagValidation),
    FlagController.create
  );
  router.patch(
    '/flags/:flagId',
    authenticate,
    authorize,
    validatePayload(flagValidation),
    FlagController.update
  );
  router.delete(
    '/flags/:flagId',
    authenticate,
    authorize,
    FlagController.delete
  );

  return router;
};
