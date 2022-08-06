import { BaseServiceInterface } from 'src/declarations/base-service';
import { UserBeach } from '../../database/models/user-beach.model';
import {
  getFilters,
  getOrder,
  getPagination,
} from '../../lib/helpers/query-helpers';

type CreateUserBeachPayload = {
  userId: string;
  beachId: string;
  sets: number;
  seatPrice: number;
  umbrellaPrice: number;
};

class UserBeachService
  implements BaseServiceInterface<UserBeach, CreateUserBeachPayload>
{
  model = UserBeach;

  public async get(query: Record<string, any> | undefined) {
    return await this.model.findAll({
      ...getPagination(query),
      where: {
        ...getFilters(query),
      },
      order: [...getOrder(query)],
    });
  }

  public async create(payload: CreateUserBeachPayload) {
    try {
      return await this.model.create(payload);
    } catch (error: any) {
      throw new Error(error?.message);
    }
  }

  public async update(id: string, payload: CreateUserBeachPayload) {
    const userBeach = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!userBeach) {
      throw new Error('A reservation with this ID does not exist!');
    }

    return await userBeach.update(payload);
  }

  public async delete(id: string) {
    const userBeach = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!userBeach) {
      throw new Error('A reservation with this ID does not exist!');
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
    const userBeach = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!userBeach) {
      throw new Error('A reservation with this ID does not exist!');
    }

    return userBeach;
  }
}

export default new UserBeachService();
