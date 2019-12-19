//  let btn_9 = document.getElementById("btn_9");

//  let decimal = document.querySelector(".decimal");

// queryselectors and getelementbyID

let wrap = document.getElementById("wrap");
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let result = document.getElementById("result");
let clear = document.getElementById("clear");
let equals = document.getElementById("equals");

// loop through operators and numbers and save it in a const

for (let i = 0; i < operators.length; i++) {
  const compute = operators[i];
  console.log(compute);

  compute.addEventListener("click", function(e) {
    if (result.value = compute) {
        result.value = null;
    } else {
      
    }
    
  });
}

for (let i = 0; i < numbers.length; i++) {
  const btns = numbers[i];

  btns.addEventListener("click", function(e) {
    // check if display is equal to zero

    if (result.value === "0") {
      // if it is, then set the display equal to the button's value
      result.value = e.target.value;
      // else display more than double digits +
    } else { 
      result.value += e.target.value;
    }
  
    // if (result.value) 
    //     equals === e.target.value;
    // } else {
      
    // }

  });
}

// clear button

clear.addEventListener("click", function(e) {
  if (clear) {
    result.value = "0";
  }
});
