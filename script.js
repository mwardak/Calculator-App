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
      firstOperand = result.value;
      operation = firstOperand + compute;
      
      // store the screen value as the first operand
      // RULE 2: Whatever number is on screen will be saved as either
      // a.) first operator
      // b.) second operator
      // PSEUDO CODE:
      // if there is currently a current operation
      // then store the current display in the second operand variable
      // else
      // store the current display in the first operand variable
    }
  });
}

for (let i = 0; i < numbers.length; i++) {
  let numberButton = numbers[i];

  numberButton.addEventListener("click", function(e) {
    // check if display is equal to zero

    if (operation !== null) {
      if (secondOperand === null) {
        secondOperand = e.target.value;
      } else {
        secondOperand += e.target.value;
      }
      result.value = secondOperand;
    } else {
      if (firstOperand === null) {
        firstOperand = e.target.value;
      } else {
        firstOperand += e.target.value;
      }

      result.value = firstOperand;
    }
  });
}

// clear button

clear.addEventListener("click", function(e) {
  if (clear) {
    result.value = "0";
  }
});
