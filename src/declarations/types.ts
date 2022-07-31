import { NextFunction, Request, Response } from 'express';

export type RouteController = (
  req: Request,
  res: Response,
  next: NextFunction
) => Record<string, any>;

export interface RouteParams {
  req: Request;
  res: Response;
  next: NextFunction;
}

export type CreateUserPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  deposit: number;
  roleId: string;
};
