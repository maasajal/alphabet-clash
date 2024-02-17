function handleKayBoardKeyUpEvent(event) {
  const playerPressed = event.key;
  console.log(playerPressed);
  if (playerPressed === "Escape") {
    gameOver();
  }
  const currentAlphabet = document.getElementById("current-alphabet").innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  if (expectedAlphabet === playerPressed) {
    const initialScore = getTextElementValueById("initial-score");
    const currentScore = initialScore + 1;
    setTextElementValueById("initial-score", currentScore);
    removeBgColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you lost");
    const currentLife = getTextElementValueById("current-life");
    const leftLife = currentLife - 1;
    setTextElementValueById("current-life", leftLife);
    if (leftLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKayBoardKeyUpEvent);

function continueGame() {
  const alphabet = getRandomAlphabet();
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;
  setBgColorById(alphabet);
}

function play() {
  // Hide all element and show play ground
  hideElementById("home-screen");
  showElementById("play-ground");
  hideElementById("score");
  // reset life & score
  setTextElementValueById("current-life", 5);
  setTextElementValueById("initial-score", 0);
  continueGame();
}
function gameOver() {
  hideElementById("play-ground");
  showElementById("score");
  const finalScore = getTextElementValueById("initial-score");
  console.log(finalScore);
  setTextElementValueById("final-score", finalScore);
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBgColorById(currentAlphabet);
}
