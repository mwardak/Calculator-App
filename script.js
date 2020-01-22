// global variables
let firstOperand = null;
let secondOperand = null;
let operation = null;

// Click eventlistner for decimal button
let decimalButton = document.getElementById("decimal");
decimalButton.addEventListener("click", function() {
  setDisplay(includeDecimal());
});

// Click eventlistner for equals button
let equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", function(e) {
  setDisplay(performEquation());
});

// Click event listner for clear button
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(e) {
  
    setDisplay("0");
    firstOperand = null;
    secondOperand = null;
    operation = null;
  
});

// Click event listner for operator buttons
let operatorButtons = document.querySelectorAll(".operators");
for (let i = 0; i < operatorButtons.length; i++) {
  let operationButton = operatorButtons[i];
  operationButton.addEventListener("click", function(e) {
    
      if (operation !== null) {
        firstOperand = performEquation();
        setDisplay(firstOperand);
        secondOperand = null;
      }

      operation = e.target.value;
    
  });
}

// Click event listner for numbers
let numbers = document.querySelectorAll(".numbers");
for (let i = 0; i < numbers.length; i++) {
  let numberButton = numbers[i];
  numberButton.addEventListener("click", function(e) {
    if (operation !== null) {
      setSecondOperand(e.target.value);
      setDisplay(secondOperand);
    } else {
      setFirstOperand(e.target.value);
      setDisplay(firstOperand);
    }
  });
}



function setDisplay(args) {
  let screen = document.getElementById("screen");
  screen.value = args;
}

// include decimal with operation
function includeDecimal() {
  if (operation === null) {
    return (firstOperand += ".");
  }
  if (operation !== null) {
    return (secondOperand += ".");
  }
}

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
