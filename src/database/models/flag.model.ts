import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import TableNames from '../../declarations/enums/table.names';
import { v4 as uuidv4 } from 'uuid';

interface FlagInterface {
  id: string;
  flag: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  associate?(models: Record<string, any>): void;
}

// export interface IngredientInput
//   extends Optional<IngredientAttributes, 'id' | 'slug'> {}

// export interface IngredientOuput extends Required<IngredientAttributes> {}

export class Flag extends Model<FlagInterface> implements FlagInterface {
  public id!: string;
  public flag!: string;
  public createdAt!: string;
  public updatedAt!: string;
  public deletedAt!: string;
  static associate: (models: any) => {};
}

export const FlagInit = (sequelize: Sequelize) => {
  Flag.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      flag: {
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
      modelName: TableNames.FLAG,
      paranoid: true,
    }
  );

  Flag.associate = (models: Record<string, any>): any => {
    Flag.beforeCreate((Flag, _) => {
      Flag.id = uuidv4();
    });

    Flag.belongsTo(models.Beach(sequelize), {
      foreignKey: 'flagId',
    });
  };

  return Flag;
};
