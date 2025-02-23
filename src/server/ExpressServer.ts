import express, { Application } from "express";
import { IndexRoutes } from "../routes/index.routes";
import { Server } from "./Server";
export class ExpressServer implements Server {
    private app: Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT || 3000);
        this.configureMiddleware();
        this.configureRouters();
    }

    private configureMiddleware(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private configureRouters(): void {
        const routes = new IndexRoutes();
        this.app.use('/', routes.getRouter());
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Express server listening on port: http//localhost:${this.port}`);
        });
    }

    public stop(): void {
        process.exit(0);
    }

}
