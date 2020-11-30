var canvasGameElem = document.getElementById("game");
var ctx = canvasGameElem.getContext("2d");

var imgElem = document.createElement("img");
imgElem.src = "images/player.png";

// global variable
var screenWidth = 500;
var screenHeigh = 500;

function clearScreen() {
    ctx.fillStyle = "#FFF";
    ctx.fillRect(0, 0, screenWidth, screenHeigh);
}

class Player {
    constructor(x, y, width, heigh, step) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigh = heigh;
        this.step = step;
    }

    moveDown = () => {
        this.y += this.step;
    };

    moveRight = () => {
        this.x += this.step;
    };

    moveUp = () => {
        if (this.y >= this.step) {
            this.y -= this.step;
        }
    };

    moveLeft = () => {
        if (this.x >= this.step) {
            this.x -= this.step;
        }
    };

    draw = (ctx) => {
        ctx.drawImage(imgElem, this.x, this.y, this.width, this.heigh);
    };
}

var player = new Player(0, 0, 50, 50, 2);
// var player2 = new Player(250, 250);

window.onload = () => {
    ctx.drawImage(imgElem, player.x, player.y, 50, 50);
};

document.addEventListener("keydown", (event) => {
    // console.log("event: ", event, event.code);
    switch (event.code) {
        // case "KeyS":
        //     player2.moveDown();
        //     break;
        // case "KeyD":
        //     player2.moveRight();
        //     break;
        case "ArrowDown":
            player.moveDown();
            break;
        case "ArrowRight":
            player.moveRight();
            break;
        case "ArrowLeft":
            player.moveLeft();
            break;
        case "ArrowUp":
            player.moveUp();
            break;
    }
});

// fps = frame per second
setInterval(() => {
    clearScreen();
    player.draw(ctx);
    // player2.draw(ctx);
}, 1);
