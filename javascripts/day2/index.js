var student = {
    id: 1,
    name: "Luat",
};

console.log("student: ", student);
console.log("student id: ", student.id);
console.log("student name: ", student.name);

var number;
console.log("number: ", number);
// console.log("main");

// If - condition
console.log("------------ If ---------------");

// var value = prompt("Enter a number: ", 0);
var value = 0;
var number = Number(value);
console.log("number: ", number);

// var condition = (number % 2 == 0);
// if (condition) {
//     console.log("True");
// }
var month = number;
// if (month == 1 || month == 2 || month == 3) {
//     console.log("Spring");
// }
if (month > 12 || month < 1) {
    console.log("Unknow");
} else if (month >= 1 && month <= 3) {
    console.log("Spring");
} else if (month <= 6) {
    console.log("Summer");
} else if (month <= 9) {
    console.log("Autumn");
} else if (month <= 12) {
    console.log("Winter");
}
// else {
//     console.log("Unknow");
// }
console.log("------------- Switch case ---------------");
// Switch case
switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("Spring");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Summer");
        break;
}

// Loop
// i++, ++i <=> i = i + 1
// var i;
// for (var i = 1; i <= 3; i++) {
//     console.log("Round: ", i);
// }
// console.log("I: ", i);

// for (var i = 0; i < 3; i++) {
//     console.log("Round: ", i + 1);
// }

// var i = 1;
// while (i <= 10) {
//     console.log("Round: ", i);
//     i++;
// }

// Enter valid number

// while(condition) <=> for(;condition;) {}

// var value = prompt("Enter a number: ", 0);
// var number = Number(value);

// if (Number.isNaN(number)) {
//     console.log("Nan");
// }

// while (Number.isNaN(number)) {
//     value = prompt("Enter a number: ", 0);
//     number = Number(value);
// }

// do {
//     var value = prompt("Enter a number: ", 0);
//     var number = Number(value);
// } while (Number.isNaN(number));

console.log("Number: ", number);
// check prime number - kiem tra so nguyen to
// prime la so chi chia het cho 1 va chinh no (except 1)
// number n
// tao ra 1 biến kiểm tra: check
// lap tu 2 => n -1
// neu n % 2 == 0 => check = false
// !check khong phai la so nguyen to
// else => so nguyen to
// Math.sqrt(n) <=> can bac 2
var isPrime = true; // true <-> prime number
for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % 2 == 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(number, "is prime number");
} else {
    console.log(number, "is not prime number");
}
// diff way
// var count = 0;
// for (var i = 1; i <= number; i++) {
//     if (number % i == 0) {
//         count++;
//         break;
//     }
// }
// if (count == 2) {
//     console.log(number, "is prime number");
// } else {
//     console.log(number, "is not prime number");
// }

// for (var i = 0; i < 100; i++) {
//     for (var j = 0; j < 100; j++) {
//         // console.log("I, j", i, j);
//         for (var k = 0; k < 100; k++) {
//             console.log("i,j,k:", i, j, k);
//         }
//     }
// }

// Functions
console.log("------------- Functions ----------------");
// function isPrimeNumber() {

// }

function hello(name, introduce) {
    console.log(" Hello ", name, ". ", introduce);
    return true;
}

// hello("World", "My name is Luat");

var result = hello("Class", "My name is Sheila");
console.log(result);

// function check prime number
function isPrimeNumber(number) {
    var isPrime = true; // true <-> prime number
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % 2 == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

if (isPrimeNumber(5)) {
    console.log("5 is prime number");
}

if (isPrimeNumber(8)) {
    console.log("8 is prime number");
} else {
    console.log("8 is not a prime number");
}

// scope function
console.log("------------ Scope Function --------------");
function changeValue() {
    name = "Thang";
}

var name = "Kien";
changeValue(name);

console.log("name: ", name);
