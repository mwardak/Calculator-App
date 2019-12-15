


//  let btn_9 = document.getElementById("btn_9");
//  let equals = document.querySelector(".equals");
//  let decimal = document.querySelector(".decimal");


// queryselectors and getelementbyID

let wrap = document.getElementById("wrap");
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let result = document.getElementById("result");
let clear = document.getElementById("clear");



// loop through operators and numbers and save it in a const

for (let i = 0; i < operators.length; i++) {
  const compute = operators[i];

  compute.addEventListener("click", function(e) {
    result.value += e.target.value;

    switch(operators){
        case '/':
      result.value = numbers / numbers;
          console.log(result.value);
          break;
        case '*':
         result.value = numbers * numbers;
        case '+': 
        result.value = numbers + numbers;
          break;
        case '-':
        result.value = numbers - numbers;
          break;
        case '=':
        result.value = "";
          break;
        }
    
  });
}

for (let i = 0; i < numbers.length; i++) {
  const btns = numbers[i];

  btns.addEventListener("click", function(e) {
  

    result.value += e.target.value;
  });
}

// clear button 

clear.addEventListener("click", function(e) {

    if (clear) {
        result.value = null;
    }
   
  });
