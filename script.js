const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const clear = document.getElementById("clear");
const value = document.getElementById("value");
const error = document.getElementById("err");

let counter = 0;

increment.addEventListener("click", () => {
  counter++;
  value.textContent = counter;
  error.style.display = "none";
  decrement.disabled = false;
});

decrement.addEventListener("click", () => {
  if (counter === 0) {
    decrement.disabled = true;
  }
  if (counter > 0) {
    counter--;
    value.textContent = counter;
  } else {
    error.style.display = "block";
  }
});

clear.addEventListener("click", () => {
  counter = 0;
  value.textContent = counter;
});
