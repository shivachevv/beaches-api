import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import TableNames from '../../declarations/enums/table.names';
import { v4 as uuidv4 } from 'uuid';

export interface RoleInterface {
  id: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  associate?(models: Record<string, any>): void;
}

// export interface IngredientInput
//   extends Optional<IngredientAttributes, 'id' | 'slug'> {}

// export interface IngredientOuput extends Required<IngredientAttributes> {}

export class Role extends Model<RoleInterface> implements RoleInterface {
  public id!: string;
  public role!: string;
  public createdAt!: string;
  public updatedAt!: string;
  public deletedAt!: string;
  static associate: (models: any) => {};
}

export const RoleInit = (sequelize: Sequelize) => {
  Role.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
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

  Role.associate = (models: any): any => {
    Role.beforeCreate((Role, _) => {
      Role.id = uuidv4();
    });

    Role.belongsTo(models.User(sequelize), {
      foreignKey: 'userId',
    });
  };

  return Role;
};
