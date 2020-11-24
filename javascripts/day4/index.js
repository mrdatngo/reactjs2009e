// Arrays
var fruits = new Array("orange", "banana", "apple");
var numbers = [1, 3, 4, 5, 2];
var mix = [1, "orange", "banana", 2, true, { name: "aplle" }, []];

var array2d = [
    [1, 3, 4, 5],
    [3, 2, 5],
    [6, 0, 10],
];

// get length return number of element in array
console.log("length array2d: ", array2d.length);
console.log("length array2d: ", array2d[0].length);

// methods of array
var studentsName = [];

// add/remove last index
studentsName.push("Luat");
console.log("Luat register: ", studentsName);
studentsName.push("Kien");
console.log("Kien register: ", studentsName);
studentsName.push("Hoang");
console.log("Kien register: ", studentsName);
studentsName.push("John");
console.log("John register: ", studentsName);

var nameOfJohn = studentsName.pop("John");
console.log("John unregister: ", studentsName, nameOfJohn);

// add/remove first index
studentsName.unshift("Sheila");
console.log("Sheila register: ", studentsName);

studentsName.unshift("Duong");
console.log("Duong register: ", studentsName);

var nameOfDuong = studentsName.shift("Duong");
console.log("Duong unregister: ", studentsName, nameOfDuong);

// add/remove in the middle
studentsName.splice(2, 0, "Duong", "Marry", "David");
console.log("Duong, Marry, David register: ", studentsName);

studentsName.splice(2, 1);
console.log("Duong unregister: ", studentsName);

studentsName.splice(2, 1, "Marroon5");
console.log("Marry unregister, Marroon5 register ", studentsName);

// indexOf, lastIndexOf, reverse(), slice(), join()
var pos = studentsName.indexOf("Luat");
console.log("Index of Luat: ", pos);
var pos = studentsName.lastIndexOf("Luat");
console.log("Index of Luat: ", pos);

// var mixesArray = studentsName.slice(2);
// console.log("mixesArray: ", mixesArray);

// last Elem of array
// var lastElem = studentsName[studentsName.length - 1];
// console.log("lastElem: ", lastElem);

// var mixesArray = studentsName.slice(2, 4);
// console.log("mixesArray: ", mixesArray);

// Copy an array
var mixesArray = studentsName.slice(0);
console.log("mixesArray: ", mixesArray);

mixesArray.push(5);
mixesArray.push(6);
mixesArray.push({ name: "Long" });
var khoa = {
    name: "Khoa",
};
mixesArray.push(khoa);
console.log("mixesArray: ", mixesArray);

var find5 = mixesArray.indexOf(5);
console.log("find5: ", find5);

// object not compare by value, but compare by address
var findLong = mixesArray.indexOf({ name: "Long" });
console.log("findLong: ", findLong);

var findKhoa = mixesArray.indexOf(khoa);
console.log("findKhoa: ", findKhoa);

// dao nguoc
var newMixes = mixesArray.slice(0).reverse();
// newMixes[3] = 2;
console.log("newMixes: ", newMixes, "mixesArray", mixesArray);

// join
var studentsNameStr = studentsName.join(", ");
console.log("studentsNameStr: ", studentsNameStr);

var newMixesStr = newMixes.join(", ");
console.log("newMixesStr: ", newMixesStr);

// callback function
function hello(name) {
    console.log("Xin Chao, " + name);
}

function say(callback) {
    var name = "Tri";
    callback(name);
}

hello("Class");
say(hello);

// find, filter, map, reduce
console.log("studentsName: ", studentsName);

function findStudentCb(name) {
    console.log("name: ", name);
    return name === "David";
}

var studentName = studentsName.find(findStudentCb);
console.log("studentName: ", studentName);

// implement find of array
function myFind(cb) {
    for (let i = 0; i < studentsName.length; i++) {
        var result = cb(studentsName[i]);
        if (result) {
            return studentsName[i];
        }
    }
}

var myStudentName = myFind(findStudentCb);
console.log("myStudentName: ", myStudentName);

console.log("mixesArray: ", mixesArray);
var findLong = mixesArray.find((item) => {
    // console.log("item", item, "typeof(item)", typeof item);
    if (typeof item === "object") {
        return item.name === "Long";
    }
});
console.log("findLong: ", findLong);

// filter
var filterNamesExistedA = studentsName.filter((name, index, arr) => {
    console.log("FILLLLER: ", name, index, arr);
    return name.includes("a");
});
console.log("filterNamesExistedA: ", filterNamesExistedA);

var students = [
    {
        firstName: "Nguyen",
        lastName: "Ngoc",
        class: "REACTJS",
    },
    {
        firstName: "Nguyen Thi Thuy",
        lastName: "Duong",
        class: "REACTJS",
    },
    {
        firstName: "Bui",
        lastName: "Khoa",
        class: "REACTJS",
    },
];

var studentsNguyen = students.filter((student) => {
    return student.firstName.split(" ")[0] === "Nguyen";
});

console.log("studentsNguyen: ", studentsNguyen);

// map
var studentsFullname = students.map((student) => {
    return {
        fullName: student.firstName + " " + student.lastName,
        class: student.class,
    };
});
console.log("studentsFullName: ", studentsFullname);

// reduce
var numbers = [5, 2, 1, 6, 3, 2];

var total = numbers.reduce((sum, value) => {
    // console.log("sum:", sum, "value:", value);
    // return sum + value;
    var result = sum;
    if (value % 2 === 1) {
        result += value;
    }
    return result;
    // return value % 2 === 1 ? sum + value : sum;
}, 0);
console.log("total: ", total);

// sort - sap xep
var numbers = [1, 3, 5, 2, 6];
var names = ["Hoang", "Kien", "sheila", "Thang", "an"];

numbers.sort();
// names.sort();
console.log("numbers: ", numbers);
// console.log("names: ", names);

names.sort((name1, name2) => {
    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();
    if (name1 > name2) {
        return 1;
    } else if (name1 < name2) {
        return -1;
    }
    return 0;
});
console.log("names: ", names);
