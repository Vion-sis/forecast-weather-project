function showCurrentTemperature(response) {
  console.log(response);
  let humidity = response.data.main.humidity;
  let wind = Math.round(response.data.wind.speed);
  let countryName = response.data.sys.country;
  let description = response.data.weather[0].description;
  let name = response.data.name;

  celciusTemperature = Math.round(response.data.main.temp);

  let currentHumidity = document.querySelector("#current-humidity");
  currentHumidity.innerHTML = `Humidity: ${humidity}%`;
  let currentTemperature = document.querySelector("#current-temp");
  currentTemperature.innerHTML = `${celciusTemperature}`;
  let currentWindSpeed = document.querySelector("#current-wind");
  currentWindSpeed.innerHTML = `Wind: ${wind}m/s`;
  let cityCountry = document.querySelector("#country");
  cityCountry.innerHTML = ` ${countryName}`;
  let currentDescription = document.querySelector("#description");
  currentDescription.innerHTML = `${description}`;
  let cityDisplayName = document.querySelector("#name");
  cityDisplayName.innerHTML = `${name}`;
  let iconDisplay = document.querySelector("#icon");
  iconDisplay.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(cityName) {
  let apiKey = "4091b06da263484df848822445999498";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(showCurrentTemperature);
}

function handleSubmit(event) {
  event.preventDefault();

  let cityName = document.querySelector("#text-input").value;
  search(cityName);
}

function showFahTemperature(event) {
  event.preventDefault();

  let fahTemperature = Math.round((celciusTemperature * 9) / 5 + 32);
  let currentTemperature = document.querySelector("#current-temp");
  currentTemperature.innerHTML = `${fahTemperature}`;
  celciusUnit.classList.remove("active");
  fahUnit.classList.add("active");
}

function showCelciusTemperature(event) {
  event.preventDefault();

  let currentTemperature = document.querySelector("#current-temp");
  currentTemperature.innerHTML = celciusTemperature;
}

let celciusTemperature = null;

let cityValue = document.querySelector("#search-text");
cityValue.addEventListener("submit", handleSubmit);

let fahUnit = document.querySelector("#fah");
fahUnit.addEventListener("click", showFahTemperature);

let celciusUnit = document.querySelector("#celcius");
celciusUnit.addEventListener("click", showCelciusTemperature);

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];
let date1 = now.getDate();
console.log(date1);

let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}

let currentMinute = now.getMinutes();
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}

let currentTime = document.querySelector("#time");
currentTime.innerHTML = `${currentHour} : ${currentMinute}`;
let UpdateDay = document.querySelector("#day");
UpdateDay.innerHTML = `${currentDay}, ${date1}`;

search("New York");
