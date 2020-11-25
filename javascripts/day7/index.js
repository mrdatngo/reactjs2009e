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
    let firstNumber = Number(firstNumberElem.value)
    let secondNumber = Number(secondNumberElem.value)
    let operator = operatorElem.value
    let result = 0
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber
            break;
        case "-":
            result = firstNumber - secondNumber
            break
        case "*":
            result = firstNumber * secondNumber
            break
        case "/":
            if (secondNumber === 0) {
                alert("Second number must not equal 0")
            } else {
                result = firstNumber / secondNumber
            }
    }
    // var total = firstNumber + secondNumber
    inputResultElem.value = result
        // console.log(firstNumber, typeof(firstNumber), secondNumber, operator)
}

btnResultElem.addEventListener("click", calculate)
firstNumberElem.addEventListener("input", calculate)
secondNumberElem.addEventListener("input", calculate)
operatorElem.addEventListener("change", calculate)