var wordOptions = ["bills", "giants", "redskins", "cowboys", "falcons", "packers", "dolphins"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var correctLetters = [];
var wrongLetters = [];
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersinWord = selectedWord.split("");
	numBlanks = lettersinWord.length;

	//Reset
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	for (var i=0; i<numBlanks; i++){
		blanksAndSuccesses.push("_");
	}

	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;

	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}


function checkLetters(letter) {
	var isLetterInWord = false;
	for (var i=0; i<numBlanks; i++){
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}
	if(isLetterInWord) {
		for (var i=0; i<numBlanks; i++) {
			if (selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}

	else {
		wrongLetters.push(letter);
		guessesLeft--;
	}

	console.log(blanksAndSuccesses);
}

function roundComplete() {
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + guessesLeft);

	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");

	if (lettersinWord.toString() == correctLetters.toString()){
		winCount++;
		alert("You Won!!");

		document.getElementById("winCounter").innerHTML = winCount;

		startGame();
	}

	else if (guessesLeft == 0) {
		lossCount++;
		alert("Youlost!");

		document.getElementById("lossCounter").innerHTML = lossCount;

		startGame();
	}
}


document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	console.log(letterGuessed)
}

