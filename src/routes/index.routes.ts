import {Router} from "express";
import {WeatherRoutes} from "./weather.routes";


export class IndexRoutes {
    private readonly router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get("/", (req, res) => {
            res.send("Hello World!");
        });

        const weatherRoutes = new WeatherRoutes();
        this.router.use("/api", weatherRoutes.getRouter());
    }

    public getRouter():Router {
        return this.router;
    }
}