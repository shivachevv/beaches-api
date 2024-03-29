import { Op } from 'sequelize';
import { BaseServiceInterface } from 'src/declarations/base-service';
import { Flag } from '../../database/db.connection';
import {
  getFilters,
  getOrder,
  getPagination,
} from '../../lib/helpers/query-helpers';

type CreateFlagPayload = {
  flag: string;
};

class FlagService
  implements BaseServiceInterface<typeof Flag, CreateFlagPayload>
{
  model = Flag;

  public async get(query: Record<string, any> | undefined) {
    return await this.model.findAll({
      ...getPagination(query),
      where: {
        ...getFilters(query),
      },
      order: [...getOrder(query)],
    });
  }

  public async create(payload: CreateFlagPayload) {
    const { flag } = payload;
    const existing = await this.model.findOne({
      where: {
        flag,
      },
    });

    if (existing) {
      throw new Error('Flag with this name already exists!');
    }

    return await this.model.create(payload);
  }

  public async update(id: string, payload: CreateFlagPayload) {
    const flag = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!flag) {
      throw new Error('A flag with this ID does not exist!');
    }

    if (!payload.flag) {
      return await flag.update(payload);
    }

    const roleNameCheck = await this.model.findOne({
      where: {
        flag: payload.flag,
        [Op.not]: [{ id }],
      },
    });

    if (roleNameCheck) {
      throw new Error('A flag with that email already exists!');
    }

    return await flag.update(payload);
  }

  public async delete(id: string) {
    const flag = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!flag) {
      throw new Error('A flag with this ID does not exist!');
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
    const flag = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!flag) {
      throw new Error('A flag with this ID does not exist!');
    }

    return flag;
  }
}

export default new FlagService();
