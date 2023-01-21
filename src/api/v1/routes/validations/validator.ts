import * as Joi from 'joi';
import { ValidationError } from 'joi';
import { Request, Response, NextFunction } from 'express';

export interface SchemaValidator {
    body?: Joi.Schema;
    query?: Joi.Schema;
    params?: Joi.Schema;
}
interface ValidationResult {
    bodyError?: ValidationError;
    queryError?: ValidationError;
    parameterError?: ValidationError;
}
export class RouteValidator {
    static validate(shcema: SchemaValidator) {
        return (req: Request, res: Response, next: NextFunction): void => {
            const validateResult: ValidationResult = {};

            if (shcema.body) {
                validateResult.bodyError = Joi.validate(req.body, shcema.body).error;
            }
            if (shcema.query) {
                validateResult.queryError = Joi.validate(req.query, shcema.query).error;
            }
            if (shcema.params) {
                validateResult.parameterError = Joi.validate(req.params, shcema.params).error;
            }

            const valid = !validateResult.bodyError && !validateResult.parameterError && !validateResult.queryError;

            if (valid) {
                next();
            } else {
                const details = (validateResult.bodyError ? validateResult.bodyError.details : [])
                    .concat(validateResult.parameterError ? validateResult.parameterError.details : [])
                    .concat(validateResult.queryError ? validateResult.queryError.details : []);
                const message = details.map((i) => i.message).join('; \n ');
                res.status(422).json({ error: message });
            }
        };
    }
}
