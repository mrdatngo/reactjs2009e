let leftArrowElem = document.querySelector(".slide-show-wrapper .left-arrow");
let rightArrowElem = document.querySelector(".slide-show-wrapper .right-arrow");
let slideShowElems = document.querySelectorAll(
    ".slide-show-wrapper .slide-show"
);

console.log(leftArrowElem, rightArrowElem, slideShowElems);

leftArrowElem.addEventListener("click", () => {
    slide(-1);
});

rightArrowElem.addEventListener("click", () => {
    slide(1);
});

let currentIndex = 0;
let numberOfSlideShow = slideShowElems.length;
slideShowAt(currentIndex);

function slideShowAt(index) {
    for (let i = 0; i < slideShowElems.length; i++) {
        slideShowElems[i].style.display = "none";
    }
    slideShowElems[index].style.display = "block";
}

function slide(step) {
    // currentIndex += step;
    // if (currentIndex === numberOfSlideShow) {
    //     currentIndex = 0;
    // }
    // if (currentIndex === -1) {
    //     currentIndex = numberOfSlideShow - 1;
    // }
    // shortcut for move right, move left circle - math
    currentIndex += step + numberOfSlideShow;
    currentIndex %= numberOfSlideShow;
    slideShowAt(currentIndex);
}

setInterval(() => {
    slide(1);
}, 3000);

// dot
let dotElems = document.querySelectorAll(".slide-show-container .dot");
for (let i = 0; i < dotElems.length; i++) {
    dotElems[i].addEventListener("click", () => {
        slideShowAt(i);
    });
}
