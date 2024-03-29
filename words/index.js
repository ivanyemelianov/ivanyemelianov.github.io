let hp = 3;
let wordCount = 0;

// Get the elements
let resultEl = document.getElementById("result");
let wordEl = document.getElementById("word");
let hpEl = document.getElementById("hp");
let lwEl = document.getElementById("lw");
let wordWrapper = document.getElementById("word-wrapper");
let input = document.getElementById("input");
let inputWord = document.getElementById("inputWord");
let nextWrapper = document.getElementById("nextWrapper");
let randomWord = getRandomKeyFromMap(dict);

//On page load
document.addEventListener('DOMContentLoaded', changeWord());

//Display result
function changeResult(result) {
    resultEl.innerHTML = result;
}

//Change word
function changeWord() {
    wordEl.innerHTML = randomWord;
}

//Display next word
function nextWord() {
    randomWord = getRandomKeyFromMap(dict);
    wordEl.innerHTML = randomWord;
    wordWrapper.style.display = "block";
    input.style.display = "block";
    nextWrapper.style.display = "none";
    inputWord.value = "";
    resultEl.innerHTML = "";

}

//Lose win check
function loseWinCheck() {
    if (hp <= 0)
    {
        const result = window.confirm("You lost");
      
        // If the user clicks "OK", reload the page
        if (result) {
          window.location.reload();
        }
    }
    if (wordCount >= 10)
    {
        const result = window.confirm("You won");
      
        // If the user clicks "OK", reload the page
        if (result) {
          window.location.reload();
        }
    }
}

//Compare words
function compareWords() {
    // Get the input word and the word to compare it to
    let inputWord = document.getElementById("inputWord").value.toLowerCase();
    let compareWord = dict.get(randomWord);

    // Compare the input word to the word to compare it to
    if (inputWord === compareWord) {
        changeResult("Correct!");
    } else {
        changeResult(compareWord);
        hp--;
        hpEl.innerHTML = hp;
    }

    wordCount++; 
    lwEl.innerHTML = wordCount;

    wordWrapper.style.display = "none";
    input.style.display = "none";
    nextWrapper.style.display = "block";


    loseWinCheck();
}

function getRandomKeyFromMap(map) {
    // Convert the map keys to an array
    const keysArray = Array.from(map.keys());
  
    // Generate a random index within the bounds of the array length
    const randomIndex = Math.floor(Math.random() * keysArray.length);
  
    // Retrieve the key at the randomly generated index
    const randomKey = keysArray[randomIndex];
  
    // Return the random key
    return randomKey;
  }

