// object
var car = {
    name: "Fiat",
    model: 500,
    weight: 850,
    color: "White",
    wheel: {
        radius: 30,
        go: function () {
            console.log(car.name + "'s wheel starting rotation...");
        },
    },
    start: function () {
        console.log(this.name + " is starting...");
    },
    stop: function () {
        console.log(this.name + " is stopping...");
    },
    // that: this,
};

console.log("car.name: ", car.name);
car.start();
car.wheel.go();
// console.log("start: ");
console.log("---------------------------");
var name = "Global";
// console.log(this.name);
var car2 = {
    name: "Vinfast",
};
var carStart = car.start.bind(car2);
carStart();
car.start();

var carStop = car.stop;
carStop();
car.stop();
// console.log(car.that);
// function Object
// function Car(name, model, color) {
//     this.name = name;
//     this.model = model;
//     this.color = color;
// }

// var vinfastCar = new Car("Vinfast1", "2020", "white");
// console.log("vinfastCar: ", vinfastCar);
// var mecCar = new Car("Mec", "2021", "white");
// console.log("mecCar: ", mecCar);

// class - ES6
class Car {
    constructor(name, model, color) {
        this.name = name;
        this.model = model;
        this.color = color;
        // this.start = this.start.bind(this);
    }
    start = function () {
        console.log(this.name + "'s starting...");
    }.bind(this);

    stop = function () {
        console.log(this.name + "'s stopping...");
    };

    drive = () => {
        console.log(this.name + "'s running...");
    };
}

var myCar = new Car("MyCar", "2020", "black");
console.log("myCar: ", myCar);

var myCar2 = new Car("MyCar2", "2020", "white");
console.log("myCar: ", myCar2);

myCar.start();
myCar2.start();
myCar.drive();
myCar2.drive();
myCar.stop();
myCar2.stop();

// var myCarStart = myCar.start.bind(myCar);
var myCarStart = myCar.start;
var myCarDrive = myCar.drive;
var myCarStop = myCar.stop.bind(myCar);

console.log("-------------");
myCarStart();
myCarDrive();
myCarStop();

// inheritance javascript

class VinFastCar extends Car {
    constructor(name, model, color, type) {
        super(name, model, color);
        this.type = type;
    }
    drive = () => {
        console.log(this.name + " with type: " + this.type + "'s running");
    };
}

var myVinFastCar = new VinFastCar("MyVinFastCar", "2019", "blue", "Electric");
console.log("myVinFastCar: ", myVinFastCar);
myVinFastCar.drive();

class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
}

var hoang = new Student("Hoang", "University");
console.log("hoang: ", hoang);

//// callback
// setTimeout
// setInterval
// setTimeout(() => {
//     // alert("hello");
//     console.log("SET TIMEOUT");
// }, 1000);
// var interval = setInterval(() => {
//     // alert("hello");
//     console.log("hello");
// }, 1000);
// clearInterval(interval);
// console.log("MAIN THREAD");

// function eat(callback) {
//     setTimeout(() => {
//         console.log("Ate, done!");
//         callback();
//     }, 2000);
// }

// function reading() {
//     setTimeout(() => {
//         console.log("Read, done!");
//     }, 2000);
// }

// eat(reading);
// reading();
// Promise
console.log("---------------------------");
var ok = true;
var boughtCar = false;

var buyCar = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ok) {
                // console.log("Bought a car");
                resolve("Bought a Car!"); // FULFILL
            } else {
                // console.log("Not bought a car");
                reject("Not buy a Car!"); // REJECT
            }
        }, 2000);
    });
};

var findTheLove = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!boughtCar) {
                resolve("Found the love!");
            } else {
                reject("Can't not found!");
            }
        }, 2000);
    });
};

var haveChild = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Have child!");
        }, 2000);
    });
};

// buyCar()
//     .then((data) => {
//         console.log("Buy Car Promise done: ", data);
//         boughtCar = true;

//         // findTheLove()
//         //     .then((data) => {
//         //         console.log("Result find the love: ", data);
//         //     })
//         //     .catch((err) => {
//         //         console.log("err: ", err);
//         //     });
//         // promise chain
//         return findTheLove();
//     })
//     .then((data) => {
//         console.log("Data found the love: ", data);
//         return haveChild();
//     })
//     .then((data) => {
//         console.log("DATA have child: ", data);
//     })
//     .catch((err) => {
//         console.log("err: ", err);
//     });

console.log("MAIN THREAD");
// next day: async/await, hanle with DOM

async function doJobs() {
    console.log("Before buy Car");
    var data = await buyCar();
    console.log("DATA: ", data);
    console.log("After bought Car");
    return "Job done!";
}

console.log("Main thread");

doJobs().then((data) => {
    console.log("dojobs: ", data);
});

// demo
// document.getElementById("h3").style.backgroundColor = "red";
