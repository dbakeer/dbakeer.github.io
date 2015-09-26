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
var playerXTurn = true;
var playerOTurn = false;
function gameDisplay (){
  $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight").one("click", function(){
    if (playerXTurn === true) {
      $(this).text("X");
      document.getElementById("playerTurn").innerHTML = "O Turn";
      gridFill();
      determineWinner();
      tiedGame();
      playerXTurn = false;
      playerOTurn = true;
    } else if (playerOTurn === true) {
      $(this).text("O");
      document.getElementById("playerTurn").innerHTML = "X Turn";
      gridFill();
      determineWinner();
      tiedGame();
      playerXTurn = true;
      playerOTurn = false;
    }
  }
);}

// determine a if a grid is filled
var zero = $('#zero').html("");
var one = $('#one').html("");
var two = $('#two').html("");
var three = $('#three').html("");
var four = $('#four').html("");
var five = $('#five').html("");
var six = $('#six').html("");
var seven = $('#seven').html("");
var eight = $('#eight').html("");


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
       announceWinner();
       clearBoard();
       gameDisplay();
     }
  else if (grid[winCondition[0]] == "O" &&
      grid[winCondition[1]] == "O" &&
      grid[winCondition[2]] == "O"){
      oWinner = true;
      announceWinner();
      clearBoard();
      gameDisplay();
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

function announceWinner (){
  if (xWinner === true){
    alert("X WINS");
  } else if
    (oWinner === true){
      alert("O WINS");
    } else if
    (draw === true){
      alert("DRAW");
    }
  }

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
  }
