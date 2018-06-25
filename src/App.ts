import express from "express"
import { ManagerController } from "./controllers/Manger"

class App {

    public app: express.Application

    constructor() {
        this.app = express()
        this.config()
    }

    private config(): void {
        this.app.use(express.json())
        this.app.use(ManagerController.root, new ManagerController().router)
    }

}

export default new App().app
