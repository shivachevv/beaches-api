import { Request, Response } from 'express';
import {
  BaseController,
  BaseControllerInterface,
} from '../../declarations/base-controller';
import Beach from './beach.service';

class BeachController
  extends BaseController
  implements BaseControllerInterface
{
  public async get(req: Request, res: Response) {
    try {
      const result = await Beach.get();
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
  public async getById(req: Request, res: Response) {
    try {
      const result = await Beach.getById(req.params.beachId);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const result = await Beach.create(req.body);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const result = await Beach.update(req.params.beachId, req.body);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const result = await Beach.delete(req.params.beachId);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
}

export default new BeachController();
