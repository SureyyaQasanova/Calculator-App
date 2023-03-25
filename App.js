const inputValue = document.querySelector(".number-box");
const clear = document.querySelector("#clear");
const buttons = document.querySelectorAll(".btn");
const del = document.querySelector(".del");
clear.addEventListener("click", () => {
  inputValue.value = "";
});
del.addEventListener("click", () => {
  inputValue.value = inputValue.value.toString().slice(0, -1);
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display(button.value);
  });
  function display(value) {
    let operators = [...document.querySelectorAll(".operator")].map(
      (opr) => opr.value
    );
    if (
        operators.includes(value) &&
        operators.includes(inputValue.value.charAt(inputValue.value.length - 1))
      ) { 
      inputValue.value =
        inputValue.value.substring(0, inputValue.value.length - 1) + value;
        console.log(inputValue.value);
    } else {
        inputValue.value += value;
    }
  }
});

function calculate() {
  inputValue.value = eval(inputValue.value);
}