import express from "express"
import { ManagerController } from "./controllers/Manger"
import { AuthenticationController } from "./controllers/Authentication"

class App {

    public app: express.Application

    constructor() {
        this.app = express()
        this.config()
    }

    private config(): void {
        this.app.use(express.json())
        this.app.use(AuthenticationController.root, new AuthenticationController().router)
        this.app.use(ManagerController.root, new ManagerController().router)
    }

}

export default new App().app
