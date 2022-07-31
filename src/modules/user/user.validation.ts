import Joi from 'joi';
import Methods from '../../declarations/enums/methods';
import { ValidationData } from '../../lib/helpers/validation';

const userValidation: ValidationData = {
  schemaRulesMap: {
    [Methods.POST]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      deposit: Joi.number().required(),
      roleId: Joi.string().required(),
    },
    [Methods.PATCH]: {
      email: Joi.string().email().optional(),
      firstName: Joi.string().optional(),
      lastName: Joi.string().optional(),
      deposit: Joi.number().optional(),
      roleId: Joi.string().optional(),
    },
  },
  schemaOptions: {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  },
};

export default userValidation;
