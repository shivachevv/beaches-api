import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import TableNames from '../../declarations/enums/table.names';

interface RoleInterface {
  id: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

// export interface IngredientInput
//   extends Optional<IngredientAttributes, 'id' | 'slug'> {}

// export interface IngredientOuput extends Required<IngredientAttributes> {}

class Role extends Model<RoleInterface> implements RoleInterface {
  public id!: string;
  public role!: string;
  public createdAt!: string;
  public updatedAt!: string;
  public deletedAt!: string;
}

export default function initializeUser(sequelize: Sequelize) {
  Role.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING(100),
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true,
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
      modelName: TableNames.ROLE,
      paranoid: true,
    }
  );

  return Role;
}
