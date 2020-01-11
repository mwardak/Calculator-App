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
let decimal = document.getElementById("decimal")

function performEquation(){
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

equals.addEventListener("click", function(e) {
  // do a math operation using first and second operand
  // display the result
result.value = performEquation();
 

});
// loop through operators and save it in a const
for (let i = 0; i < operators.length; i++) {
  let operationButton = operators[i];
  operationButton.addEventListener("click", function(e) {
    if (operationButton) {

      if (operation !== null) {
        firstOperand = performEquation();
        result.value = firstOperand; 
        secondOperand = null;
      }

      operation = e.target.value;
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
