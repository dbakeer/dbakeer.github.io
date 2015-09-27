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

// x's in the grid
var xPlay = function xPlay () {
  $("#zero").click(function() {
      $("#zero").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
        gridFill();
        determineWinner();
  });
  $("#one").click(function() {
      $("#one").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#two").click(function() {
      $("#two").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#three").click(function() {
      $("#three").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#four").click(function() {
      $("#four").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#five").click(function() {
      $("#five").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#six").click(function() {
      $("#six").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#seven").click(function() {
      $("#seven").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#eight").click(function() {
      $("#eight").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      gridFill();
      determineWinner();
  });
};

// o's in the grid
var oPlay = function oPlay () {
  $("#zero").click(function() {
      $("#zero").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#one").click(function() {
      $("#one").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#two").click(function() {
      $("#two").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#three").click(function() {
      $("#three").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#four").click(function() {
      $("#four").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#five").click(function() {
      $("#five").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#six").click(function() {
      $("#six").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#seven").click(function() {
      $("#seven").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      gridFill();
      determineWinner();
  });
  $("#eight").click(function() {
      $("#eight").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      gridFill();
      determineWinner();
  });
};

// takin' turns budday
var playerXTurn = true;
var playerOTurn = false;
function gameDisplay () {
  if (playerXTurn){
     xPlay();
     document.getElementById("playerTurn").innerHTML = "X Turn";
  } else if (playerOTurn) {
     oPlay();
      document.getElementById("playerTurn").innerHTML = "O Turn";
  }
}

// determine a if a grid is filled
var grid = [];
var gridFill = function () {
    grid[0] = $('#zero').html();
    grid[1] = $('#one').html();
    grid[2] = $('#two').html();
    grid[3] = $('#three').html();
    grid[4] = $('#four').html();
    grid[5] = $('#five').html();
    grid[6] = $('#six').html();
    grid[7] = $('#seven').html();
    grid[8] = $('#eight').html();
};

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

// determine the winner
xWinner = false;
oWinner = false;
function determineWinner(){

// checking to see if player X is the winner

for (i = 0; i < winCombo.length; i++){

  var winCondition = winCombo[i];
  if (grid[winCondition[0]] == "X" &&
      grid[winCondition[1]] == "X" &&
      grid[winCondition[2]] == "X"){
       xWinner = true;
       alert("X WINS");
     }
  else if (grid[winCondition[0]] == "O" &&
      grid[winCondition[1]] == "O" &&
      grid[winCondition[2]] == "O"){
      oWinner = true;
      alert("O WINS");
        }
  else {
    alert("TIED");
    }
  }
}

// determine a draw
var draw = false;
function tiedGame (){
  if (
    ((zero === " ") || (zero === " ")) &&
    ((one === " ") || (one === " ")) &&
    ((two === " ") || (two === " ")) &&
    ((three === " ") || (three === " ")) &&
    ((four === " ") || (four === " ")) &&
    ((five === " ") || (five === " ")) &&
    ((six === " ") || (six === " ")) &&
    ((seven === " ") || (seven === " ")) &&
    ((eight === " ") || (eight === " "))
  );
    draw = false;
  }
  if (
    ((zero === "X") || (zero === "O")) &&
    ((one === "X") || (one === "O")) &&
    ((two === "X") || (two === "O")) &&
    ((three === "X") || (three === "O")) &&
    ((four === "X") || (four === "O")) &&
    ((five === "X") || (five === "O")) &&
    ((six === "X") || (six === "O")) &&
    ((seven === "X") || (seven === "O")) &&
    ((eight === "X") || (eight === "O"))
  ); {
  draw = true;

  clearBoard();
}
