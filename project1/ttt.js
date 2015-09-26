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


xWinner = false;
oWinner = false;
xAlert = false;
oAlert = false;
function determineWinner (){
for (i = 0; i < winCombo.length; i++){
  var winCondition = winCombo[i];
  if (grid[winCondition[0]] == "X" &&
      grid[winCondition[1]] == "X" &&
      grid[winCondition[2]] == "X"){
       xWinner = true;
       oAlert = true;
     }
  else if (grid[winCondition[0]] == "O" &&
      grid[winCondition[1]] == "O" &&
      grid[winCondition[2]] == "O"){
      oWinner = true;
      oAlert = true;
    }
  }
}

function announceWinner (){
  if (xAlert === true){
    alert("X WINS");
    xAlert = false;
  } else if
    (oAlert === true){
      alert("O WINS");
      oAlert = false;
    }
  }
}
