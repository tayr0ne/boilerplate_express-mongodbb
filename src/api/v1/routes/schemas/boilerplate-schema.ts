import * as Joi from 'joi';
import { SchemaValidator } from '../validations';

export class boilerplateSchemaValidator {
    private static body = Joi.object({
        name: Joi.string().required().description('Example name field'),
        age: Joi.number().min(18).required().description('Example age field'),
    });

    static post(): SchemaValidator {
        return {
            body: boilerplateSchemaValidator.body,
        };
    }

    static put(): SchemaValidator {
        return {
            body: boilerplateSchemaValidator.body,
            params: Joi.object({
                id: Joi.number().required(),
            }),
        };
    }
}
