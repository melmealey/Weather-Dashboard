const APIKey = 'ef2e17d0ac82b47460af0e3eef68995c';
const searchBox = document.getElementById('searchBox');
const day = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const searchBtn = document.getElementById('searchBtn');
let city = searchBox.value;



// let locationIcon = document.querySelector('.weather-icon');
// const {icon} = data.weather[0];
// locationIcon.innerHTML = <img src="icons/${icon}.png">;

const saveSearch = () => {
    city = searchBox.value;
    localStorage.setItem('lastSearch', city);
    console.log('click');
}

const GetInfo = () => {
    let locationName = document.getElementById('locationName');
    locationName.innerHTML = '--' + searchBox.value + '--';



    const queryURL1 = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=ef2e17d0ac82b47460af0e3eef68995c`;
    fetch(queryURL1)
        .then(response1 => response1.json())
        .then(data1 => {

            const lat = data1.lat;
            const lon = data1.lon;

            console.log(data1[0].lat);
            console.log(data1[0].lon);

           

            const queryURL2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=ef2e17d0ac82b47460af0e3eef68995c`;
            fetch(queryURL2)
                .then(response2 => response2.json())
                .then(data2 => {
                        console.log(data2);
                    })
                })
           

            //         for (i = 0; i < 5; i++) {
            //           const icon = data1.weather[i].icon;
            //           const iconURL = "http://openweathermap.org/img/w/10d.png";
            //           document.getElementById('img' + (i + 1)).src = iconURL1;
            //         }
        };


const weekDay = () => {
    if (day + d.getDay() > 6)
        return day + d.getDay() - 7;
    else {
        return day + d.getDay();
    }
}

searchBtn.addEventListener('click', function () {
    saveSearch();
});


// Around line 27, where you have the data, you want to get the latitude and longitude from it.
// • You can see from the console.log that that will be under data[0].lat and data[0].lon , so you can do something like const lat = data[0].lat
// • Then, you want to make a second fetch() request, just like you made the first one using those and this url. The template literal uses variables ${lat} and ${lon}to send the actual numbers as the request.
// `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=PUTKEYHERE`
// • After that, you can do the same handling of the data with .then(response => reponse.json()) as you did in the first request. The data there will be actual weather data, I suggest using a console.log to look inside it and see how it's structured so you can get the actual weather data out