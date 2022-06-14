import { Op } from 'sequelize';
import { BaseServiceInterface } from 'src/declarations/base-service';
import { User } from '../../database/models/user.model';

type CreateUserPayload = {
  email: string;
  firstName: string;
  lastName: string;
  deposit: number;
  roleId: string;
};

class UserService implements BaseServiceInterface<User, CreateUserPayload> {
  model = User;

  public async get() {
    return await this.model.findAll();
  }

  public async create(payload: CreateUserPayload) {
    const { email } = payload;
    const existing = await this.model.findOne({
      where: {
        email,
      },
    });

    if (existing) {
      throw new Error('User with this email already exists!');
    }

    return await this.model.create(payload);
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
