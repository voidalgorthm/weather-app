async function getWeather(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=0f66d6226605945fb76dd2e1f8ab0a36`
  );
  const data = await response.json();
  displayWeather(data);
}

function displayWeather(data) {
  const name = data.name.trim();
  const { all } = data.clouds;
  const { main, icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  const { country } = data.sys;

  document.querySelector("#city").textContent = `${name}, ${country}`;
  document.querySelector("#temp").textContent = `${temp} °C`;
  document.querySelector("#main").textContent = `${main}`;
  document.querySelector("#icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  document.querySelector("#description").textContent = `${description}`;
  document.querySelector("#clouds").textContent = `${all}`;
  document.querySelector("#humidity").textContent = `${humidity}`;
  document.querySelector("#wind").textContent = `${speed}`;
}

export { getWeather, displayWeather };
