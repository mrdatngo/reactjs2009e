let totalConfirmedElem = document.getElementById("total-confirmed");
let totalDeathsElem = document.getElementById("total-deaths");

// function load() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let data = JSON.parse(this.responseText);
//             console.log(
//                 "data: ",
//                 data,
//                 data.Global.TotalConfirmed,
//                 data.Global.TotalDeaths
//             );
//             totalConfirmedElem.innerText = data.Global.TotalConfirmed;
//             totalDeathsElem.innerText = data.Global.TotalDeaths;
//         }
//     };
//     xhttp.open("GET", "https://api.covid19api.com/summary", true);
//     xhttp.send();
// }

function callApi(apiUrl, method) {
    return new Promise((resolve) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(this.responseText));
            }
        };
        xhttp.open(method, apiUrl, true);
        xhttp.send();
    });
}

// load();
function loadTotalStatic() {}

callApi("https://api.covid19api.com/summary", "GET").then((data) => {
    console.log("loadTotalStatic: ", data);
    totalConfirmedElem.innerText = data.Global.TotalConfirmed;
    totalDeathsElem.innerText = data.Global.TotalDeaths;
});

async function loadVietNamStatic() {
    let data = await callApi(
        "https://api.covid19api.com/total/country/vietnam",
        "GET"
    );
    console.log("VietNamStatics: ", data);
}

loadTotalStatic();
loadVietNamStatic();

setInterval(() => {
    loadTotalStatic();
}, 3000);
