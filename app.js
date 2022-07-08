const counterNumber = document.querySelector(".counter");
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const increaseButton = document.querySelector(".increase");
const h1Element = document.querySelector("h1");
const toggleButton = document.querySelector(".toggle");

let counter = 0;

function increaseNumber() {
  counterNumber.innerHTML = counter = counter + 1;
}

function decreaseNumber() {
  counterNumber.innerHTML = counter = counter - 1;
}

function resetNumber() {
  counterNumber.innerHTML = counter = 0;
}

increaseButton.addEventListener("click", increaseNumber);
decreaseButton.addEventListener("click", decreaseNumber);
resetButton.addEventListener("click", resetNumber);

function goTolight() {
  const element = document.body;
  element.classList.toggle("light-mode");
  counterNumber.classList.toggle("light-mode-text");
  resetButton.classList.toggle("light-mode-button");
  increaseButton.classList.toggle("light-mode-button");
  decreaseButton.classList.toggle("light-mode-button");
  h1Element.classList.toggle("light-mode-h1");
  toggleButton.classList.toggle("light-mode-button");

  if (toggleButton.innerHTML === "Light mode") {
    toggleButton.innerHTML = "Dark mode";
  } else {
    toggleButton.innerHTML = "Light mode";
  }
}
