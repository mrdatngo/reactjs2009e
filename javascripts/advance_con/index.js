// paramters

function sum() {
    console.log("arguments: ", arguments);
    // let total = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     console.log(arguments[i]);
    //     total += arguments[i];
    // }
    // return total;
    // arguments is array-like object, tương tự
    // let parameters = {
    //     0: 3,
    //     1: 4,
    //     length: 2
    // }
    // return Array.from(arguments).reduce((a, b) => a + b);
    return Array.from(arguments).reduce(function (a, b) {
        return a + b;
    });
}

function total(type, ...numbers) {
    if (type === "ODD") {
        return numbers.reduce((a, b) => (b % 2 === 1 ? a + b : a), 0);
    } else if (type === "EVEN") {
        return numbers.reduce((a, b) => (b % 2 === 0 ? a + b : a), 0);
    } else {
        return numbers.reduce((a, b) => a + b);
    }
}

console.log("Sum: ", sum(5, 6, 8));
console.log("Total: ", total("TOTAL", 5, 6, 8));

// apply, call, bind

let person = { name: "Luat" };

function sayPure(greeting) {
    console.log(greeting + "!");
}

function say(greeting) {
    console.log(greeting + "!, " + this.name);
}

let sayBind = say.bind(person);
sayBind("Hi, Good morning");

say.call(null, "Hi, Good morning");
say.call(person, "Hi, Good morning");

// sayPure.call(null, "Good morning");
// sayPure("Good morning");

say.apply(person, ["Hi, Good morning"]);

// Closure - ung dung trong debounce
function increase() {
    let sumary = 0;

    return function () {
        return ++sumary;
    };
}

increaseClosure = increase();

console.log("increase: ", increaseClosure());
console.log("increase: ", increaseClosure());
console.log("increase: ", increaseClosure());
