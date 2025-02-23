import {WeatherController} from "../controllers/WeatherController";
import {Router} from "express";


export class WeatherRoutes {
    private readonly router: Router;
    private readonly  weatherController: WeatherController;

    constructor() {
        this.router = Router();
        this.weatherController = new WeatherController();
        this.initializeRoutes();
    }

    private initializeRoutes():void {
        this.router.get('/weather', (req, res)=>
            this.weatherController.getWeather(req, res)
        );
    }
    public getRouter(): Router {
        return this.router;
    }
}