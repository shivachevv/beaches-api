import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import TableNames from '../../declarations/enums/table.names';
import { v4 as uuidv4 } from 'uuid';
import { models } from './index';

export interface UserInterface {
  id?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  deposit: number;
  roleId: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;

  associate?(models: Record<string, any>): void;
}

// export interface IngredientInput
//   extends Optional<IngredientAttributes, 'id' | 'slug'> {}

// export interface IngredientOuput extends Required<IngredientAttributes> {}

export class User extends Model<UserInterface> implements UserInterface {
  public id?: string;
  public email!: string;
  public password!: string;
  public firstName!: string;
  public lastName!: string;
  public deposit!: number;
  public roleId!: string;
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: string;
  static associate: (models: any) => {};
}

export const UserInit = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(100),
        defaultValue: '',
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
      modelName: TableNames.USER,
      paranoid: true,
      freezeTableName: true,
    }
  );

  User.beforeCreate((User, _) => {
    User.id = uuidv4();
  });

  User.associate = (models: any): any => {
    User.belongsTo(models.Role(sequelize), { foreignKey: 'roleId' });
    User.belongsTo(models.Beach(sequelize), {
      foreignKey: 'beachAdminId',
    });
    User.hasMany(models.UserBeach(sequelize), { foreignKey: 'userId' });
  };

  return User;
};
