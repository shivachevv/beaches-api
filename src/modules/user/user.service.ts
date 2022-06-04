import { Op } from 'sequelize';
import { User } from '../../database/models/user.model';

type CreateUserPayload = {
  email: string;
  firstName: string;
  lastName: string;
  deposit: number;
  roleId: string;
};

interface UserServiceInterface {
  get(): Promise<User[]>;
  getById(id: string): Promise<User>;
  create(payload: CreateUserPayload): Promise<User>;
  update(id: string, payload: Partial<CreateUserPayload>): Promise<User>;
  delete(id: string): Promise<User | null>;
}

class UserService implements UserServiceInterface {
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
