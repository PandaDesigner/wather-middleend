import { Router } from "express";
import { OpenWeatherService } from "../implementations/OpenWeatherService";
import { WeatherController } from "../controllers/WeatherController";

const router = Router();
const weatherService = new OpenWeatherService();
const weatherController = new WeatherController(weatherService);

router.get("/weather", (req, res) => weatherController.getWeatherByCity(req, res));

export default router;