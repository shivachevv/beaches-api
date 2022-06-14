import { Request, Response } from 'express';

export class BaseController {
  async get(req: Request, res: Response): Promise<any> {}
  async getById(req: Request, res: Response): Promise<any> {}
  async create(req: Request, res: Response): Promise<any> {}
  async update(req: Request, res: Response): Promise<any> {}
  async delete(req: Request, res: Response): Promise<any> {}
}

export interface BaseControllerInterface {
  get(req: Request, res: Response): Promise<Response>;
  getById(req: Request, res: Response): Promise<Response>;
  create(req: Request, res: Response): Promise<Response>;
  update(req: Request, res: Response): Promise<Response>;
  delete(req: Request, res: Response): Promise<Response>;
}
