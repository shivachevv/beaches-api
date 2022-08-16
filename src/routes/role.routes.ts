import { Router } from 'express';
import RoleController from '../modules/role/role.controller';
import { validatePayload } from '../lib/helpers/validation';
import roleValidation from '../modules/role/role.validation';
import { authenticate } from '../lib/helpers/authenticate';
import authorize from '../middleware/authorization';

export default (router: Router) => {
  router.get('/roles/:roleId', authenticate, authorize, RoleController.getById);
  router.get('/roles', authenticate, RoleController.get);
  router.post(
    '/roles',
    authenticate,
    authorize,
    validatePayload(roleValidation),
    RoleController.create
  );
  router.patch(
    '/roles/:roleId',
    authenticate,
    authorize,
    validatePayload(roleValidation),
    RoleController.update
  );
  router.delete(
    '/roles/:roleId',
    authenticate,
    authorize,
    RoleController.delete
  );

  return router;
};
