import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import TableNames from '../../declarations/enums/table.names';
import { v4 as uuidv4 } from 'uuid';
// import { Beach } from '../models';

interface FlagInterface {
  id?: string;
  flag: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  associate?(models: Record<string, any>): void;
}

export class Flag extends Model<FlagInterface> implements FlagInterface {
  declare id?: string;
  declare flag: string;
  declare createdAt?: string;
  declare updatedAt?: string;
  declare deletedAt?: string;
  static associate: (models: any) => {};
}

export const FlagInit = (sequelize: Sequelize) => {
  Flag.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      flag: {
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
      modelName: TableNames.FLAG,
      paranoid: true,
      freezeTableName: true,
    }
  );

  Flag.associate = (models: Record<string, any>): any => {
    Flag.beforeCreate((Flag, _) => {
      Flag.id = uuidv4();
    });

    // Flag.hasMany(Beach, {
    //   foreignKey: 'flagId',
    // });
  };

  return Flag;
};
