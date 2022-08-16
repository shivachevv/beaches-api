import { NextFunction, Request, Response } from 'express';
import resolvePermission, {
  PermissionType,
} from './../lib/helpers/resolve-permissions';

export default (
  req: Request,
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> | void => {
  const { user } = req;

  if (!user) {
    return res.status(402).json({ message: 'Authentication Error' });
  }

  const role = user.Role.role;

  const permissionString = `${req.method.toLowerCase()}-${req.route.path.substring(
    1
  )}`;

  if (!resolvePermission(permissionString as PermissionType, role)) {
    return res
      .status(401)
      .send('User is not authorized to enter this endpoint!');
  }

  return next();
};
