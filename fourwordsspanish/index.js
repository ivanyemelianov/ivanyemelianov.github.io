let hp = 3;
let wordCount = 0;

// Get the elements
let resultEl = document.getElementById("result");
let wordEl = document.getElementById("word");
let hpEl = document.getElementById("hp");
let lwEl = document.getElementById("lw");
let wordWrapper = document.getElementById("word-wrapper");
let nextWrapper = document.getElementById("nextWrapper");
let randomWord = getRandomKeyFromMap(dict);
let options = document.getElementById("options");

const buttons = document.getElementsByClassName("option");

let words = [dict.get(randomWord), dict.get(getRandomKeyFromMap(dict)), dict.get(getRandomKeyFromMap(dict)), dict.get(getRandomKeyFromMap(dict))];

//On page load
document.addEventListener('DOMContentLoaded', changeWord());

//Display result
function changeResult(result) {
    resultEl.innerHTML = result;
}

//Change word
function changeWord() {
    wordEl.innerHTML = randomWord;
    shuffleArray(words);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = words[i];
    }
}

//Display next word
function nextWord() {
    randomWord = getRandomKeyFromMap(dict);
    let newWords = [dict.get(randomWord), dict.get(getRandomKeyFromMap(dict)), dict.get(getRandomKeyFromMap(dict)), dict.get(getRandomKeyFromMap(dict))];
    wordEl.innerHTML = randomWord;
    shuffleArray(newWords);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = newWords[i];
    }
    wordWrapper.style.display = "block";
    options.style.display = "block";
    nextWrapper.style.display = "none";
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
    if (wordCount === 50)
    {
        const result = window.confirm("You won");
      
        // If the user clicks "OK", reload the page
        if (result) {
          window.location.reload();
        }
    }
}

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        const buttonWord = dict.get(randomWord);
        const buttonText = this.innerText;
    
        if (buttonText === buttonWord) {
            changeResult("Correct!");
        } else {
            changeResult(buttonWord);
            hp--;
            hpEl.innerHTML = hp;
        }

        wordCount++; 
        lwEl.innerHTML = wordCount;

        wordWrapper.style.display = "none";
        options.style.display = "none";
        nextWrapper.style.display = "block";


        loseWinCheck();
    });
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

  