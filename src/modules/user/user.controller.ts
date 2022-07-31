import { Request, Response } from 'express';
import UserService from './user.service';
import {
  BaseController,
  BaseControllerInterface,
} from '../../declarations/base-controller';

class UserController extends BaseController implements BaseControllerInterface {
  public async get(req: Request, res: Response) {
    try {
      const result = await UserService.get(req.query);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
  public async getById(req: Request, res: Response) {
    try {
      const result = await UserService.getById(req.params.userId);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const result = await UserService.create(req.body);
      return res.status(200).json(result);
    } catch (error: any) {
      console.log(error);

      return res.status(400).json(error.message);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const result = await UserService.update(req.params.userId, req.body);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const result = await UserService.delete(req.params.userId);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
}

export default new UserController();
