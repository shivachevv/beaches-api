import Joi from 'joi';
import Flags from '../../declarations/enums/flags';
import Methods from '../../declarations/enums/methods';
import { ValidationData } from '../../middleware/validation';

const flagValidation: ValidationData = {
  schemaRulesMap: {
    [Methods.POST]: {
      flag: Joi.string().valid(Flags.GREEN, Flags.YELLOW, Flags.RED).required(),
    },
    [Methods.PATCH]: {
      flag: Joi.string().valid(Flags.GREEN, Flags.YELLOW, Flags.RED).optional(),
    },
  },
  schemaOptions: {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  },
};

export default flagValidation;
