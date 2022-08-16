import { RoleInit } from './role.model';
import { BeachInit } from './beach.model';
import { FlagInit } from './flag.model';
import { UserBeachInit } from './user-beach.model';
import { Sequelize } from 'sequelize/types';
import { UserInit } from './user.model';
import { sequelize } from '../db.connection';

// interface ModelsInit {
//   User: (sequelize: Sequelize) => typeof User;
//   Role: (sequelize: Sequelize) => typeof Role;
//   Beach: (sequelize: Sequelize) => typeof Beach;
//   Flag: (sequelize: Sequelize) => typeof Flag;
//   UserBeach: (sequelize: Sequelize) => typeof UserBeach;
// }

// export const models: ModelsInit = {
//   User: UserInit,
//   Role: RoleInit,
//   Beach: BeachInit,
//   Flag: FlagInit,
//   UserBeach: UserBeachInit,
// };
export const User = UserInit(sequelize);
export const Role = RoleInit(sequelize);
export const Beach = BeachInit(sequelize);
export const Flag = FlagInit(sequelize);
export const UserBeach = UserBeachInit(sequelize);
