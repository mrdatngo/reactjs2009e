var canvasGameElem = document.getElementById("game");
var ctx = canvasGameElem.getContext("2d");

var imgElem = document.createElement("img");
imgElem.src = "images/player.png";

// global variable
var screenWidth = 500;
var screenHeigh = 500;

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    moveDown = () => {
        ctx.fillStyle = "#FFF";
        ctx.fillRect(0, 0, 500, 500);
        player.y += 50;
        ctx.drawImage(imgElem, player.x, player.y, 50, 50);
    };

    moveRight = () => {
        ctx.fillStyle = "#FFF";
        ctx.fillRect(0, 0, 500, 500);
        player.x += 50;
        ctx.drawImage(imgElem, player.x, player.y, 50, 50);
    };
}

var player = new Player(0, 0);

window.onload = () => {
    ctx.drawImage(imgElem, player.x, player.y, 50, 50);
};

document.addEventListener("keydown", (event) => {
    console.log("event: ", event, event.code);
    switch (event.code) {
        case "ArrowDown":
            // player_moving_down();
            player.moveDown();
            break;
        case "ArrowRight":
            player.moveRight();
            break;
    }
});
