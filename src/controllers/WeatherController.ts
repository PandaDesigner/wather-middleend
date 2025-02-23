import {Request, Response } from 'express';
import { IWeatherService } from "../inferfaces/WeatherService.interface";

export class WeatherController {
    private weatherService: IWeatherService;

    constructor(weatherService: IWeatherService) {
        this.weatherService = weatherService;
    }

    async getWeatherByCity(req: Request, res: Response): Promise<void> {
        const city = req.query.city as string;

        if (!city) {
            res.status(400).json({ error: 'City parameter is required' });
            return;
        }

        try {
            const weatherData = await this.weatherService.getWeatherByCity(city);
            res.status(200).json(weatherData);
        } catch (error: any) {
            res.status(500).json({ error: error.message || 'An error occurred' });
        }
    }
}