let hp = 3;
let sentCount = 0;

let resultEl = document.getElementById("result");
let transEl = document.getElementById("translation");
let hpEl = document.getElementById("hp");
let lwEl = document.getElementById("lw");
let parts = document.getElementById("parts");
let nextWrapper = document.getElementById("nextWrapper");
let sentenceContainer = document.getElementById("sentence");

let randomSent = getRandomKeyFromMap(dict);

const buttons = document.getElementsByClassName("part");

document.addEventListener('DOMContentLoaded', changeSent());

function changeSent() {
    transEl.innerHTML = randomSent;
    splitToButtons(dict.get(randomSent));
}

function changeResult(result) {
    resultEl.innerHTML = result;
}

function nextSentence() {
    randomSent = getRandomKeyFromMap(dict);
    splitToButtons(dict.get(randomSent));
    transEl.style.display = "block";
    sentenceContainer.style.display = "block";
    nextWrapper.style.display = "none";
    resultEl.innerHTML = "";
    sentenceContainer.innerHTML = "";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            const buttonText = this.innerText;
            
            sentenceContainer.textContent += buttonText + " ";
            this.style.display = "none";
    
            checkSent(dict.get(randomSent));
        });
    }
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
    if (sentCount >= 5)
    {
        const result = window.confirm("You won");
      
        // If the user clicks "OK", reload the page
        if (result) {
          window.location.reload();
        }
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        const buttonText = this.innerText;
        
        sentenceContainer.textContent += buttonText + " ";
        this.style.display = "none";

        checkSent(dict.get(randomSent));
    });
}

function checkSent(sent) {
    let wordsInSent = sent.split(" ").length;
    let wordsInInput = sentenceContainer.innerText.split(" ").length;


    if (wordsInInput === wordsInSent)
    {
        if (sent === sentenceContainer.innerText) {
            changeResult("Correct!");
        } else {
            changeResult(sent);
            hp--;
            hpEl.innerHTML = hp;
        }

        transEl.style.display = "none";
        sentenceContainer.style.display = "none";
        nextWrapper.style.display = "block";
        sentCount++;
        lwEl.innerHTML = sentCount;

        loseWinCheck();
    }
}

function splitToButtons (sent) {
    const words = sent.split(" ");

    shuffleArray(words);

    words.forEach(word => {
        // Create a new button element
        const button = document.createElement('button');
        
        // Set the button's text content
        button.textContent = word;
        button.classList.add('part');
        
        // Append the button to the container
        parts.appendChild(button);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
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