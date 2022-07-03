import { Op } from 'sequelize';
import { BaseServiceInterface } from 'src/declarations/base-service';
import { Beach } from '../../database/models/beach.model';

type CreateBeachPayload = {
  name: string;
  description?: string;
  beachAdminId: string;
  availableSets: number;
  capacitySets: number;
  flagId: string;
  seatPrice: number;
  umbrellaPrice: number;
  coordinateLat: number;
  coordinateLng: number;
};

class BeachService implements BaseServiceInterface<Beach, CreateBeachPayload> {
  model = Beach;

  public async get() {
    return await this.model.findAll();
  }

  public async create(payload: CreateBeachPayload) {
    const { name } = payload;
    const existing = await this.model.findOne({
      where: {
        name,
      },
    });

    if (existing) {
      throw new Error('Beach with this name already exists!');
    }

    try {
      return await this.model.create(payload);
    } catch (error: any) {
      throw new Error(error?.message);
    }
  }

  public async update(id: string, payload: CreateBeachPayload) {
    const beach = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!beach) {
      throw new Error('A beach with this ID does not exist!');
    }

    const beachNameCheck = await this.model.findOne({
      where: {
        name: payload?.name,
        [Op.not]: [{ id }],
      },
      paranoid: false,
    });

    if (beachNameCheck) {
      throw new Error('A beach with that name already exists!');
    }

    return await beach.update(payload);
  }

  public async delete(id: string) {
    const beach = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!beach) {
      throw new Error('A beach with this ID does not exist!');
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
    const beach = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!beach) {
      throw new Error('A beach with this ID does not exist!');
    }

    return beach;
  }
}

export default new BeachService();
