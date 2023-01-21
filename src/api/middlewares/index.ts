import { Express } from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import { ErrorHandlerMiddleware } from './error-handler';

export class AppMiddlewares {
    
    static loadMiddlewares(app: Express): void {
       
        app.use(cors());

        
        app.use(bodyParser.json());

       
        app.use(bodyParser.urlencoded({ extended: true }));

       
        app.use(helmet());

      
        app.use(ErrorHandlerMiddleware.get().handler);

      
        
    }
}
