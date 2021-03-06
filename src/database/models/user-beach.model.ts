import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import TableNames from '../../declarations/enums/table.names';
import { v4 as uuidv4 } from 'uuid';

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

// export interface IngredientInput
//   extends Optional<IngredientAttributes, 'id' | 'slug'> {}

// export interface IngredientOuput extends Required<IngredientAttributes> {}

export class UserBeach
  extends Model<UserBeachInterface>
  implements UserBeachInterface
{
  public id?: string;
  public userId!: string;
  public beachId!: string;
  public sets!: number;
  public seatPrice!: number;
  public umbrellaPrice!: number;
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: string;
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

    UserBeach.belongsTo(models.User(sequelize), { foreignKey: 'userId' });
    UserBeach.belongsTo(models.Beach(sequelize), { foreignKey: 'beachId' });
  };

  return UserBeach;
};
