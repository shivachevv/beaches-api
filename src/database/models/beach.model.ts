import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import TableNames from '../../declarations/enums/table.names';
import { v4 as uuidv4 } from 'uuid';
// import { User, Flag, UserBeach } from '../models';

interface BeachInterface {
  id?: string;
  name: string;
  description?: string;
  beachAdminId: string;
  availableSets: number;
  capacitySets: number;
  flagId: string;
  seatPrice: number;
  umbrellaPrice: number;
  coordinateLat: number;
  coordinateLng: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  associate?(models: Record<string, any>): void;
}

export class Beach extends Model<BeachInterface> implements BeachInterface {
  declare id?: string;
  declare name: string;
  declare description?: string;
  declare beachAdminId: string;
  declare availableSets: number;
  declare capacitySets: number;
  declare flagId: string;
  declare seatPrice: number;
  declare umbrellaPrice: number;
  declare coordinateLat: number;
  declare coordinateLng: number;
  declare createdAt?: string;
  declare updatedAt?: string;
  declare deletedAt?: string;
  static associate: (models: any) => {};
}

export const BeachInit = (sequelize: Sequelize) => {
  Beach.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true,
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING(100),
        defaultValue: '',
      },
      beachAdminId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      availableSets: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      capacitySets: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      flagId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      seatPrice: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      umbrellaPrice: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      coordinateLat: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      coordinateLng: {
        allowNull: false,
        type: DataTypes.FLOAT,
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
      modelName: TableNames.BEACH,
      paranoid: true,
      freezeTableName: true,
    }
  );

  Beach.associate = (models: Record<string, any>): any => {
    Beach.beforeCreate((Beach, _) => {
      Beach.id = uuidv4();
    });

    // Beach.belongsTo(Flag, { foreignKey: 'flagId' });
    // Beach.hasOne(User, { foreignKey: 'beachAdminId' });
    // Beach.belongsTo(UserBeach, {
    //   foreignKey: 'beachId',
    // });
  };

  return Beach;
};
