import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import TableNames from '../../declarations/enums/table.names';

interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  deposit: number;
  role: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

// export interface IngredientInput
//   extends Optional<IngredientAttributes, 'id' | 'slug'> {}

// export interface IngredientOuput extends Required<IngredientAttributes> {}

class User extends Model<UserInterface> implements UserInterface {
  public id!: string;
  public email!: string;
  public firstName!: string;
  public lastName!: string;
  public deposit!: number;
  public role!: string;
  public createdAt!: string;
  public updatedAt!: string;
  public deletedAt!: string;
}

export default function initializeUser(sequelize: Sequelize) {
  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING(100),
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
      role: {
        allowNull: false,
        type: DataTypes.STRING(100),
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
    }
  );

  return User;
}
