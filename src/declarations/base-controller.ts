import { Request, Response } from 'express';

export default class BaseController {
  async get(req: Request, res: Response): Promise<any> {}
  async getById(req: Request, res: Response): Promise<any> {}
  async create(req: Request, res: Response): Promise<any> {}
  async update(req: Request, res: Response): Promise<any> {}
  async delete(req: Request, res: Response): Promise<any> {}
}
