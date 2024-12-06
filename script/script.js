function play(){
    // hide home screen calling another function from utility.js
    hideElementById('home-screen');
    hideElementById('final-score');
    // show playGround calling another function from utility.js
    showElementById('play-ground');
    // reset score and life
    setElementValueById('life',5);
    setElementValueById('score',0);
    // calling function
    continueGame();
}

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    // console.log('button press', playerPressed);

    // stop the game if pressed 'Esc' 
    if(playerPressed == 'Escape'){
        gameOver()
    }
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,expectedAlphabet);
    // check matched or not
    if(playerPressed === expectedAlphabet){
        // update score
        const currentScore = getElementValueById('score');
        const newScore =currentScore+1;
        // show score
        setElementValueById('score',newScore);
        
        // start a new round
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }else{
        const currentLife = getElementValueById('life');
        const newLife = currentLife - 1;
        setElementValueById('life',newLife);
        if(newLife === 0){
            gameOver();
        }
    }
}
// capture key press 'callback function'
document.addEventListener('keyup',handleKeyboardButtonPress);

function continueGame(){
    //step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color 
    setBackgroundColorById(alphabet);
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    const totalScore = getElementValueById('score');
    setElementValueById('game-score',totalScore);
    // clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColor(currentAlphabet);
}