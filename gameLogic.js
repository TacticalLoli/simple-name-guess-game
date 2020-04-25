const wordList = ["jerome", "neena", "darion", "lou", "greg", "jordan",
    "jasmine", "stephen", "jacob", "adam", "rui", "luis"];

let chosenWord = "";

let lettersInChosenWord = [];

let numberBlanks = 0;

let successAndBlanks = [];

let wrongGuesses = [];

let guessedLetters = "";

let winCount = 0;

let lossCount = 0;

let guessesLeft = 9;


//functions 

//Start and Restart the game
 
let startGame = () => {
    guessesLeft = 9;

    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

    lettersInChosenWord = chosenWord.split("");

    numberBlanks = lettersInChosenWord.length;

    console.log(chosenWord);

    successAndBlanks = [];

    wrongGuesses = [];

    for (let i = 0; i < numberBlanks; i++) {
        successAndBlanks.push("_");
    }

    document.getElementById("guesses-left").innerHTML = guessesLeft;

    document.getElementById("word-blanks").innerHTML = successAndBlanks.join(" ");

    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

let checkLetters = (letter) => {
    let letterInWord = false;

    for (let i = 0; i < numberBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (let j = 0; j < numberBlanks; j++) {
            if (chosenWord[j] === letter) {
                successAndBlanks[j] = letter;
            }
        }
    }

    else {
        wrongGuesses.push(letter);

        guessesLeft--;
    }
}


let roundComplete = () => {
    document.getElementById("guesses-left").innerHTML = guessesLeft;

    document.getElementById("word-blanks").innerHTML = successAndBlanks.join(" ");

    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    if (lettersInChosenWord.toString() === successAndBlanks.toString()) {
        winCount++;

        alert("You win");

        document.getElementById("wins").innerHTML = winCount;

        startGame();
    }

    else if (guessesLeft === 0) {
        lossCount++

        alert("You lose");
        
        document.getElementById("losses").innerHTML = lossCount;

        startGame();
    }
}

startGame();

document.onkeyup = (e) => {
    guessedLetters = String.fromCharCode(e.which).toLowerCase();

    checkLetters(guessedLetters);

    roundComplete();
}