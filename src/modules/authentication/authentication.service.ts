import { User } from '../../database/models/user.model';
import {
  AuthServiceInterface,
  LoginPayload,
  RefreshSessionPayload,
} from '../../declarations/auth-service';
import bcryptjs from 'bcryptjs';
import { createAccessToken } from '../../lib/helpers/create-access-token';
import { createRefreshToken } from '../../lib/helpers/create-refresh-token';
import { verifyRefresh } from '../../lib/helpers/verify-refresh-token';
require('dotenv').config();

class AuthService implements AuthServiceInterface {
  public async login(payload: LoginPayload) {
    const { email, password } = payload;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      throw new Error('User with this email does not exist');
    }

    const passwordMatch = await bcryptjs.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Incorrect password!');
    }

    const accessToken = createAccessToken(user);

    const refreshToken = createRefreshToken(user);

    return { accessToken, refreshToken, user };
  }

  public async refreshSession(payload: RefreshSessionPayload) {
    const { email, refreshToken } = payload;

    const isValid = verifyRefresh(email, refreshToken);

    if (!isValid) {
      throw new Error('Invalid refresh token! 1');
    }

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error('Invalid refresh token! 2');
    }

    const accessToken = createAccessToken(user);

    return { accessToken };
  }
}

export default new AuthService();
