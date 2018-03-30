//region Selects
var pickedColorSpan = document.querySelector("#picked-color");
var messageSpan = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetColorsButton = document.querySelector("#new-colors-button");
var easyButton = document.querySelector("#easy-button");
var hardButton = document.querySelector("#hard-button");
//endregion

//region Constants - Global Variables
let easyNumberOfColors = 3;
let hardNumberOfColors = 6;
let backgroundColor = "#232323";
var maxColors = hardNumberOfColors;
var colors;
var pickedColor;
//endregion

//region Button Listeners
resetColorsButton.addEventListener("click", function() {
    startGame();
});

easyButton.addEventListener("click", function() {
    if (maxColors !== easyNumberOfColors) {
        maxColors = easyNumberOfColors;
        easyButton.classList.toggle("selected");
        hardButton.classList.toggle("selected");
        startGame();
    }
});

hardButton.addEventListener("click", function() {
    if (maxColors !== hardNumberOfColors) {
        maxColors = hardNumberOfColors;
        easyButton.classList.toggle("selected");
        hardButton.classList.toggle("selected");
        startGame();
    }
});
//endregion

startGame();

//region Functions
function startGame() {
    messageSpan.textContent = " ";
    h1.style.backgroundColor = "steelblue";
    resetColorsButton.textContent = "New Colors";
    colors = generateRandomColors(maxColors);
    pickedColor = pickColor();
    pickedColorSpan.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
            squares[i].addEventListener("click", function() {
                var clickedColor = this.style.backgroundColor;
                if (clickedColor === pickedColor) {
                    messageSpan.textContent = "Correct";
                    changeColors(clickedColor);
                    resetColorsButton.textContent = "Play Again?";
                } else {
                    this.style.backgroundColor = backgroundColor;
                    messageSpan.textContent = "Try Again";
                }
            });
        } else {
            squares[i].style.display = "none";
        }
    }
}

function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function pickColor() {
    var random = Math.floor((Math.random() * colors.length));
    return colors[random];
}

function generateRandomColors(number) {
    var colors = [];
    for (var i = 0; i < number; i++) {
        colors.push(generateRandomColor());
    }
    return colors;
}

function generateRandomColor() {
    return "rgb(" + generateRandomHexValue() + ", " + generateRandomHexValue() + ", " + generateRandomHexValue() + ")";
}

function generateRandomHexValue() {
    return Math.floor(Math.random() * 256);
}
//endregion
