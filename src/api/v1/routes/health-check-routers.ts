import { Router, Request, Response } from 'express';

const HealhtChecker = Router();

/**
 * @swagger
 * info:
 * paths:
 *   /api/v1/health/ready:
 *     get:
 *       tags:
 *           - Check API
 *       requestBody:
 *         description: "Check the api to receive the request"
 *         parameters: []
 *       responses:
 *         "Default":
 *           description: "Ok"
 *           content: {}
 *       x-codegen-request-body-name: body 
 */

HealhtChecker.route('/health/ready').get((req: Request, res: Response) => {
    res.send('Success!').status(200);
});

export { HealhtChecker };
