import { Model } from 'sequelize';

type Models = 'User' | 'Beach' | 'Flag' | 'Role' | 'UserBeach';

export default class Factory {
  private models: Record<string, any>;

  constructor(models: Record<string, any>) {
    this.models = models;
  }
  async create(model: Models, payload: Record<string, any>): Promise<Model> {
    return await this.models[model].create(payload);
  }
}
