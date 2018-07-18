import {autobind} from "core-decorators"
import { Router, Request, Response } from "express"
import { Guest } from '../../models/Guest'
import * as translations from "../../app/translations/invitation/ru"

@autobind
export class InvitationController {
    public static root = "/invitation"

    public router: Router

    constructor() {
        this.router = Router()
        this.defineActions()
    }

    private defineActions() {
        this.router.get('/:id', this.getAction)
        this.router.post('/:id', this.updateAction)
    }

    private getAction(req: Request, res: Response) {
        Guest.Model.findById(req.params.id, (err, guest) => {
            if (err) res.send(err)
            if (guest) {
                this.render(guest, res)
            }
        })
    }

    private updateAction(req: Request, res: Response) {
        Guest.Model.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
            (err, doc) => {
                if (err) res.end()
                if (doc) {
                    res.end()
                }
        })
    }

    private render(guest: Guest, res: Response) {
        res.render("invitation/invitation", {
            translations: {
                ...translations,
                greeting: translations.greeting((guest as Guest).name as string)
            },
            guest
        })
    }
}
