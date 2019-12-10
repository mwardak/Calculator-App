// create variables for numbers,operators, equals, decimal, clear
// let numbers = [0,1,2,3,4,5,6,7,8,9,];
// let operators = ["x", "/", "+", "-"];
// let equals = "=";
// let decimal = ".";
// let clear = "clear";
// let result = "";


// queryselector to get numbers,operators, equals, decimal, clear
 let numbers = document.querySelectorAll("numbers").value;
 const operators = document.querySelectorAll("operators");
 const equals = document.querySelector("equals");
 const decimal = document.querySelector("decimal");
 const clear = document.querySelector("clear");
 let result = document.querySelector("result")


// // create eventlistner for buttons
document.addEventListener("click", function(e){
    for (i = 0; i < numbers.length; i++) {
        result = numbers[i];
        console.log(result);
    // if (numbers){
       
    //    console.log(result);
   
    
}


    
    



});



