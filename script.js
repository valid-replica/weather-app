"use strict";

const searchButton = document.querySelector("#search-btn");
const main = document.querySelector("main");

searchButton.addEventListener("click", function (e) {
  e.preventDefault();

  const location = document.querySelector("#location").value;
  getWeather(location);
  location.value = "";
});

const renderWeather = function (weather) {
  main.innerHTML = `
 <article>
    <div class="weather-heading">
      <h2>${weather.location.name}</h2>
      <h3>${weather.location.localtime}</h3>
    </div>
    <div class="weather-image">
      <img src="${weather.current.condition.icon}" alt="weahter icon" />
      <p>${weather.current.temp_c} °C</p>
    </div>
    <div class="weather-info-container">
      <div class="weather-info">
        <p><strong>${weather.current.condition.text}</strong></p>
        <p><strong>Feels like</strong> ${weather.current.feelslike_c} °C</p>
        <p>💧 ${weather.current.humidity} %</p>
        <p>🌀 ${weather.current.gust_kph} kph</p>
      </div>
    </div>
  </article>
  `;
};

const getWeather = async function (location) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=111b1bda35af42509a4114647242001&q=${location}`
  );
  const weather = await res.json();
  // console.log(weather);

  renderWeather(weather);
};
