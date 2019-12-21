//  let btn_9 = document.getElementById("btn_9");

//  let decimal = document.querySelector(".decimal");
let firstOperand = null;
let secondOperand = null;
let operation = null;

// queryselectors and getelementbyID

let wrap = document.getElementById("wrap");
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let result = document.getElementById("result");
let clear = document.getElementById("clear");
let equals = document.getElementById("equals");

// loop through operators and numbers and save it in a const

for (let i = 0; i < operators.length; i++) {
  let compute = operators[i];

  compute.addEventListener("click", function(e) {
    if (compute) {
      // store the screen value as the first operand
      firstOperand = result.value;
      console.log(firstOperand);
      // update the operator to be the current operation
      operation = firstOperand + compute;
      equals = operation;
      console.log(equals);
    }
  });
}

for (let i = 0; i < numbers.length; i++) {
  let btns = numbers[i];

  btns.addEventListener("click", function(e) {
    // check if display is equal to zero

    if (result.value === "0") {
      // if it is, then set the display equal to the button's value
      result.value = e.target.value;
      secondOperand = result.value;

      // else display more than double digits +
    } else {
      result.value += e.target.value;
    }
  });
}

// clear button

clear.addEventListener("click", function(e) {
  if (clear) {
    result.value = "0";
  }
});
