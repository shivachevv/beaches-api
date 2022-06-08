import { Request, Response } from 'express';
import BaseController from '../../declarations/base-controller';
import Role from './role.service';

interface UserControllerInterface {
  get(req: Request, res: Response): Promise<Response>;
  getById(req: Request, res: Response): Promise<Response>;
  create(req: Request, res: Response): Promise<Response>;
  update(req: Request, res: Response): Promise<Response>;
  delete(req: Request, res: Response): Promise<Response>;
}

class RoleController extends BaseController implements UserControllerInterface {
  public async get(req: Request, res: Response) {
    try {
      const result = await Role.get();
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
  public async getById(req: Request, res: Response) {
    try {
      const result = await Role.getById(req.params.roleId);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const result = await Role.create(req.body);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const result = await Role.update(req.params.roleId, req.body);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const result = await Role.delete(req.params.roleId);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
}

export default new RoleController();
