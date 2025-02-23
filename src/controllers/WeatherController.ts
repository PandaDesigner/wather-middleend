import { Request, Response } from "express";
import {Weather} from "../inferfaces/Weather.interface";


export class WeatherController {
    public getWeather(req: Request, res: Response) {
        try{
            const weatherData: Weather = {
                temperature: 22,
                condition: "Cloudy",
                humidity: 70,
                location: "Venezuela",
            };

            res.status(200).json({
                status: "success",
                data: weatherData
            });
        } catch(err) {
            res.status(500).json({
                status: "error",
                message: "Error al obtener datos del clima"
            })
        }

    }

}