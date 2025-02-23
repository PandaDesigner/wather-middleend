import { Router } from "express";
import WeatherRoutes from "./weather.routes";


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

        const weatherRoutes = WeatherRoutes
        this.router.use("/api", weatherRoutes);
    }

    public getRouter(): Router {
        return this.router;
    }
}