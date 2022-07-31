import { Op } from 'sequelize';
import { BaseServiceInterface } from '../../declarations/base-service';
import { CreateUserPayload } from '../../declarations/types';
import { User } from '../../database/models/user.model';
import { createHashedPassword } from '../../lib/helpers/create-hashed-password';
import { createAccessToken } from '../../lib/helpers/create-access-token';
import { createRefreshToken } from '../../lib/helpers/create-refresh-token';
require('dotenv').config();
class UserService implements BaseServiceInterface<User, CreateUserPayload> {
  model = User;

  public async get() {
    return await this.model.findAll();
  }

  public async create(payload: CreateUserPayload) {
    const { email, password } = payload;
    const existing = await this.model.findOne({
      where: {
        email,
      },
    });

    if (existing) {
      throw new Error('User with this email already exists!');
    }

    const hashedPassword = await createHashedPassword(password);

    const user = await this.model.create({
      ...payload,
      password: hashedPassword,
    });

    const accessToken = createAccessToken(user);

    const refreshToken = createRefreshToken(user);

    return { accessToken, user, refreshToken };
  }

  public async update(id: string, payload: CreateUserPayload) {
    const user = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error('A user with this ID does not exist!');
    }

    const userEmailCheck = await this.model.findOne({
      where: {
        email: user.email,
        [Op.not]: [{ id }],
      },
    });

    if (userEmailCheck) {
      throw new Error('A user with that email already exists!');
    }

    return await user.update(payload);
  }

  public async delete(id: string) {
    const user = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error('A user with this ID does not exist!');
    }

    await this.model.destroy({
      where: {
        id,
      },
    });

    return await this.model.findOne({
      where: {
        id,
      },
      paranoid: false,
    });
  }

  public async getById(id: string) {
    const user = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error('A user with this ID does not exist!');
    }

    return user;
  }
}

export default new UserService();
