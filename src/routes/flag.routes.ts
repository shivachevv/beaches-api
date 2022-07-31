import { Router } from 'express';
import FlagController from '../modules/flag/flag.controller';
import { validatePayload } from '../lib/helpers/validation';
import flagValidation from '../modules/flag/flag.validation';
import { authenticate } from '../lib/helpers/authenticate';

export default (router: Router) => {
  router.get('/flags/:flagId', authenticate, FlagController.getById);
  router.get('/flags', authenticate, FlagController.get);
  router.post(
    '/flags',
    authenticate,
    validatePayload(flagValidation),
    FlagController.create
  );
  router.patch(
    '/flags/:flagId',
    authenticate,
    validatePayload(flagValidation),
    FlagController.update
  );
  router.delete('/flags/:flagId', authenticate, FlagController.delete);

  return router;
};
