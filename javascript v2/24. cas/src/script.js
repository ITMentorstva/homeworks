
import axios from 'axios'
import { getUserLocation } from "./components/location";
import {getCurrentWeatherForLocation, getWeatherForUpcomingDays, getWeatherInFuture} from "./components/weatherApi";
import {getDateInFuture} from "./helpers/dateHelper";
import {getGeolocationForCoords} from "./components/openWeatherApi";

let location = localStorage.getItem("location") || getUserLocation();
updateLocation(location);

document.getElementById("changeLocation").addEventListener("click", () => {
    updateLocation(getUserLocation());
});

document.getElementById("showWeatherForMyLocation").addEventListener("click", async () => {
    if(!navigator.geolocation) {
        return alert("Vas browser ne podrzava prikazivanje geo lokacije.")
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;


        let coords = await getGeolocationForCoords(lat, lon);

        let cityName = coords.data[0]['name'];

        if(cityName.includes("Municipality")) {
            cityName = cityName.replace("Municipality", "");
        }

        updateLocation(cityName);
    });
});

const response = await getCurrentWeatherForLocation(location);

if(!response.data.current.is_day) {
    document.querySelector("body").style.backgroundColor = "#383838";
}

const forecastResponse = await getWeatherForUpcomingDays(location, 3);

for(let forecast of forecastResponse.data.forecast.forecastday) {
    console.log("Na dan: "+forecast.date+" maximalna temperatura ce biti: "+forecast.day.maxtemp_c+", a minimalna: "+forecast.day.mintemp_c);
}

const dateFormatted = getDateInFuture(30);
const futureWeather = await getWeatherInFuture(location, dateFormatted);
console.log(futureWeather);

function updateLocation(newLocation) {
    location = newLocation;
    localStorage.setItem("location", newLocation);
}