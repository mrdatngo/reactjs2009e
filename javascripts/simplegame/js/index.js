var canvasGameElem = document.getElementById("game");
var ctx = canvasGameElem.getContext("2d");

var imgElem = document.createElement("img");
imgElem.src = "images/player.png";

// global variable
var screenWidth = 500;
var screenHeigh = 500;

function clearScreen() {
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, screenWidth, screenHeigh);
}

class Player {
    constructor(x, y, width, heigh, step, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigh = heigh;
        this.step = step;
        this.image = image;
        this.gold = 0;
    }

    moveDown = () => {
        if (this.y + this.heigh + this.step <= screenHeigh) {
            this.y += this.step;
        }
        checkWin();
    };

    moveRight = () => {
        if (this.x + this.width + this.step <= screenHeigh) {
            this.x += this.step;
        }
        checkWin();
    };

    moveUp = () => {
        if (this.y >= this.step) {
            this.y -= this.step;
        }
        checkWin();
    };

    moveLeft = () => {
        if (this.x >= this.step) {
            this.x -= this.step;
        }
        checkWin();
    };

    goldCollected = (number) => {
        this.gold += number;
    };

    draw = (ctx) => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.heigh);
    };
}

var player = new Player(0, 0, 50, 50, 50, imgElem);
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

// create map
var trapImg = document.createElement("img");
trapImg.src = "images/trap.png";
var goldImg = document.createElement("img");
goldImg.src = "images/treasure.png";

var map = [
    [0, 0, 0, -1, 0, 1, 0, 1, 0, 0],
    [0, 0, -1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, -1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, -1, 0, 1, 0, 1, 1, 0],
    [0, -1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, -1, 1, 1, 0],
    [0, 0, 0, -1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, -1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, -1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, -1, 0, 1, 0, 1, 0, 0],
];

var storeMap = map.map((cells) => cells.slice());
console.log("storeMap: ", storeMap);
// rule: -1: trap, 0: nothing, 1: gold
// fps = frame per second

var numberOfGold = 0;
map.forEach((cells) => {
    cells.forEach((cell) => {
        if (cell === 1) {
            numberOfGold++;
        }
    });
});

function checkWin() {
    // check player collect gold
    const playerYIndex = player.x / 50;
    const playerXIndex = player.y / 50;
    if (map[playerXIndex][playerYIndex] === 1) {
        player.goldCollected(1);
        map[playerXIndex][playerYIndex] = 0;
    }

    if (map[playerXIndex][playerYIndex] === -1) {
        alert("You lose!");
        // reset game
        map = storeMap;
        player.x = 0;
        player.y = 0;
    }

    if (player.gold === numberOfGold) {
        alert("You win!");
    }
}

setInterval(() => {
    clearScreen();
    player.draw(ctx);
    // player2.draw(ctx);
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] === -1) {
                // draw a trap
                // console.log("i, j", i, j);
                ctx.drawImage(trapImg, j * 50, i * 50, 50, 50);
            }
            if (map[i][j] === 1) {
                ctx.drawImage(goldImg, j * 50, i * 50, 50, 50);
            }
        }
    }
}, 50);
