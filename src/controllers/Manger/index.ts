import { Router, Request, Response } from "express"
import { Guest } from '../../models/Guest'

export class ManagerController {

    public static root = "/manager"

    public router: Router

    constructor() {
        this.router = Router()
        this.defineActions()
    }

    private defineActions() {
        this.router.get('/', this.getAction)
    }

    private getAction(req: Request, res: Response) {
        Guest.Model.find({}, (err, guests) => {
            if (err) {
                res.send(err)
            }
            res.json(guests)
        })
    }
}
