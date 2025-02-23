import { Weather } from "./Weather.interface";

export interface IWeatherService {
    getWeatherByCity(city: string): Promise<Weather>;
}