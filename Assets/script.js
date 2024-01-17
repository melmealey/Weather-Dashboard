//variables
const APIKey = 'ef2e17d0ac82b47460af0e3eef68995c';
const searchBox = document.getElementById('searchBox');
const day = new Date();
const searchBtn = document.getElementById('searchBtn');
const container = document.getElementById('weatherContainer');
const Dashboard = document.getElementById('Dashboard');
const locationName = document.createElement('div');
let cities = document.getElementById('searchInput');

const cityList = JSON.parse(localStorage.getItem('cityList')) || [];

document.body.style.backgroundImage = "url('https://i.etsystatic.com/44606345/r/il/e8a3d2/5063053542/il_1588xN.5063053542_scqq.jpg')";

const getCurrentWeather = async (data1) => {
  Dashboard.textContent = "";
  var h3 = document.createElement('h3');
  h3.textContent = data1.name;
  if (cityList.includes(data1.name) === false) {
    cityList.push(data1.name);
    localStorage.setItem('cityList', JSON.stringify(cityList))
  }

  //container that will store the current temp, humidity and wind speed of city searched
  var currentDate = dayjs.unix(data1.dt).format(" (MM/DD/YYYY) ");
  h3.textContent = h3.textContent + " " + currentDate;
  var img = document.createElement("img");
  img.src = `http://openweathermap.org/img/wn/${data1.weather[0].icon}@2x.png`
  h3.appendChild(img);
  Dashboard.appendChild(h3);

  var p = document.createElement('p');
  p.textContent = "Temp: " + data1.main.temp + '°F'
  Dashboard.appendChild(p)

  var pHumidity = document.createElement('p');
  pHumidity.textContent = "Humidity: " + data1.main.humidity + "%"
  Dashboard.appendChild(pHumidity)

  var pSpeed = document.createElement('p');
  pSpeed.textContent = "Wind Speed: " + data1.wind.speed + 'MPH'
  Dashboard.appendChild(pSpeed)

}
const GetCityInfo = async (url) => {
  const response1 = await fetch(url);
  const data1 = await response1.json();

  await getCurrentWeather(data1)
  await GetWeatherInfo(data1.name);
}

const getWeatherForecast = async function (url) {
  await GetCityInfo(url);
}

//Function to get the specific weather info for each city searched
const GetWeatherInfo = async (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}&units=imperial`;
  const response2 = await fetch(url);
  const data2 = await response2.json();
  container.textContent = ""
  for (let i = 2; i < data2.list.length; i = i + 8) {

    //container to store the city searched temp, humidity and wind speed for the next 5 days
    container.innerHTML += `<div class='icons'>
<p class='weather' id='day1'></p>
<p class='date' id='day1Date'>${dayjs.unix(data2.list[i].dt).format('MM/DD/YYYY')}</p>
<div class='image'><img src='http://openweathermap.org/img/wn/${data2.list[i].weather[0].icon}@2x.png' class="imgClass" id='img1'
        alt=''></div>
<p class='temp' id='day1Temp'>Temp: ${data2.list[i].main.temp} °F</p>
<p class='humidity' id='humidity'>Humidity: ${data2.list[i].main.humidity}%</p>
<p class='windSpeed' id='windSpeed'>Wind Speed: ${data2.list[i].wind.speed} MPH</p>
</div>`

  }
}

searchBtn.addEventListener('click', () => {
  let city = searchInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;
  getWeatherForecast(url);

  if (!cityList.includes(city)) {
    cityList.push(city);
    localStorage.setItem('cityList', JSON.stringify(cityList));
    renderSearchHistory();
  }

});
//Retrieve searches from local storage and append them as buttons 
const renderSearchHistory = () => {
  const cityList = JSON.parse(localStorage.getItem('cityList')) || [];
  const searchHistoryContainer = document.getElementById('searchHistoryContainer');
  searchHistoryContainer.innerHTML = '';


  cityList.forEach((city) => {
    const button = document.createElement('button');
    button.textContent = city;
    button.addEventListener('click', () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;
      getWeatherForecast(url);
    });
    searchHistoryContainer.appendChild(button);
  });
};

searchBtn.addEventListener('click', () => {
  let city = searchInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;
  getWeatherForecast(url);


});

renderSearchHistory();