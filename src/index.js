import "./styles.css"
import { displayTodaysForecast, display7DayForecast } from "./display-forecast.js";

// import mountain from "./assets/mountain.jpg";
// const element = document.createElement("div");
// const picture = new Image();
// picture.src = mountain;
// element.append(picture);
// document.body.append(element);

const search = document.querySelector('.search');
const forecast = document.querySelector('.forecast');

search.addEventListener('click', () => {
    const city = document.querySelector('#city');
    const url = `https://weather.visualcrossing.com/VisualCrossingWebSevices/rest/services/timeline/${city.value}?unitGroup=us&key=WECT3BE9NPYPN9HXTBNYJMZUR&contentType=json`;
    getWeatherData(url);
});

async function getWeatherData(url) {
    try {
        const response = await fetch (url, {mode: 'cors'});
        const data = await response.json();
        displayTodaysForecast(data);
        display7DayForecast(data);
    } catch (error) {
        console.error(error.message)
    }
};
