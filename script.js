// global variables
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

equals.addEventListener("click", function(e) {
  // do a math operation using first and second operand
  // display the result

  // if (operation !== null) {
  //   equals = parseFloat(firstOperand) x parseFloat(secondOperand);
  //   result.value = equals;
  // }

  // if (operation !== null) {
  //   equals = parseFloat(firstOperand) / parseFloat(secondOperand);
  //   result.value = equals;
  // }
  if (operation !== null) {
    equals = parseFloat(firstOperand) + parseFloat(secondOperand);
    result.value = equals;
  }

  // if (operation !== null) {
  //   equals = parseFloat(firstOperand) - parseFloat(secondOperand);
  //   result.value = equals;
  // }

});
// loop through operators and save it in a const
for (let i = 0; i < operators.length; i++) {
  let operationButton = operators[i];
  operationButton.addEventListener("click", function(e) {
    if (operationButton) {
      firstOperand = result.value;
      operation = firstOperand + secondOperand;
    }
  });
}

// loop through numbers and save it to a
for (let i = 0; i < numbers.length; i++) {
  let numberButton = numbers[i];
  numberButton.addEventListener("click", function(e) {
    
    if (operation !== null) {
      setSecondOperand(e.target.value);
      result.value = secondOperand;
    } else {
      
      setFirstOperand(e.target.value);
      result.value = firstOperand;
    }
  });
}
function setFirstOperand(number) {
  if (firstOperand === null) {
    firstOperand = number;
  } else {
    firstOperand += number;
  }
}
function setSecondOperand(number) {
  if (secondOperand === null) {
    secondOperand = number;
  } else {
    secondOperand += number;
  }
}
// clear button
clear.addEventListener("click", function(e) {
  if (clear) {
    result.value = "0";
    firstOperand = null;
    secondOperand = null;
    operation = null;
  }
});
