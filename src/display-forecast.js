export function displayTodaysForecast(data) {
    const todaysForecast = document.createElement('div');
    todaysForecast.classList.add('todays-forecast');
    todaysForecast.innerHTML = 
        `<h1>${data.address}</h1>
        <p>${data.currentConditions.temp}<span>F</span></p>
        <p>${data.currentConditions.conditions}</p>
        <p>Feels Like: ${data.currentConditions.feelslike}<span>F</span></p>
        <p>Humidity: ${data.currentConditions.humidity}%</p>
        <p>Wind: ${data.currentConditions.windspeed} mph</p>
        <p>${data.description}</p>`;
    forecast.append(todaysForecast);
};

//use library to covert wind direction degrees to NSEW
//use icon instead of conditions (currentConditions.icon)
//don't use description??
//how to make the degree symbol

export function display7DayForecast(data) {
    const weekForecast = document.createElement('div');
    weekForecast.classList.add('week-forecast');
    weekForecast.innerHTML = '<h2>7 Day Forecast</h2>';
    const ul = document.createElement('ul');
    ul.classList.add('week');
    for (let i = 0; i <= 6; i++) {
        const li = document.createElement('li');
        li.classList.add('day');
        li.innerHTML = `${data.days[i].datetime} ${data.days[i].icon} ${data.days[i].tempmin}<span>F</span> - ${data.days[i].tempmax}<span>F</span>`;
        ul.append(li);
    }
    weekForecast.append(ul);
    forecast.append(weekForecast);
    //use library to convert date to sun mon tue
    //convert to icon
};