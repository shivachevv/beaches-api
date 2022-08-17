import { Router } from 'express';
import AuthController from '../modules/authentication/authentication.controller';
import { validatePayload } from '../middleware/validation';
import {
  loginValidation,
  refreshValidation,
} from '../modules/authentication/authentication.validation';

export default (router: Router) => {
  router.post('/login', validatePayload(loginValidation), AuthController.login);
  router.post(
    '/refresh',
    validatePayload(refreshValidation),
    AuthController.refreshSession
  );

  return router;
};
