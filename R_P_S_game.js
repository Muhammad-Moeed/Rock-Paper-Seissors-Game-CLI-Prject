//********************* Rock paper Scissors Game*****************
var player1 = "Rock";
var player2 = "Scissors";
if (player1 === player2) {
    console.log("It's a Tie");
}
else if ((player1 === "Rock" && player2 === "Scissors") ||
    (player1 === "Scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "Rock")) {
    console.log("Player 1 Win!");
}
else {
    console.log("Player 2 Win!");
}
