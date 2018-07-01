import { Router, Request, Response } from "express"

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
    }
}
