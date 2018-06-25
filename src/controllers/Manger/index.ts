import { Router, Request, Response } from "express"

export class ManagerController {

    public static root = "/manager"

    public router: Router

    constructor() {
        this.router = Router()
        this.registerActions()
    }

    private registerActions() {
        this.router.get('/', this.getAction)
    }

    private getAction(req: Request, res: Response) {
        console.log("test get")
        return res.send("TEST")
    }
}
