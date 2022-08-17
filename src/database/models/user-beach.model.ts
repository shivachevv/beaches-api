import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import TableNames from '../../declarations/enums/table.names';
import { v4 as uuidv4 } from 'uuid';
// import { User, Beach } from '../models';

interface UserBeachInterface {
  id?: string;
  userId: string;
  beachId: string;
  sets: number;
  seatPrice: number;
  umbrellaPrice: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  associate?(models: Record<string, any>): void;
}

export class UserBeach
  extends Model<UserBeachInterface>
  implements UserBeachInterface
{
  declare id?: string;
  declare userId: string;
  declare beachId: string;
  declare sets: number;
  declare seatPrice: number;
  declare umbrellaPrice: number;
  declare createdAt?: string;
  declare updatedAt?: string;
  declare deletedAt?: string;
  static associate: (models: any) => {};
}

export const UserBeachInit = (sequelize: Sequelize) => {
  UserBeach.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: '',
      },
      beachId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      sets: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      seatPrice: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      umbrellaPrice: {
        allowNull: false,
        type: DataTypes.FLOAT,
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
      modelName: TableNames.USER_BEACH,
      paranoid: true,
      freezeTableName: true,
    }
  );
  UserBeach.associate = (models: Record<string, any>): any => {
    UserBeach.beforeCreate((UserBeach, _) => {
      UserBeach.id = uuidv4();
    });

    // UserBeach.belongsTo(User, { foreignKey: 'userId' });
    // UserBeach.belongsTo(Beach, { foreignKey: 'beachId' });
  };

  return UserBeach;
};
