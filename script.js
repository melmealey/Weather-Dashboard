//variables
const APIKey = 'ef2e17d0ac82b47460af0e3eef68995c';
const searchBox = document.getElementById('searchBox');
const day = new Date();
const searchBtn = document.getElementById('searchBtn');
const container = document.getElementById('weatherContainer');
const Dashboard = document.getElementById('Dashboard');
const locationName = document.createElement('div');
let cities = document.getElementById('searchInput');

const currentTemp = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}


const GetCityInfo = async (url) => {
  const response1 = await fetch(url);
  const data1 = await response1.json();
  console.log(data1);

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

    //container tht will store the current temp, humidity and wind speed for the next 5 days
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

  const locationName = document.createElement('div');
  locationName.innerHTML = cityName;
  Dashboard.appendChild(locationName);

  const temp = document.createElement('div');
  temp.innerHTML = data2.main.temp;
  Dashboard.appendChild(temp);

  const humidity = document.createElement('div');
  humidity.innerHTML = data2.main.humidity;
  Dashboard.appendChild(humidity);

  const windSpeed = document.createElement('div');
  windSpeed.innerHTML = data2.wind.speed;
  Dashboard.appendChild(windSpeed);
}

searchBtn.addEventListener('click', () => {
  let city = searchInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;
  getWeatherForecast(url);
});

const saveCitySearch = () => {
  let citySearches = JSON.parse(localStorage.getItem('citySearches')) || [];
  citySearches.push(city);
  localStorage.setItem('citySearches', JSON.stringify(citySearches));

}
//Function created to render the buttons for the searched cities
const searchedCityButtons = (cityNames) => {
  const cityButtonsContainer = document.getElementById('cityButtonsContainer');
  cityButtonsContainer.innerHTML = '';

  cityNames.forEach((cityName) => {
    const button = document.createElement('button');
    button.textContent = cityName;
    button.classList.add('city-button');

    button.addEventListener('click', () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=imperial`;
      getWeatherForecast(url);
    });

    cityButtonsContainer.appendChild(button);
  });


  searchedCityButtons(citySearches);

};

const citySearches = JSON.parse(localStorage.getItem('citySearches')) || [];


const buttons = document.getElementById('button-container');
for (let i = 0; i < cities.length; i++) {
  const button = document.createElement('button');
  button.textContent = cities[i];
  button.classList.add('city-button');
  GetWeatherInfo(cities[i]);

};

container.appendChild(button);

console.log('Getting weather information for city:', city);


button.addEventListener('click', function () {

  console.log('What city was searched:', cities[i]);
});


container.appendChild(button);
