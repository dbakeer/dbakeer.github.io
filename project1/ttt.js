// FIRE DA LAZERZ

// setting up information input for Player X
$(document).ready(
  function xInfo() {
    var xName = prompt("Please enter your name", "Player X");
    if (xName !== null) {
      document.getElementById("playerXName").innerHTML = xName + "     using X's";
      }});

// setting up name input for Player O
$(document).ready(
  function oInfo() {
    var oName = prompt("Please enter your name, Player O", "Player O");
    if (oName !== null) {
      document.getElementById("playerOName").innerHTML = oName + "     using O's";
    }
// display the game, function defined below
    gameDisplay ();
  });

// the metaphorical "brain" of the game
function gameDisplay (){
  var playerTurn = true;
  $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight").one("click", function(){
    if (playerTurn === true) {
      document.getElementById("playerTurn").innerHTML = "O Turn";
      $(this).html("X");
      gridFill();
      tiedGame();
      determineWinner();
      announceWinner();
      playerTurn = false;
    } else if (playerTurn === false) {
      document.getElementById("playerTurn").innerHTML = "X Turn";
      $(this).html("O");
      gridFill();
      tiedGame();
      determineWinner();
      announceWinner();
      playerTurn = true;
    }
  }
);}

// determine a if a grid is filled
var grid = [];
function gridFill () {
      grid[0] = $('#zero').html();
      grid[1] = $('#one').html();
      grid[2] = $('#two').html();
      grid[3] = $('#three').html();
      grid[4] = $('#four').html();
      grid[5] = $('#five').html();
      grid[6] = $('#six').html();
      grid[7] = $('#seven').html();
      grid[8] = $('#eight').html();
  }

// list out winning grid combinations in an array
  var winCombo = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 4 , 6],
    [2 , 5 , 8],
    [3 , 4 , 5],
    [6 , 7 , 8]
  ];


// determines if X or O wins
xWinner = false;
oWinner = false;
draw = false;
function determineWinner (){
for (i = 0; i < winCombo.length; i++){
  var winCondition = winCombo[i];
  if (grid[winCondition[0]] == "X" &&
      grid[winCondition[1]] == "X" &&
      grid[winCondition[2]] == "X"){
       xWinner = true;
     }
  else if (grid[winCondition[0]] == "O" &&
      grid[winCondition[1]] == "O" &&
      grid[winCondition[2]] == "O"){
      oWinner = true;
    }
  }
}

// function to determine draws
function tiedGame (){
  if (
      ((grid[0] === "X") || (grid[0] === "O")) &&
      ((grid[1] === "X") || (grid[1] === "O")) &&
      ((grid[2] === "X") || (grid[2] === "O")) &&
      ((grid[3] === "X") || (grid[3] === "O")) &&
      ((grid[4] === "X") || (grid[4] === "O")) &&
      ((grid[5] === "X") || (grid[5] === "O")) &&
      ((grid[6] === "X") || (grid[6] === "O")) &&
      ((grid[7] === "X") || (grid[7] === "O")) &&
      ((grid[8] === "X") || (grid[8] === "O"))
) {
  draw = true;
  }}

xWin = 0;
oWin = 0;
xLose = 0;
oLose = 0;
draw = false;
// determines what to do after a win, loss or draw is called
function announceWinner (){
  if (xWinner === true){
    alert("X WINS");
    xWin = xWin + 1;
    oLose = oLose + 1;
    xScore();
    oScore();
  } else if
    (oWinner === true){
      alert("O WINS");
      oWin = oWin + 1;
      xLose = xLose + 1;
      xScore();
      oScore();
    } else if
    (draw === true) {
      alert("DRAW");
      oWin = oWin;
      xLose = xLose;
      xScore();
      oScore();
    }
  }

// syncs with the reset button to clear the board
$(function (){
  $("#reset").click(
function clearBoard () {
      grid[0] = $('#zero').html("");
      grid[1] = $('#one').html("");
      grid[2] = $('#two').html("");
      grid[3] = $('#three').html("");
      grid[4] = $('#four').html("");
      grid[5] = $('#five').html("");
      grid[6] = $('#six').html("");
      grid[7] = $('#seven').html("");
      grid[8] = $('#eight').html("");
      xWinner = false;
      oWinner = false;
      draw = false;
      playerTurn = true;
      gameDisplay();
  }
);
});

// keeps track of O's score
function oScore (){
  document.getElementById("xWin").innerHTML = "Wins:  " + xWin;
  document.getElementById("xLoss").innerHTML = "Losses:  " + xLose;
}

// keeps track of X's score
function xScore (){
  document.getElementById("oWin").innerHTML = "Wins:  " + oWin;
  document.getElementById("oLoss").innerHTML = "Losses:  " + oLose;
}
