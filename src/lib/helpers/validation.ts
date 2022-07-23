import { NextFunction, Request, Response } from 'express';
import Joi, { ValidationOptions } from 'joi';

type SchemaRulesMap = Record<string, Record<string, any>>;

export interface ValidationData {
  schemaRulesMap: SchemaRulesMap;
  schemaOptions: ValidationOptions;
}

export const validatePayload =
  ({ schemaRulesMap, schemaOptions }: ValidationData) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const method = req.method;
    const schema = Joi.object(schemaRulesMap[method]);

    const { error, value } = schema.validate(req.body, schemaOptions);

    if (error) {
      return next(
        `Validation error: ${error.details.map((x) => x.message).join(', ')}`
      );
    }
    req.body = value;
    next();
  };
