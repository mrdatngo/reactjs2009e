// shortcut;
// document.getElementById("section").style.textAlign = "center";

var section = document.getElementById("section"); // get
if (section) {
    section.style.textAlign = "center"; // update
    // section.classList = "section";
    // section.classList.add("blue-color");
    // // section.classList.remove("section");
    // section.classList.toggle("section");
    // section.classList.toggle("section");
    section.setAttribute("class", "blue-color");
}

var sections = document.getElementsByTagName("section"); // get
if (sections.length > 0) {
    sections[0].style.backgroundColor = "yellow"; // set
    console.log("sections: ", sections);
}
// sections[1].style.backgroundColor = "yellow";

var sections2 = document.getElementsByClassName("section"); // get
if (sections2.length > 0) {
    sections2[0].style.border = "1px solid black"; // set
}

// document.write("Hello class");

// create section
var h3 = document.createElement("h3");
h3.innerText = "Section 3";
var p = document.createElement("p");
p.innerText = "This is description 3";
var section = document.createElement("section");
section.appendChild(h3);
section.appendChild(p);
document.body.appendChild(section);
document.body.removeChild(section);

// event handler
function hello() {
    alert("Hello class");
    //
}

// var btnClick = document.getElementById("js-btn-click");
// btnClick.addEventListener("click", () => {
//     alert("Hello class");
// });
// btnClick.onclick = () => {
//     alert("Hello class!!!");
// };

// var btnClick = document.getElementsByClassName("js-btn-click")[0];
var btnClick = document.querySelector("#section .js-btn-click");
btnClick.style.backgroundColor = "red";
