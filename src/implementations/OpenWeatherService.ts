import axios from 'axios';
import { Weather } from "../inferfaces/Weather.interface";
import { IWeatherService } from "../inferfaces/WeatherService.interface";
import dotenv from 'dotenv';

dotenv.config();
export class OpenWeatherService implements IWeatherService {
    private readonly apiKey: string;
    private readonly baseUrl: string;

    constructor() {
        this.apiKey = process.env.WEATHER_API_KEY || '';
        // Corregir la URL base
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }

    async getWeatherByCity(city: string): Promise<Weather> {
        try {
            console.log(`Fetching weather for city: ${city}`);
            const response = await axios.get(this.baseUrl, {
                params: {
                    q: city,
                    appid: this.apiKey,
                    units: 'metric',
                    lang: 'es'
                }
            });

            const data = response.data;
            return {
                temperature: data.main.temp,
                feelsLike: data.main.feels_like,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                windSpeed: data.wind.speed,
                visibility: data.visibility,
                rainVolume: data.rain?.['1h'] || 0,
                city: data.name,
                country: data.sys.country,
                coordinates: {
                    lon: data.coord.lon,
                    lat: data.coord.lat
                },
                details: {
                    pressure: data.main.pressure,
                    tempMin: data.main.temp_min,
                    tempMax: data.main.temp_max,
                    windDeg: data.wind.deg,
                    windGust: data.wind.gust || 0,
                    clouds: data.clouds.all,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    timezone: data.timezone
                }
            };
        } catch (error: any) {
            console.error('Error fetching weather data:', error.response?.data || error.message);
            if (error.response?.status === 404) {
                throw new Error('City not found');
            }
            throw new Error('Failed to fetch weather data');
        }
    }
}