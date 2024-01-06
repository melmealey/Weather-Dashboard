
//variables
const APIKey = 'ef2e17d0ac82b47460af0e3eef68995c';
const city = '';
const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


const searchBtn = document.getElementById('searchBtn');

const saveSearch = () => {
  const input = {
    search: searchBox.value,
  }
  console.log('click');

const GetInfo = () => {
    let searchBox = document.getElementById('searchBox');
    let locationName = document.getElementById('locationName');
    locationName.innerHTML ='--'+newName.value+'--';
}

fetch ('http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;')
.then (response => response.json())
.then (data => {
    for (i = 0; i <5; i++){
        document.getElementById ('day')
    }
})
}



searchBtn.addEventListener('click', function() {
    console.log('Button clicked');
    saveSearch();
  });



//   fetch(queryURL)


// searchBtn.addEventListener('click', saveSearch);

// //Save and display scores
// function saveHighScore(score) {
//     const user = {
//         initial: initialInput.value,
//         score: time.textContent
//     }
//     userScores.push(user)
//     localStorage.setItem("userScores", JSON.stringify(userScores));
//     initialContainer.classList.add("hide");
//     saveHighScoreContainer.classList.remove("hide");
//     displayHighScore()
// }
// function displayHighScore() {
//     scoreList.textContent = ""
//     for (let i = 0; i < userScores.length; i++) {
//         var li = document.createElement("li")
//         li.textContent = userScores[i].initial + " - " + userScores[i].score
//         scoreList.appendChild(li);

//     }
// }




