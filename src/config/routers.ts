import { Router, Express } from 'express';
import * as swaggerUi from 'swagger-ui-express';
import specs from './swagger';
import { v1 } from '../api/v1/routes';
export class AppRouters {
    static load(app: Express): void {
        const router = Router();

        router
            .use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
            .use('/api/v1', v1);

        app.use(router);
    }
}

export { v1 };
