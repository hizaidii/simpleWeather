//setting city and country
//dynamic width of the search input
let searchLocation = document.querySelector(".searchLocation");
searchLocation.setAttribute("size", searchLocation.getAttribute("placeholder").length);
let city = "New Delhi";
let country = "India";

let weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&APPID=6457b5661c1b44e20088ad1e425b29fe&units=metric";

let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&APPID=6457b5661c1b44e20088ad1e425b29fe&units=metric";

//setting city and country on search button click
let searchBtn = document.querySelector(".searchBtn");
searchBtn.addEventListener("click", () => {
  if (searchLocation.value == "") {
    return;
  } else {
    let cityAndCountry = searchLocation.value;
    let cityAndCountryArray = cityAndCountry.split(",");
    city = cityAndCountryArray[0];
    country = cityAndCountryArray[1];
    searchLocation.setAttribute("size", searchLocation.value.length);

    todayWeather("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&APPID=6457b5661c1b44e20088ad1e425b29fe&units=metric");
    forecastWeather("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&APPID=6457b5661c1b44e20088ad1e425b29fe&units=metric");

    let headline = document.querySelector(".headline");
    headline.innerHTML = `Currently in ${city}`;
  }
});

//setting city and country on enter
searchLocation.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    if (searchLocation.value == "") {
      return;
    } else {
      let cityAndCountry = searchLocation.value;
      let cityAndCountryArray = cityAndCountry.split(",");
      city = cityAndCountryArray[0];
      country = cityAndCountryArray[1];
      searchLocation.setAttribute("size", searchLocation.getAttribute("placeholder").length);

      todayWeather("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&APPID=6457b5661c1b44e20088ad1e425b29fe&units=metric");
      forecastWeather("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&APPID=6457b5661c1b44e20088ad1e425b29fe&units=metric");
      let headline = document.querySelector(".headline");
      headline.innerHTML = `Currently in ${city}`;
    }
  }
});

//resetting city and country on clicking home
let home = document.querySelector(".logo");
home.addEventListener("click", () => {
  city = "New Delhi";
  country = "India";
  searchLocation.value = "";
  searchLocation.setAttribute("size", searchLocation.getAttribute("placeholder").length);
  todayWeather("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&APPID=6457b5661c1b44e20088ad1e425b29fe&units=metric");
  forecastWeather("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&APPID=6457b5661c1b44e20088ad1e425b29fe&units=metric");

  let headline = document.querySelector(".headline");
  headline.innerHTML = `Currently in ${city}`;
});

// requestFuncs.todayWeather(weatherUrl);
// requestFuncs.forecastWeather(forecastUrl);

todayWeather("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&APPID=6457b5661c1b44e20088ad1e425b29fe&units=metric");

forecastWeather("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&APPID=6457b5661c1b44e20088ad1e425b29fe&units=metric");

//updating weather (and time) every minute
setInterval(() => {
  todayWeather("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&APPID=6457b5661c1b44e20088ad1e425b29fe&units=metric");
  forecastWeather("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&APPID=6457b5661c1b44e20088ad1e425b29fe&units=metric");
}, 60000);
