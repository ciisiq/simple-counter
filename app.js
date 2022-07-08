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
  console.log(element);
  element.classList.toggle("ligth-mode");
  counterNumber.classList.toggle("ligth-mode-text");
  resetButton.classList.toggle("ligth-mode-button");
  increaseButton.classList.toggle("ligth-mode-button");
  decreaseButton.classList.toggle("ligth-mode-button");
  h1Element.classList.toggle("ligth-mode-h1");
  toggleButton.classList.toggle("ligth-mode-button");

  if (element) {
    toggleButton.innerHTML = "Dark mode";
  } else {
    toggleButton.innerHTML = "Light mode";
  }
}
