import { NextFunction, Request, Response } from 'express';
import { User } from '../../database/models/user.model';
import { decodeAccessToken } from './decode-access-token';

interface IUserRequest extends Request {
  user: User;
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> | undefined => {
  const assessToken = req.header('Authorization')?.split(' ')[1];

  if (!assessToken) {
    return res.status(401).json({ message: 'Authentication Error' });
  }

  try {
    const decoded = decodeAccessToken(assessToken);

    if (typeof decoded === 'object') {
      req.user = decoded.user;
    }

    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ message: 'Authentication Error' });
  }
};
