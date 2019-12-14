// create variables for numbers,operators, equals, decimal, clear
// let numbers = [0,1,2,3,4,5,6,7,8,9,];
// let operators = ["x", "/", "+", "-"];
// let equals = "=";
// let decimal = ".";
// let clear = "clear";
// let result = "";

// queryselector to get numbers, operators, equals, decimal, clear
//  let btn_9 = document.getElementById("btn_9");
//  let equals = document.querySelector(".equals");
//  let decimal = document.querySelector(".decimal");
//  let clear = document.querySelector(".clear");

let wrap = document.getElementById("wrap");
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let result = document.getElementById("result");

for (let i = 0; i < operators.length; i++) {
  const compute = operators[i];

  compute.addEventListener("click", function(e) {
    result.value += e.target.value;
  });
}

for (let i = 0; i < numbers.length; i++) {
  const btns = numbers[i];

  btns.addEventListener("click", function(e) {
    // console.log(result.value);

    result.value += e.target.value;
  });
}

