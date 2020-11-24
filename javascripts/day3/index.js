// scope function
console.log("------------ Scope Function --------------");
// pass parameters by value
function changeValue(name) {
    name = "Thang";
    // var name = "TEST";
    console.log("name: ", name);
    // var number = 1;
}

var name = "Kien";
var cpName = name;
changeValue(name);
// console.log("number: ", number);
console.log("name: ", name);

var student = {
    name: "Kien",
};

// pass parameters by references
function changeStudent(student) {
    student.name = "Thang";
}

changeStudent(student);

console.log("Student:", student);

var rfStudent = student;
rfStudent.name = "Tri";

console.log("student: ", student);

// stack functions - dequy

function print(n) {
    if (n === 0) return;
    print(n - 1);
    console.log("n: ", n);
}

print(4);

// Numbers
var strNumber = "1234";
// var number = Number.parseInt(strNumber);
// var number = Number.parseFloat(strNumber);
var number = Number(strNumber);
console.log("number: ", number, typeof number, Number.isInteger(number));

console.log("isNaN:", Number.isNaN(number));
console.log("isNaN:", Number.isNaN("1234"));
console.log("isNaN:", Number.isNaN({}));
console.log("isNaN:", Number.isNaN(undefined));
console.log("isNaN:", Number.isNaN(0 / 0));
console.log("isFinite:", Number.isFinite(number));
console.log("isFinite:", Number.isFinite(1));
console.log("isFinite:", Number.isFinite(0 / 0));
console.log("isFinite:", Number.isFinite(Infinity));

// Numbers Math - random, ceil, floor
// Math.random() - return number [0; 1)
//  0 <= x * 6 < 6 => Math.floor(x * 6) [0, 1, 2, 3, 4, 5]
var number = 5.5;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));
console.log("Random: ", Math.random());

function throwADice() {
    return Math.floor(Math.random() * 6) + 1;
}

function randomFromTo(from, to) {
    return 0;
}

console.log("throwADice", throwADice());
console.log("randomFromTo", randomFromTo(100, 200));

// String
var name = "\"'Luat'\"";
var name2 = '"\'Hoa\'"';
var myStudentName = "Thang";
var age = 20
var school = "Harvard"
    // var description = "My student name is " + myStudentName +
    //     ", he is " + age + " year old" +
    //     ", he's studying at " + school + " university";
var description = `My student name is ${ myStudentName }, he is ${age} year old, he's studying at ${school} universiry!`; // tempalte string
console.log("name:", name);
console.log("name2:", name2);
console.log("description:", description);

// handle with string
var name = "Thang"
console.log("first character: ", name.charAt(0))
    // name[0] = "t" // cannot
name = name.toLowerCase()
name = name.toUpperCase()
console.log("first character: ", name[0], "length: ", name.length)

var listNameStr = "Tri, Luat, Sheila,         Thang, Khoa, Luat, Hoa"
var found = listNameStr.indexOf("Luat")
var found = listNameStr.lastIndexOf("Luat2")
var isFound = listNameStr.toLocaleLowerCase().includes("TRi".toLowerCase())
console.log("found: ", found)
console.log("isFound: ", isFound)

var luat = listNameStr.slice(5, 9);
// var luat = listNameStr.substring(5, 9)
var luatSubStr = listNameStr.substr(5, 4);
console.log("luat: ", luat)
console.log("luatSubStr: ", luatSubStr);

// Ex: Chuyển đổi tất cả 'Sheila' -> 'Ngoc' trong listNameStr
function replace(value, from, to) {
    if (!value.includes(from)) {
        return value
    }
    var firstIndex = value.indexOf(from);
    // var result = value.slice(0, firstIndex)
    // result += to
    // result += value.slice(firstIndex + from.length)
    // return result
    return value.slice(0, firstIndex) + to + value.slice(firstIndex + from.length)
}

var listNameStrFormat = replace(listNameStr, "Sheila", "Ngoc")
var listNameStrFormat = replace(listNameStrFormat, "Thang", "Winner")
var listNameStrFormat = listNameStrFormat.replace("Ngoc", "Sheila")
console.log("listNameStrFormat: ", listNameStrFormat)
console.log("concat:", "Fisrt".concat("Second"));
// split
// var listNames = listNameStr.split(", ")
var listNames = listNameStr.split(/,\s+/)
console.log("listNames: ", listNames)