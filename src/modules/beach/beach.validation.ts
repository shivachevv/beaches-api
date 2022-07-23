import Joi from 'joi';
import Methods from '../../declarations/enums/methods';
import { ValidationData } from '../../lib/helpers/validation';

const beachValidation: ValidationData = {
  schemaRulesMap: {
    [Methods.POST]: {
      name: Joi.string().required(),
      description: Joi.string().optional(),
      beachAdminId: Joi.string().required(),
      availableSets: Joi.number().required(),
      capacitySets: Joi.number().required(),
      flagId: Joi.string().required(),
      seatPrice: Joi.number().required(),
      umbrellaPrice: Joi.number().required(),
      coordinateLat: Joi.number().required(),
      coordinateLng: Joi.number().required(),
    },
    [Methods.PATCH]: {
      name: Joi.string().optional(),
      description: Joi.string().optional(),
      beachAdminId: Joi.string().optional(),
      availableSets: Joi.number().optional(),
      capacitySets: Joi.number().optional(),
      flagId: Joi.string().optional(),
      seatPrice: Joi.number().optional(),
      umbrellaPrice: Joi.number().optional(),
      coordinateLat: Joi.number().optional(),
      coordinateLng: Joi.number().optional(),
    },
  },
  schemaOptions: {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  },
};

export default beachValidation;
