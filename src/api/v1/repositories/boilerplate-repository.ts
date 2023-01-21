import { boilerplate } from './models';

export class ProfessionalRegistrationRepository {

    static insertProfessional(data: any) {
        try {
            return new Promise(async (res, rej) => {
                let bulkArr = []
                for (const i of data) {
                    bulkArr.push({
                        updateOne: {
                            "filter": { "boilerplate": i.boilerplate },
                            "update": { $set: i },
                            "upsert": true
                        }
                    })
                }

                await boilerplate.bulkWrite(bulkArr).then((itens: any) => {
                    res(itens)
                }, (error) => {
                    rej(error)
                })
            })
        } catch (err) {
            throw err;
        }
    }
}