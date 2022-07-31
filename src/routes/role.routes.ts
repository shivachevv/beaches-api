import { Router } from 'express';
import RoleController from '../modules/role/role.controller';
import { validatePayload } from '../lib/helpers/validation';
import roleValidation from '../modules/role/role.validation';
import { authenticate } from '../lib/helpers/authenticate';

export default (router: Router) => {
  router.get(
    '/roles/:roleId',
    authenticate,
    authenticate,
    RoleController.getById
  );
  router.get('/roles', authenticate, RoleController.get);
  router.post(
    '/roles',
    authenticate,
    validatePayload(roleValidation),
    RoleController.create
  );
  router.patch(
    '/roles/:roleId',
    authenticate,
    validatePayload(roleValidation),
    RoleController.update
  );
  router.delete('/roles/:roleId', authenticate, RoleController.delete);

  return router;
};
