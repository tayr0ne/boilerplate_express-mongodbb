import * as mongoose from 'mongoose';
import { DataBaseEnvs } from './envs';

export class DatabaseConfig {
    static async connect(): Promise<void> {
        await mongoose.connect(DataBaseEnvs.URI, {
            dbName: DataBaseEnvs.DATABASE,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
}
