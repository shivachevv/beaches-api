import { Router } from 'express';
import FlagController from '../modules/flag/flag.controller';
import { validatePayload } from '../lib/helpers/validation';
import flagValidation from '../modules/flag/flag.validation';

export default (router: Router) => {
  router.get('/flags/:flagId', FlagController.getById);
  router.get('/flags', FlagController.get);
  router.post('/flags', validatePayload(flagValidation), FlagController.create);
  router.patch(
    '/flags/:flagId',
    validatePayload(flagValidation),
    FlagController.update
  );
  router.delete('/flags/:flagId', FlagController.delete);

  return router;
};
