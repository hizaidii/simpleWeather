//weather variables for DOM
let todayDescription = document.querySelector(".todayDescription");
let todayTemp = document.querySelector(".todayTemp");
let todayFeelsLike = document.querySelector(".todayFeelsLike");
let todayIcon = document.querySelector(".todayWeatherIcon");

let minTemp = document.querySelector("#minTemp");
let maxTemp = document.querySelector("#maxTemp");
let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector("#windSpeed");

//axios GET request for weather
function todayWeather(url) {
  return axios
    .get(url)
    .then((response) => {
      todayDescription.innerHTML = response.data.weather[0].main;
      todayTemp.innerHTML = response.data.main.temp + "&deg";
      todayFeelsLike.innerHTML = response.data.main.feels_like + "&deg";
      todayIcon.setAttribute("src", "./Assets/" + response.data.weather[0].icon + ".png");

      minTemp.innerHTML = response.data.main.temp_min + "&deg";
      maxTemp.innerHTML = response.data.main.temp_max + "&deg";
      humidity.innerHTML = response.data.main.humidity + "%";
      windSpeed.innerHTML = response.data.wind.speed;

      //current time
      let timestamp = response.data.dt;
      let timezone = response.data.timezone;

      updateDateTime(timestamp, timezone);
    })
    .catch((error) => {
      console.log(error);
    });
}

// todayWeather(weatherUrl);

// setInterval(() => {
//     todayWeather(weatherUrl);
// },60000);

//forecast variables for DOM
let day1 = document.querySelector("#day1");
let day1Date = document.querySelector("#day1 .forecastDay");
let day1Temp = document.querySelector("#day1 .forecastTemp");
let day1Description = document.querySelector("#day1 .forecastDescription");
let day1Icon = document.querySelector("#day1 .forecastIcon img");

let day2 = document.querySelector("#day2");
let day2Date = document.querySelector("#day2 .forecastDay");
let day2Temp = document.querySelector("#day2 .forecastTemp");
let day2Description = document.querySelector("#day2 .forecastDescription");
let day2Icon = document.querySelector("#day2 .forecastIcon img");

let day3 = document.querySelector("#day3");
let day3Date = document.querySelector("#day3 .forecastDay");
let day3Temp = document.querySelector("#day3 .forecastTemp");
let day3Description = document.querySelector("#day3 .forecastDescription");
let day3Icon = document.querySelector("#day3 .forecastIcon img");

let day4 = document.querySelector("#day4");
let day4Date = document.querySelector("#day4 .forecastDay");
let day4Temp = document.querySelector("#day4 .forecastTemp");
let day4Description = document.querySelector("#day4 .forecastDescription");
let day4Icon = document.querySelector("#day4 .forecastIcon img");

let day5 = document.querySelector("#day5");
let day5Date = document.querySelector("#day5 .forecastDay");
let day5Temp = document.querySelector("#day5 .forecastTemp");
let day5Description = document.querySelector("#day5 .forecastDescription");
let day5Icon = document.querySelector("#day5 .forecastIcon img");

//axios GET request for forecast
function forecastWeather(url) {
  return axios
    .get(url)
    .then((response) => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      // day 1
      let day1Timestamp = response.data.list[0].dt;
      let date1 = new Date(day1Timestamp * 1000);
      let dayIndex1 = date1.getDay();
      let dayName = days[dayIndex1];
      day1Date.innerHTML = dayName;

      day1Temp.innerHTML = response.data.list[0].main.temp + "&deg";
      day1Description.innerHTML = response.data.list[0].weather[0].main;
      day1Icon.setAttribute("src", "./Assets/" + response.data.list[0].weather[0].icon + ".png");

      // day 2
      let day2Timestamp = response.data.list[8].dt;
      let date2 = new Date(day2Timestamp * 1000);
      let dayIndex2 = date2.getDay();
      dayName = days[dayIndex2];
      day2Date.innerHTML = dayName;

      day2Temp.innerHTML = response.data.list[8].main.temp + "&deg";
      day2Description.innerHTML = response.data.list[8].weather[0].main;
      day2Icon.setAttribute("src", "./Assets/" + response.data.list[8].weather[0].icon + ".png");

      // day 3
      let day3Timestamp = response.data.list[16].dt;
      let date3 = new Date(day3Timestamp * 1000);
      let dayIndex3 = date3.getDay();
      dayName = days[dayIndex3];
      day3Date.innerHTML = dayName;

      day3Temp.innerHTML = response.data.list[16].main.temp + "&deg";
      day3Description.innerHTML = response.data.list[16].weather[0].main;
      day3Icon.setAttribute("src", "./Assets/" + response.data.list[16].weather[0].icon + ".png");

      // day 4
      let day4Timestamp = response.data.list[24].dt;
      let date4 = new Date(day4Timestamp * 1000);
      let dayIndex4 = date4.getDay();
      dayName = days[dayIndex4];
      day4Date.innerHTML = dayName;

      day4Temp.innerHTML = response.data.list[24].main.temp + "&deg";
      day4Description.innerHTML = response.data.list[24].weather[0].main;
      day4Icon.setAttribute("src", "./Assets/" + response.data.list[24].weather[0].icon + ".png");

      //day 5
      let day5Timestamp = response.data.list[32].dt;
      let date5 = new Date(day5Timestamp * 1000);
      let dayIndex5 = date5.getDay();
      dayName = days[dayIndex5];
      day5Date.innerHTML = dayName;

      day5Temp.innerHTML = response.data.list[32].main.temp + "&deg";
      day5Description.innerHTML = response.data.list[32].weather[0].main;
      day5Icon.setAttribute("src", "./Assets/" + response.data.list[32].weather[0].icon + ".png");
    })
    .catch((error) => {
      console.log(error);
    });
}

// forecastWeather(forecastUrl);

// let TempTime = new Date();

// let localTime = new Date(TempTime.getTime() + (TempTime.getTimezoneOffset() * 60000) + (14400 * 1000));

// console.log(localTime);

//update date and time function
function updateDateTime(timestamp, timezoneOffset) {
  // Create a date object from the timestamp
  let date = new Date();

  // Adjust for the timezone offset
  // The getTimezoneOffset() method returns the difference, in minutes, between UTC and local time.
  // So, it's a positive value if the local timezone is behind UTC and negative if it's ahead.
  let localTime = new Date(date.getTime() + date.getTimezoneOffset() * 60000 + timezoneOffset * 1000);

  // Format the time and date
  let optionsTime = { hour: "2-digit", minute: "2-digit", hour12: true };
  let formattedTime = localTime.toLocaleTimeString("en-US", optionsTime);

  let optionsDate = { weekday: "long", year: "numeric", month: "short", day: "numeric" };
  let formattedDate = localTime.toLocaleDateString("en-US", optionsDate);

  // Update the DOM elements
  let timeDOM = document.querySelector(".time");
  if (timeDOM) timeDOM.innerHTML = formattedTime;

  let dateToday = document.querySelector(".date");
  if (dateToday) dateToday.innerHTML = formattedDate;

  //changing wallpaper according to time
  let wallpaper = document.querySelector("body");

  let hours2 = localTime.getHours();
  console.log(hours2);

  if (hours2 >= 6 && hours2 < 10) {
    wallpaper.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('./Assets/dawn.png')";
    // wallpaper.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./Assets/dawn.jpg')";
    let textColor = document.querySelector(":root");
    textColor.style.setProperty("--text", "#2c2c2c");
    let cardBg = document.querySelector(":root");
    cardBg.style.setProperty("--cards-bg", "rgba(220, 220, 220, 0.25)");
  } else if (hours2 >= 10 && hours2 < 16) {
    wallpaper.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('./Assets/day.png')";
    // wallpaper.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./Assets/day.jpg')";
    let textColor = document.querySelector(":root");
    textColor.style.setProperty("--text", "#2c2c2c");
    let cardBg = document.querySelector(":root");
    cardBg.style.setProperty("--cards-bg", "rgba(220, 220, 220, 0.25)");
  } else if (hours2 >= 16 && hours2 < 23) {
    wallpaper.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url('./Assets/dusk.png')";
    // wallpaper.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./Assets/dusk.jpg')";
    let textColor = document.querySelector(":root");
    textColor.style.setProperty("--text", "#2c2c2c");
    let cardBg = document.querySelector(":root");
    cardBg.style.setProperty("--cards-bg", "rgba(220, 220, 220, 0.25)");
  } else {
    wallpaper.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('./Assets/night.png')";
    // wallpaper.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./Assets/night.jpg')";
    //changing the hexcode of var(--text-color) to white
    let textColor = document.querySelector(":root");
    textColor.style.setProperty("--text", "#cacaca");
    let cardBg = document.querySelector(":root");
    cardBg.style.setProperty("--cards-bg", "rgba(70, 70, 70, 0.25)");
  }
}

// Example usage: updateDateTime(1701960431, -18000);

// module.exports = { todayWeather, forecastWeather, updateDateTime };
