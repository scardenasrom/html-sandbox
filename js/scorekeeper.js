var maxRounds = 5;
var numberInput = document.querySelector("#max-rounds-input");
var maxRoundsSpan = document.querySelector("#max-rounds-span");
numberInput.value = maxRounds;
numberInput.addEventListener("change", function() {
    maxRounds = Number(this.value);
    maxRoundsSpan.textContent = maxRounds;
    resetGame();
});

var playerOneScore = 0;
var playerOneScoreSpan = document.querySelector("#player-one-score");
var playerOneButton = document.querySelector("#player-one-button");

var playerTwoScore = 0;
var playerTwoScoreSpan = document.querySelector("#player-two-score");
var playerTwoButton = document.querySelector("#player-two-button");

var maxRoundsSpan = document.querySelector("#max-rounds-span");
maxRoundsSpan.textContent = maxRounds;

var resetButton = document.querySelector("#reset-button");

playerOneButton.addEventListener("click", function() {
    if (playerOneScore < maxRounds && playerTwoScore < maxRounds) {
        playerOneScore++;
        playerOneScoreSpan.textContent = playerOneScore;
        if (playerOneScore === maxRounds) {
            playerOneScoreSpan.style.color = "green";
            playerTwoScoreSpan.style.color = "red";
        }
    }
});

playerTwoButton.addEventListener("click", function() {
    if (playerTwoScore < maxRounds && playerOneScore < maxRounds) {
        playerTwoScore++;
        playerTwoScoreSpan.textContent = playerTwoScore;
        if (playerTwoScore === maxRounds) {
            playerTwoScoreSpan.style.color = "green";
            playerOneScoreSpan.style.color = "red";
        }
    }
});

resetButton.addEventListener("click", resetGame);

function resetGame() {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScoreSpan.textContent = "0";
    playerTwoScoreSpan.textContent = "0";
    playerOneScoreSpan.style.color = "black";
    playerTwoScoreSpan.style.color = "black";
}
