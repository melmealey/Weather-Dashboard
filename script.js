
//variables
let searchBox = document.getElementById('searchBox');
const searchBtn = document.getElementById('search');

const saveSearch = () => {
  const input = {
    search: searchBox.value,
  }
  console.log('click');

}
searchBtn.addEventListener('click', function() {
    console.log('Button clicked');
    saveSearch();
  });
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




