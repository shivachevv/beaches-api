import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import TableNames from '../../declarations/enums/table.names';
import { v4 as uuidv4 } from 'uuid';
import { models } from './index';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  deposit: number;
  roleId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;

  associate?(models: Record<string, any>): void;
}

// export interface IngredientInput
//   extends Optional<IngredientAttributes, 'id' | 'slug'> {}

// export interface IngredientOuput extends Required<IngredientAttributes> {}

export class User extends Model<UserInterface> implements UserInterface {
  public id!: string;
  public email!: string;
  public firstName!: string;
  public lastName!: string;
  public deposit!: number;
  public roleId!: string;
  public createdAt!: string;
  public updatedAt!: string;
  public deletedAt!: string;
  static associate: (models: any) => {};
}

export const UserInit = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      deposit: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      roleId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
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
      modelName: TableNames.USER,
      paranoid: true,
      freezeTableName: true,
    }
  );

  User.beforeCreate((User, _) => {
    User.id = uuidv4();
  });

  User.associate = (models: any): any => {
    User.hasOne(models.Role(sequelize), { foreignKey: 'roleId' });
    User.belongsTo(models.Beach(sequelize), {
      foreignKey: 'beachAdminId',
    });
    User.belongsTo(models.UserBeach(sequelize), {
      foreignKey: 'userId',
    });
  };

  return User;
};
