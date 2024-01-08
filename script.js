const APIKey = 'ef2e17d0ac82b47460af0e3eef68995c';
const searchBox = document.getElementById('searchBox');
const day = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const searchBtn = document.getElementById('searchBtn');

const container = document.getElementById('weatherContainer');

const saveSearch = () => {
  city = searchBox.value;
  localStorage.setItem('lastSearch', city);
  console.log('click');
}



const GetCityInfo = async (url) => {
  const response1 = await fetch(url);
  const data1 = await response1.json();
  console.log(data1);

  const lat = data1[0].lat;
  const lon = data1[0].lon;

  console.log(data1[0].name);

  await GetWeatherInfo(lat, lon);
}

const getWeatherForecast = async (url) => {
    await GetCityInfo(url);
  }

const GetWeatherInfo = async (lat, lon) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;
  const response2 = await fetch(url);
  const data2 = await response2.json();
  console.log(data2);

  const locationName = document.createElement('div');
  locationName.innerHTML = data2.name;
  container.appendChild(locationName);

  const temp = document.createElement('div');
  temp.innerHTML = data2.main.temp;
  container.appendChild(temp);

  const humidity = document.createElement('div');
  humidity.innerHTML = data2.main.humidity;
  container.appendChild(humidity);

  const windSpeed = document.createElement('div');
  windSpeed.innerHTML = data2.wind.speed;
  container.appendChild(windSpeed);
}

searchBtn.addEventListener('click', () => {
  let city = searchBox.value;
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIKey}`;
  getWeatherForecast(url);
});

const lastSearch = localStorage.getItem('lastSearch');
if (lastSearch) {
  searchBox.value = lastSearch;
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${lastSearch}&limit=5&appid=${APIKey}`;
  getWeatherForecast(url);
}

//   const url = 'http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=ef2e17d0ac82b47460af0e3eef68995c';
//   GetInfo1(url);
  
    // const searchBox = () => {
    //     let locationName = document.getElementById('locationName');
    //     locationName.innerHTML = '--' + searchBox.value + '--';


// searchBtn.addEventListener('click', function (event) {
//     event.preventDefault()
//     let city = searchBox.value;

//     GetInfo1(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=ef2e17d0ac82b47460af0e3eef68995c`);
    
// });
    

    //     //Save and display recent searches

    //     // Define an array to store the recent searches
    //     let inputCity = [];

    // };

    // // Function to save the city search
    // const saveSearches = () => {
    //     const citySearch = document.getElementById('citySearch');
    //     const input = {
    //         city: citySearch.value,
    //     };
    //     inputCity.push(input);
    //     localStorage.setItem("inputCity", JSON.stringify(inputCity));
    //     displayRecentSearches();
    // };

    // // Function to display the recent searches
    // const displayRecentSearches = () => {
    //     const cityList = document.getElementById('cityList');
    //     cityList.textContent = "";
    //     for (let i = 0; i < inputCity.length; i++) {
    //         let button = document.createElement('button');
    //         button.textContent = inputCity[i].city;
    //         cityList.appendChild(button);
    //     }
    // };

    // // Call the displayRecentSearches function when the page loads
    // displayRecentSearches();



    // const weekDay = () => {
    //     if (day + d.getDay() > 6)
    //         return day + d.getDay() - 7;
    //     else {
    //         return day + d.getDay();
    //     }
    // }
