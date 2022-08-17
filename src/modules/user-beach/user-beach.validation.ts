import Joi from 'joi';
import Methods from '../../declarations/enums/methods';
import { ValidationData } from '../../middleware/validation';

const userBeachValidation: ValidationData = {
  schemaRulesMap: {
    [Methods.POST]: {
      userId: Joi.string().required(),
      beachId: Joi.string().required(),
      sets: Joi.number().required(),
      seatPrice: Joi.number().required(),
      umbrellaPrice: Joi.number().required(),
    },
    [Methods.PATCH]: {
      userId: Joi.string().optional(),
      beachId: Joi.string().optional(),
      sets: Joi.string().optional(),
      seatPrice: Joi.number().optional(),
      umbrellaPrice: Joi.number().optional(),
    },
  },
  schemaOptions: {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  },
};

export default userBeachValidation;
