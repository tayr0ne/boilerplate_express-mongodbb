import { Router, Request, Response } from 'express';
import { RouteValidator } from './validations/index';
import { boilerplateSchemaValidator } from './schemas'
import Container from 'typedi';
import { boilerplateTController } from '../controllers';
const controller = Container.get(boilerplateTController);
const boilerplate = Router();

/**
 * @swagger
 * info:
 * paths:
 *   /api/v1/register/professional:
 *     post:
 *       tags:
 *       - "Registration"
 *       description: ""
 *       consumes:
 *       - application/json
 *       produces:
 *       - application/json
 *       operationId: RegisterProfessional
 *       parameters:
 *       - in: "body"
 *         name: "body"
 *         required: true
 *         schema:
 *           type: "array"
 *           items:
 *             $ref: "#/definitions/Register Professional"
 *       responses:
 *         "200":
 *             description: "Ok"
 * definitions:
 *   Register Professional:
 *     type: "object"
 *     properties:
 *       name:
 *         type: "string"
 *         example: "Paula"
 *       cpf:
 *         type: "string"
 *         example: "188.209.617-36"
 *       eMail: 
 *         type: "string"
 *         example: "pauladecastro@gmail.com"
 *       linkedin:
 *         type: "string"
 *         example: "linkedin/paula.com.br"
 */

boilerplate.route('/boilerplate')
    .get(
        RouteValidator.validate(
            boilerplateSchemaValidator.post()
        ),
        (req: Request, res: Response) => {
            controller.boilerplate(
                req,
                res
            )
        }
    );

export { boilerplate }