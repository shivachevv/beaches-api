import { Request, Response } from 'express';
import UserService from './user.service';
import { User } from '../../database/models/user.model';

class BaseController {
  async get(req: Request, res: Response): Promise<any> {}
  async getById(req: Request, res: Response): Promise<any> {}
  async create(req: Request, res: Response): Promise<any> {}
  async update(req: Request, res: Response): Promise<any> {}
  async delete(req: Request, res: Response): Promise<any> {}
}

interface UserControllerInterface {
  get(req: Request, res: Response): Promise<Response>;
  getById(req: Request, res: Response): Promise<Response>;
  create(req: Request, res: Response): Promise<Response>;
  update(req: Request, res: Response): Promise<Response>;
  delete(req: Request, res: Response): Promise<Response>;
}

class UserController extends BaseController implements UserControllerInterface {
  public async get(req: Request, res: Response) {
    try {
      const result = await UserService.get();
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
