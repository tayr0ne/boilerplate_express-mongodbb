import { Service } from 'typedi';
import { Request, Response } from 'express';

@Service()
export class boilerplateTController {

    constructor() {
    }

    async boilerplate(req: Request, res: Response): Promise<void> {
        try {

            res.status(200).send('boilerplate')

        } catch (err) {
            res.status(500).json({ error: err })
        }
    }

}
