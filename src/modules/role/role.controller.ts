import { Request, Response } from 'express';
import {
  BaseController,
  BaseControllerInterface,
} from '../../declarations/base-controller';
import Role from './role.service';

class RoleController extends BaseController implements BaseControllerInterface {
  public async get(req: Request, res: Response) {
    try {
      const result = await Role.get(req.query);
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
