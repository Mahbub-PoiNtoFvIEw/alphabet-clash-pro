function play(){
    // hide home screen calling another function from utility.js
    hideElementById('home-screen');

    // show playGround calling another function from utility.js
    showElementById('play-ground');
    // calling function
    continueGame();
}

function continueGame(){
    //step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color 
    setBackgroundColorById(alphabet);
}