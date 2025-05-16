let mistakes = 0;
let correct = 0;
let wordCount = 0;

// Get the elements
let resultEl = document.getElementById("result");
let wordEl = document.getElementById("word");
let hpEl = document.getElementById("hp");
let lwEl = document.getElementById("lw");
let wordCountEl = document.getElementById("wordCount");
let wordWrapper = document.getElementById("word-wrapper");
let nextWrapper = document.getElementById("nextWrapper");
let options = document.getElementById("options");

const buttonElems = document.getElementsByClassName("option");

//On page load

//Display result
function changeResult(result) {
    resultEl.innerHTML = result;
}

//game loop
(async () => {
for (const [key, value] of dict) {
    let word = key;
    let buttons = [value, dict.get(getRandomKeyFromMap(dict)), dict.get(getRandomKeyFromMap(dict)), dict.get(getRandomKeyFromMap(dict))];

    wordEl.innerHTML = key;
    shuffleArray(buttons);
    for (let i = 0; i < buttonElems.length; i++) {
        buttonElems[i].innerText = buttons[i];
    }

    for (let i = 0; i < buttonElems.length; i++) {
        buttonElems[i].addEventListener("click", function() {
            const buttonWord = dict.get(key);
            const buttonText = this.innerText;
            if (buttonText === buttonWord) {
                changeResult("Correct!");
                correct++;
                lwEl.innerHTML = correct; 
            } else {
                changeResult(buttonWord);
            }

            wordWrapper.style.display = "none";
            options.style.display = "none";
            nextWrapper.style.display = "block";
        });
    }

    wordCount++;
    wordCountEl.innerHTML = wordCount;

    await waitForButtonClick(); 
}
})();

if (wordCount >= 900) {
    wordWrapper.style.display = "none";
    options.style.display = "none";
    nextWrapper.style.display = "none";
    resultEl.innerHTML = "";
    
    if (correct > 700) {
        document.getElementById("finalMessage").innerHTML = "You did great! Move on to level A2"
        document.getElementById("finalMessage").style.display = "block";
    } else {
        document.getElementById("finalMessage").innerHTML = "Good effort!"
        document.getElementById("finalMessage").style.display = "block";
    }

    document.getElementById("stats").innerHTML = correct + "/899"
    document.getElementById("statWrapper").style.display = "block" 
}



function nextWord() {
    wordWrapper.style.display = "block";
    options.style.display = "block";
    nextWrapper.style.display = "none";
    resultEl.innerHTML = "";
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}
// word inner html
// get random translations
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

function waitForButtonClick() {
    return new Promise((resolve) => {
      const button = document.getElementById('next');
      const handleClick = () => {
        button.removeEventListener('click', handleClick); // Remove listener to prevent multiple triggers
        resolve(); // Resolve the promise, allowing the loop to continue
      };
      button.addEventListener('click', handleClick);
    });
  };