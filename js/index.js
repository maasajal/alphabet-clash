function handleKayBoardKeyUpEvent(event) {
  const playerPressed = event.key;
  const currentAlphabet = document.getElementById("current-alphabet").innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  if (expectedAlphabet === playerPressed) {
    console.log("You got Point");
    removeBgColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you lost");
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
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
