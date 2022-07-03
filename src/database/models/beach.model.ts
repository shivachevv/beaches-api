import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import TableNames from '../../declarations/enums/table.names';
import { v4 as uuidv4 } from 'uuid';

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

// export interface IngredientInput
//   extends Optional<IngredientAttributes, 'id' | 'slug'> {}

// export interface IngredientOuput extends Required<IngredientAttributes> {}

export class Beach extends Model<BeachInterface> implements BeachInterface {
  public id?: string;
  public name!: string;
  public description?: string;
  public beachAdminId!: string;
  public availableSets!: number;
  public capacitySets!: number;
  public flagId!: string;
  public seatPrice!: number;
  public umbrellaPrice!: number;
  public coordinateLat!: number;
  public coordinateLng!: number;
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: string;
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

    Beach.belongsTo(models.Flag(sequelize), { foreignKey: 'flagId' });
    Beach.hasOne(models.User(sequelize), { foreignKey: 'beachAdminId' });
    Beach.hasMany(models.UserBeach(sequelize), {
      foreignKey: 'beachId',
    });
  };

  return Beach;
};
