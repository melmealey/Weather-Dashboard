const APIKey = 'ef2e17d0ac82b47460af0e3eef68995c';
const searchBox = document.getElementById('searchBox');
const day = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const searchBtn = document.getElementById('searchBtn');

// let locationIcon = document.querySelector('.weather-icon');
// const {icon} = data.weather[0];
// locationIcon.innerHTML = <img src="icons/${icon}.png">;

const saveSearch = () => {
  const city = searchBox.value;
  localStorage.setItem('lastSearch', city);
  console.log('click');
}

const GetInfo = () => {
    let locationName = document.getElementById('locationName');
    locationName.innerHTML = '--' + searchBox.value + '--';
  
    const city = searchBox.value;
// const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
  const queryURL ="http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=ef2e17d0ac82b47460af0e3eef68995c";
    fetch(queryURL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
  
        for (i = 0; i < 5; i++) {
          const icon = data.weather[i].icon;
          const iconURL = "http://openweathermap.org/img/w/10d.png";
          document.getElementById('img' + (i + 1)).src = iconURL;
        }
      });
  };

const weekDay = () => {
  if (day + d.getDay() > 6)
    return day + d.getDay() - 7;
  else {
    return day + d.getDay();
  }
}

searchBtn.addEventListener('click', function() {
  saveSearch();
});