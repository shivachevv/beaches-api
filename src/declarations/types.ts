import { NextFunction, Request, Response } from 'express';
import Methods from './enums/methods';

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
