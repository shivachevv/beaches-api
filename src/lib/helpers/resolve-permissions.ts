import PermissionStrings from '../../declarations/enums/permissions';
import roles from '../../declarations/enums/roles';
import { rolesPermissionsMap } from '../../declarations/enums/roles-permissions-map';

const { ADMIN, BEACH_ADMIN, USER } = roles;
const {
  CAN_VIEW_USER,
  CAN_UPDATE_USER,
  CAN_DELETE_USER,

  CAN_VIEW_BEACH,
  CAN_CREATE_BEACH,
  CAN_UPDATE_BEACH,
  CAN_DELETE_BEACH,

  CAN_VIEW_ROLE,
  CAN_CREATE_ROLE,
  CAN_UPDATE_ROLE,
  CAN_DELETE_ROLE,

  CAN_VIEW_FLAG,
  CAN_CREATE_FLAG,
  CAN_UPDATE_FLAG,
  CAN_DELETE_FLAG,

  CAN_VIEW_USER_BEACH,
  CAN_CREATE_USER_BEACH,
  CAN_UPDATE_USER_BEACH,
  CAN_DELETE_USER_BEACH,
} = PermissionStrings;

export type PermissionType =
  | typeof CAN_VIEW_USER
  | typeof CAN_UPDATE_USER
  | typeof CAN_DELETE_USER
  | typeof CAN_VIEW_BEACH
  | typeof CAN_CREATE_BEACH
  | typeof CAN_UPDATE_BEACH
  | typeof CAN_DELETE_BEACH
  | typeof CAN_VIEW_ROLE
  | typeof CAN_CREATE_ROLE
  | typeof CAN_UPDATE_ROLE
  | typeof CAN_DELETE_ROLE
  | typeof CAN_VIEW_FLAG
  | typeof CAN_CREATE_FLAG
  | typeof CAN_UPDATE_FLAG
  | typeof CAN_DELETE_FLAG
  | typeof CAN_VIEW_USER_BEACH
  | typeof CAN_CREATE_USER_BEACH
  | typeof CAN_UPDATE_USER_BEACH
  | typeof CAN_DELETE_USER_BEACH;

type RolesType = typeof ADMIN | typeof BEACH_ADMIN | typeof USER;

const resolvePermission = (
  permissionString: PermissionType,
  role: RolesType
) => {
  return rolesPermissionsMap[permissionString].includes(role);
};

export default resolvePermission;
