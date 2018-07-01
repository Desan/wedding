import { Router, Request, Response } from "express"

const formFields = {
    username: "Пользователь",
    password: "Пароль",
    submit: "Войти"
}


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
        res.render("login/login-form", {
            translations: { ...formFields }
        })
    }
}
