import axios from "axios";

const apiKey = "xxx";

export async function getCurrentWeatherForLocation(location) {
    return await axios.get("https://api.weatherapi.com/v1/current.json", {
        params: {
            key: apiKey,
            q: location,
            aqi: "no"
        }
    });
}


export async function getWeatherForUpcomingDays(location, days) {
    return await axios.get("https://api.weatherapi.com/v1/forecast.json", {
        params: {
            key: apiKey,
            aqi: "no",
            alerts: "no",
            days: days,
            q: location,
        }
    });
}