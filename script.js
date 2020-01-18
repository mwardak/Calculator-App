// global variables
let firstOperand = null;
let secondOperand = null;
let operation = null;

// queryselectors and getelementbyID
let wrap = document.getElementById("wrap");
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let screen = document.getElementById("screen");
let clear = document.getElementById("clear");
let equals = document.getElementById("equals");
let decimal = document.getElementById("decimal");

// include decimal with operation
function includeDecimal() {
  if (operation === null) {
    return (firstOperand += ".");
  }
  if (operation !== null) {
    return (secondOperand += ".");
  }
}

// Click eventlistner for decimal
decimal.addEventListener("click", function() {
  screen.value = includeDecimal();
});

// operation function
function performEquation() {
  if (operation === "x") {
    return parseFloat(firstOperand) * parseFloat(secondOperand);
  }

  if (operation === "/") {
    return parseFloat(firstOperand) / parseFloat(secondOperand);
  }
  if (operation === "+") {
    return parseFloat(firstOperand) + parseFloat(secondOperand);
  }
  if (operation === "-") {
    return parseFloat(firstOperand) - parseFloat(secondOperand);
  }
}

// Click eventlistner for equals
equals.addEventListener("click", function(e) {
  screen.value = performEquation();
});
// Loop through operators and save it in a const
for (let i = 0; i < operators.length; i++) {
  let operationButton = operators[i];
  operationButton.addEventListener("click", function(e) {
    if (operationButton) {
      if (operation !== null) {
        firstOperand = performEquation();
        screen.value = firstOperand;
        secondOperand = null;
      }

      operation = e.target.value;
    }
  });
}

// Click event listner for numbers. Loop through numbers. set first and second operand
for (let i = 0; i < numbers.length; i++) {
  let numberButton = numbers[i];
  numberButton.addEventListener("click", function(e) {
    if (operation !== null) {
      setSecondOperand(e.target.value);
      screen.value = secondOperand;
    } else {
      setFirstOperand(e.target.value);
      screen.value = firstOperand;
    }
  });
}

// First operand
function setFirstOperand(number) {
  if (firstOperand === null) {
    firstOperand = number;
  } else {
    firstOperand += number;
  }
}

// Second operand
function setSecondOperand(number) {
  if (secondOperand === null) {
    secondOperand = number;
  } else {
    secondOperand += number;
  }
}
// Click event listner for clear
clear.addEventListener("click", function(e) {
  if (clear) {
    screen.value = "0";
    firstOperand = null;
    secondOperand = null;
    operation = null;
  }
});
