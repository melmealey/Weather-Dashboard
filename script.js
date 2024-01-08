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

const GetInfo = async (url) => {
    const response = await fetch (url);
    const data = await response.json();
    console.log (data);

const container =document.getElementById ('weatherContainer');

data.forEach((city) => {
    const locationName = document.createElement ('div');
    locationName.innerHTML = `$city.name`;
    container.appendChild(locationName);

    for (let i = 0; i <city.temp.length; i++) {
        const temp = document.createElement ('div');
        temp.innerHTML = `$city.temp`;
        container.appendChild(temp);

    }

    for (let i = 0; i <city.humidity.length; i++) {
        const humidity = document.createElement ('div');
        temp.innerHTML = `$city.humidity`;
        container.appendChild(humidity);
        
    }

    for (let i = 0; i <city.windSpeed.length; i++) {
        const windSpeed = document.createElement ('div');
        temp.innerHTML = `city.wind`;
        container.appendChild(windSpeed);
        
        console.log (data.temp)
        console.log (data.humidity)
        console.log (data.windSpeed)


    }

});
    
};

GetInfo(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=ef2e17d0ac82b47460af0e3eef68995c`);





// const GetInfo = () => {
//     let locationName = document.getElementById('locationName');
//     locationName.innerHTML = '--' + searchBox.value + '--';

//     const queryURL1 = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=ef2e17d0ac82b47460af0e3eef68995c`;
//     fetch(queryURL1)
//         .then(response1 => response1.json())
//         .then(data1 => {

//             const lat = data1[0].lat;
//             const lon = data1[0].lon;

//             console.log(data1[0].lat);
//             console.log(data1[0].lon);

//             const queryURL2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=ef2e17d0ac82b47460af0e3eef68995c`;
//             fetch(queryURL2)
//                 .then(response2 => response2.json())
//                 .then(data2 => {
//                     console.log(data2);
//                 })
//         })

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

searchBtn.addEventListener('click', function () {
    saveSearch();
});


