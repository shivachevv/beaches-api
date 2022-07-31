import Joi from 'joi';
import Methods from '../../declarations/enums/methods';
import { ValidationData } from '../../lib/helpers/validation';

export const loginValidation: ValidationData = {
  schemaRulesMap: {
    [Methods.POST]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  },
  schemaOptions: {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  },
};

export const refreshValidation: ValidationData = {
  schemaRulesMap: {
    [Methods.POST]: {
      email: Joi.string().email().required(),
      refreshToken: Joi.string().required(),
    },
  },
  schemaOptions: {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  },
};
