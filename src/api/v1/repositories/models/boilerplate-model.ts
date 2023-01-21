import * as mongoose from "mongoose";

export interface IBoilerplateModel extends mongoose.Document {
    Boilerplate: string;
}

const Schema = new mongoose.Schema(
    {
        Boilerplate: {
            type: String,
            required: true,
        },    
    },
);

const boilerplate = mongoose.model<IBoilerplateModel>('Boilerplate', Schema, 'boilerplate', true);

export { boilerplate };