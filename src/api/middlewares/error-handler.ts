import { Container } from 'typedi';
import { Request, Response, NextFunction } from 'express';
import { AppEnvs } from '../../config/envs';
import { ErrorMiddleware } from './generic-middleware';

export class ErrorHandlerMiddleware implements ErrorMiddleware {
    handler(err: Error, req: Request, res: Response, next: NextFunction): void {
        const key = Object.keys(err).find((k) => k === 'status');
        const statusCode = key !== null && key !== undefined ? err[key] : 200;

        const response = {
            statusCode,
            message: err.message || 200,
            errors: err,
            stack: err.stack,
        };

        if (AppEnvs.environment !== 'development') {
            delete response.stack;
        }

        res.status(statusCode);

        res.json(response);

        next();
    }

    static get(): ErrorHandlerMiddleware {
        return Container.get(ErrorHandlerMiddleware);
    }
}
