import express, { Application } from "express"
import path from "path"
import { ManagerController } from "./controllers/Manger"
import { AuthenticationController } from "./controllers/Authentication"

class App {

    public app: Application

    constructor() {
        this.app = express()
        this.config()
    }

    private config(): void {
        this.app.use(express.json())
        this.viewConfig()
        // register controllers
        this.app.use(AuthenticationController.root, new AuthenticationController().router)
        this.app.use(ManagerController.root, new ManagerController().router)
    }

    private viewConfig(): void {
        this.app.set('view engine', 'pug');
        this.app.set('views', path.join(__dirname, "views"))
    }

}

export default new App().app
