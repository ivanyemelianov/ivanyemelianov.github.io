let hp = 3;
let sentCount = 0;

let resultEl = document.getElementById("result");
let transEl = document.getElementById("translation");
let hpEl = document.getElementById("hp");
let lwEl = document.getElementById("lw");
let parts = document.getElementById("parts");
let nextWrapper = document.getElementById("nextWrapper");
const list = document.getElementById("list");
const insert = document.getElementById("insert");

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

function nextGroup() {
    randomSent = getRandomKeyFromMap(dict);
    transEl.innerHTML = randomSent;
    splitToButtons(dict.get(randomSent));
    transEl.style.display = "block";
    insert.style.display = "block";
    nextWrapper.style.display = "none";
    resultEl.innerHTML = "";

    const listItems = list.getElementsByTagName("li");

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].innerHTML = "";
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            
          // Find the first empty list item
          const listItem = Array.from(list.getElementsByTagName("li")).find(li => li.textContent.trim() === "");
          console.log(1);
      
          // If a vacant list item exists, add the button's text to it
          if (listItem) {
            console.log(2);
            listItem.textContent = this.textContent;
          }
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

// Add event listeners to the buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      // Find the first empty list item
      const listItem = list.querySelector("li:not(.filled)");
  
      // If a vacant list item exists, add the button's text to it
      if (listItem) {
        listItem.textContent = this.textContent;
        listItem.classList.add("filled");
      }
      this.style.display = "none";
      checkSent(dict.get(randomSent));
    });
  }

function checkSent(sent) {
    let wordsInSent = sent.split(" ").length;
    const listItems = list.getElementsByTagName("li");
    let content = "";
    
    //let wordsInInput = sentenceContainer.innerText.split(" ").length;
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].textContent !== '')
        {
            if (i === listItems.length - 1)
            {     
                content += " " + listItems[i].textContent;
            }
            else if (i === listItems.length - 2)
            {
                content = content.substring(0, content.length - 1);
                content += " " + listItems[i].textContent;
            }
            else {
                content += listItems[i].textContent + " ";
            }
        }
    }
/*
    function removeChar(str, char) {
        const regex = new RegExp(char, 'g');
        return str.replace(regex, '');
    }
    let clearInput = removeChar(content, '-');*/
    let wordsInInput = content.split(" ").length;

    if (wordsInInput === wordsInSent)
    {
        console.log(1);
        if (sent === content) {
            changeResult("Correct!");
        } else {
            changeResult(sent);
            hp--;
            hpEl.innerHTML = hp;
        }

        transEl.style.display = "none";
        insert.style.display = "none";
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