//variables
const APIKey = 'ef2e17d0ac82b47460af0e3eef68995c';
const searchBox = document.getElementById('searchBox');
const day = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const searchBtn = document.getElementById('searchBtn');
const container = document.getElementById('weatherContainer');
const Dashboard =document.getElementById('Dashboard');

// function to save a list of the city searches
// const searchCity = () => {
//     let locationName = document.getElementById('locationName');
//     locationName.innerHTML = '--' + searchInput.value + '--';
//     city = searchInput.value;
//     localStorage.setItem('lastSearch', city);
  
// searchCity ();

// }

const GetCityInfo = async (url) => {
  const response1 = await fetch(url);
  const data1 = await response1.json();
  console.log(data1);

  await GetWeatherInfo(data1.name);
}

const getWeatherForecast = async function(url) {
    await GetCityInfo(url);
  }

  //Function to get the specific weather info for each city searched
const GetWeatherInfo = async (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}&units=imperial`;
  const response2 = await fetch(url);
  const data2 = await response2.json();
container.textContent=""
  for (let i=2; i<data2.list.length; i=i+8){

    console.log(data2.list[i]);

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

// const container =document.getElementById('weatherContainer');

  const locationName = document.createElement('div');
  locationName.innerHTML = data2.name;
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

//
// const lastSearch = localStorage.getItem('lastSearch');
// if (lastSearch) {
//   searchInput.value = lastSearch;
//   const url = `https://api.openweathermap.org/geo/1.0/direct?q=${lastSearch}&limit=5&appid=${APIKey}`;
//   getWeatherForecast(url);

// }

const saveCitySearch = () => {
let citySearches = JSON.parse(localStorage.getItem('citySearches')) || [];
citySearches.push(city);
localStorage.set

}
// saveCitySearch();
// // Function to save a city search
// function saveCitySearch(city) {
//     // Retrieve the existing city searches from localStorage
//     let citySearches = JSON.parse(localStorage.getItem('citySearches')) || [];
  
//     // Add the new city to the array
//     citySearches.push(city);
  
//     // Convert the array to a JSON string and save it in localStorage
//     localStorage.setItem('citySearches', JSON.stringify(citySearches));
//   }
  
//   // Function to display recent city searches
//   function displayCitySearches() {
//     // Retrieve the city searches from localStorage
//     let citySearches = JSON.parse(localStorage.getItem('citySearches')) || [];
  
//     // Display the city searches on the webpage
//     citySearches.forEach(city => {
//       // Display each city in the desired format (e.g., as a list item)
//       // Example: document.getElementById('recent-searches').innerHTML += `<li>${city}</li>`;
//     });
//   }
// searchBtn.addEventListener('click', function (event) {
//     event.preventDefault()
//     let city = searchBox.value;

// });
    

        // Save and display recent searches

        // Define an array to store the recent searches
        // let inputCity = [];

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
