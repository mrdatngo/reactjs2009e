let firstNumberElem = document.querySelector("#calculator .js-first-number");
let operatorElem = document.querySelector("#calculator .js-operator");
let secondNumberElem = document.querySelector("#calculator .js-second-number");
let btnResultElem = document.querySelector("#calculator .js-btn-result");
let inputResultElem = document.querySelector("#calculator .js-result");

// console.log(
//     firstNumberElem,
//     operatorElem,
//     secondNumberElem,
//     btnResultElem,
//     inputResultElem
// );

function calculate() {
    let firstNumber = Number(firstNumberElem.value);
    let secondNumber = Number(secondNumberElem.value);
    let operator = operatorElem.value;
    let result = 0;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber === 0) {
                alert("Second number must not equal 0");
            } else {
                result = firstNumber / secondNumber;
            }
    }
    // var total = firstNumber + secondNumber
    inputResultElem.value = result;
    // console.log(firstNumber, typeof(firstNumber), secondNumber, operator)
}

btnResultElem.addEventListener("click", calculate);
firstNumberElem.addEventListener("input", calculate);
secondNumberElem.addEventListener("input", calculate);
operatorElem.addEventListener("change", calculate);

// canvas
let canvas = document.getElementById("myCanvas");
// console.log("canvas: ", canvas);
let ctx = canvas.getContext("2d");
// draw a line
ctx.moveTo(0, 0);
ctx.lineTo(250, 500);
ctx.stroke();

// draw a circle
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

// draw a circle in the center
ctx.beginPath();
ctx.arc(250, 250, 50, Math.PI, (Math.PI * 3) / 2);
ctx.stroke();

// draw a text
ctx.font = "30px Arial";
ctx.fillText("Hello world", 250, 250);

// draw a image
ctx.drawImage(document.getElementById("player"), 50, 50, 100, 100);
