import { getWeather } from './src/features/weather.js'

let city = 'san francisco';
getWeather(city);

document.querySelector("#search-box").addEventListener('change', () => {
  getWeather(document.querySelector("#search-box").value);
});

document.querySelector('#search-box').addEventListener('keyup', (event) => {
  if(event.key === 'Enter') getWeather(event.target.value);
}); 
