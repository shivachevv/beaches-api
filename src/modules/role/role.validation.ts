import Joi from 'joi';
import Methods from '../../declarations/enums/methods';
import Roles from '../../declarations/enums/roles';
import { ValidationData } from '../../lib/helpers/validation';

const roleValidation: ValidationData = {
  schemaRulesMap: {
    [Methods.POST]: {
      role: Joi.string()
        .valid(Roles.ADMIN, Roles.BEACH_ADMIN, Roles.USER)
        .required(),
    },
    [Methods.PATCH]: {
      role: Joi.string()
        .valid(Roles.ADMIN, Roles.BEACH_ADMIN, Roles.USER)
        .optional(),
    },
  },
  schemaOptions: {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  },
};

export default roleValidation;
