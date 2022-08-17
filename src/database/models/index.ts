import { Role, RoleInit } from './role.model';
import { Beach, BeachInit } from './beach.model';
import { Flag, FlagInit } from './flag.model';
import { UserBeach, UserBeachInit } from './user-beach.model';
import { Sequelize } from 'sequelize/types';
import { User, UserInit } from './user.model';

interface ModelsInit {
  User: (sequelize: Sequelize) => typeof User;
  Role: (sequelize: Sequelize) => typeof Role;
  Beach: (sequelize: Sequelize) => typeof Beach;
  Flag: (sequelize: Sequelize) => typeof Flag;
  UserBeach: (sequelize: Sequelize) => typeof UserBeach;
}

export const models: ModelsInit = {
  User: UserInit,
  Role: RoleInit,
  Beach: BeachInit,
  Flag: FlagInit,
  UserBeach: UserBeachInit,
};

export const getModels = (sequelize: Sequelize) => {
  return {
    Role: RoleInit(sequelize),
    Beach: BeachInit(sequelize),
    Flag: FlagInit(sequelize),
    UserBeach: UserBeachInit(sequelize),
    User: UserInit(sequelize),
  };
};
