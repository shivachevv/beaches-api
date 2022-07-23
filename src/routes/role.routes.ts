import { Router } from 'express';
import RoleController from '../modules/role/role.controller';
import { validatePayload } from '../lib/helpers/validation';
import roleValidation from '../modules/role/role.validation';

export default (router: Router) => {
  router.get('/roles/:roleId', RoleController.getById);
  router.get('/roles', RoleController.get);
  router.post('/roles', validatePayload(roleValidation), RoleController.create);
  router.patch(
    '/roles/:roleId',
    validatePayload(roleValidation),
    RoleController.update
  );
  router.delete('/roles/:roleId', RoleController.delete);

  return router;
};
