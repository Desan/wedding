import path from "path"
import mongoose from "mongoose"
import express, { Application } from "express"
import { ManagerController } from "./controllers/Manger"
import { AuthenticationController } from "./controllers/Authentication"
import { InvitationController } from "./controllers/Invitation"

class App {

    public app: Application
    public mongoUrl = 'mongodb://127.0.0.1:27017/main'

    constructor() {
        this.app = express()
        this.config()
        this.databaseConfig()
    }

    private config(): void {
        this.app.use(express.json())
        this.viewConfig()
        // register controllers
        this.app.use(AuthenticationController.root, new AuthenticationController().router)
        this.app.use(ManagerController.root, new ManagerController().router)
        this.app.use(InvitationController.root, new InvitationController().router)
    }

    private viewConfig(): void {
        this.app.set('view engine', 'pug');
        console.info(process.argv)
        if (process.argv.some(arg => arg === "--prod")) {
            this.app.set('views', path.join(__dirname, "..", "src", "views"))
        } else {
            this.app.set('views', path.join(__dirname, "views"))
        }
        this.app.use(express.static("pub"))
    }

    private databaseConfig(): void {
        mongoose.Promise = global.Promise
        mongoose.connect(this.mongoUrl)
    }

}

export default new App().app
