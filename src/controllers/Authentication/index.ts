import { Router, Request, Response } from "express"

export class AuthenticationController {

    public static root = "/login"

    public router: Router

    constructor() {
        this.router = Router()
        this.registerActions()
    }

    private registerActions() {
        this.router.get('/', this.getAction)
    }

    private getAction(req: Request, res: Response) {
        res.render("login", {
            translations: {}
        })
    }
}
