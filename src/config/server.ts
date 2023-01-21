import * as express from 'express';
import { AppEnvs } from './envs';
import { AppMiddlewares } from '../api/middlewares';
import { AppRouters } from './routers';
import { DatabaseConfig } from './database';

const app = express();

export class Server {
    static async init(): Promise<void> {
        AppMiddlewares.loadMiddlewares(app);
        AppRouters.load(app);
        await DatabaseConfig.connect();
        app.listen(AppEnvs.server.port, () => {});
    }
}
