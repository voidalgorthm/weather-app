import { getWeather, displayWeather } from './src/features/weather.js'

const city = await getWeather('tokyo');
console.log(city);

displayWeather(city);
