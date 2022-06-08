import { Router } from 'express';
import RoleController from '../modules/role/role.controller';

export default (router: Router) => {
  router.get('/roles/:roleId', RoleController.getById);
  router.get('/roles', RoleController.get);
  router.post('/roles', RoleController.create);
  router.patch('/roles/:roleId', RoleController.update);
  router.delete('/roles/:roleId', RoleController.delete);

  return router;
};
