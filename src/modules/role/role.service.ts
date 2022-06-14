import { Op } from 'sequelize';
import { BaseServiceInterface } from 'src/declarations/base-service';
import { Role } from '../../database/models/role.model';

type CreateRolePayload = {
  role: string;
};

class RoleService implements BaseServiceInterface<Role, CreateRolePayload> {
  model = Role;

  public async get() {
    return await this.model.findAll();
  }

  public async create(payload: CreateRolePayload) {
    const { role } = payload;
    const existing = await this.model.findOne({
      where: {
        role,
      },
    });

    if (existing) {
      throw new Error('Role with this name already exists!');
    }

    return await this.model.create(payload);
  }

  public async update(id: string, payload: CreateRolePayload) {
    const role = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!role) {
      throw new Error('A role with this ID does not exist!');
    }

    const roleNameCheck = await this.model.findOne({
      where: {
        role: role.role,
        [Op.not]: [{ id }],
      },
    });

    if (roleNameCheck) {
      throw new Error('A role with that email already exists!');
    }

    return await role.update(payload);
  }

  public async delete(id: string) {
    const role = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!role) {
      throw new Error('A role with this ID does not exist!');
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
    const role = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!role) {
      throw new Error('A role with this ID does not exist!');
    }

    return role;
  }
}

export default new RoleService();
