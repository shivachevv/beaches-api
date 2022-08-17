import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import TableNames from '../../declarations/enums/table.names';
import { v4 as uuidv4 } from 'uuid';
// import { User } from '../models';

export interface RoleInterface {
  id?: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  associate?(models: Record<string, any>): void;
}

export class Role extends Model<RoleInterface> implements RoleInterface {
  declare id?: string;
  declare role: string;
  declare createdAt?: string;
  declare updatedAt?: string;
  declare deletedAt?: string;
  static associate: (models: any) => {};
}

export const RoleInit = (sequelize: Sequelize) => {
  Role.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true,
      },
      createdAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
    },
    {
      sequelize,
      modelName: TableNames.ROLE,
      paranoid: true,
      freezeTableName: true,
    }
  );

  Role.associate = (models: any): any => {
    Role.beforeCreate((Role, _) => {
      Role.id = uuidv4();
    });

    // Role.hasOne(User, {
    //   foreignKey: 'roleId',
    // });
  };

  return Role;
};
