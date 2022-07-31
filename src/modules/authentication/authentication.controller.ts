import { Request, Response } from 'express';
import AuthService from './authentication.service';
import {
  BaseController,
  BaseControllerInterface,
} from '../../declarations/base-controller';

class AuthController extends BaseController implements BaseControllerInterface {
  public async login(req: Request, res: Response) {
    try {
      const result = await AuthService.login(req.body);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }

  public async refreshSession(req: Request, res: Response) {
    try {
      const result = await AuthService.refreshSession(req.body);
      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
}

export default new AuthController();
