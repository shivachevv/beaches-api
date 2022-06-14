import { Request, Response } from 'express';
import {
  BaseController,
  BaseControllerInterface,
} from '../../declarations/base-controller';
import Flag from './flag.service';

class FlagController extends BaseController implements BaseControllerInterface {
  public async get(req: Request, res: Response) {
    try {
      const result = await Flag.get();
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
  public async getById(req: Request, res: Response) {
    try {
      const result = await Flag.getById(req.params.flagId);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const result = await Flag.create(req.body);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const result = await Flag.update(req.params.flagId, req.body);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const result = await Flag.delete(req.params.flagId);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
}

export default new FlagController();
