import { Request, Response } from 'express';
import EmailServices from '../services/email'
const users = [
    {
        id: 1,
        name: 'Dev',
        email: 'dev@dev.com'
    }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailServices();

        emailService.sendMain({
            to: {
                name: 'Dev',
                email: 'dev@dev.com'
            },
            message: {
                subject: "Welcome to the team",
                body: "We are happy to have you on board"
            }
        })

        return res.send('deu bom')
    }
}