export interface Weather {
    temperature: number;
    feelsLike: number;
    humidity: number;
    description: string;
    windSpeed: number;
    visibility: number;
    rainVolume: number;
    city: string;
    country: string;
    coordinates: {
        lon: number;
        lat: number;
    };
    details: {
        pressure: number;
        tempMin: number;
        tempMax: number;
        windDeg: number;
        windGust: number;
        clouds: number;
        sunrise: number;
        sunset: number;
        timezone: number;
    };
}