import { Request, Response } from 'express';
import {
  BaseController,
  BaseControllerInterface,
} from '../../declarations/base-controller';
import UserBeach from './user-beach.service';

class UserBeachController
  extends BaseController
  implements BaseControllerInterface
{
  public async get(req: Request, res: Response) {
    try {
      const result = await UserBeach.get();
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
  public async getById(req: Request, res: Response) {
    try {
      const result = await UserBeach.getById(req.params.userBeachId);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const result = await UserBeach.create(req.body);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const result = await UserBeach.update(req.params.userBeachId, req.body);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const result = await UserBeach.delete(req.params.userBeachId);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
}

export default new UserBeachController();
