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
    });
    $("#one").click(function() {
        $("#one").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
    });
    $("#two").click(function() {
        $("#two").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
    });
    $("#three").click(function() {
        $("#three").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
    });
    $("#four").click(function() {
        $("#four").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
    });
    $("#five").click(function() {
        $("#five").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
    });
    $("#six").click(function() {
        $("#six").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
    });
    $("#seven").click(function() {
        $("#seven").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
    });
    $("#eight").click(function() {
        $("#eight").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
    });
  };

  // o's in the grid
  var oPlay = function oPlay () {
    $("#zero").click(function() {
        $("#zero").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
    });
    $("#one").click(function() {
        $("#one").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
    });
    $("#two").click(function() {
        $("#two").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
    });
    $("#three").click(function() {
        $("#three").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
    });
    $("#four").click(function() {
        $("#four").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
    });
    $("#five").click(function() {
        $("#five").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
    });
    $("#six").click(function() {
        $("#six").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
    });
    $("#seven").click(function() {
        $("#seven").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
    });
    $("#eight").click(function() {
        $("#eight").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
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
function gridFill() {
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
  [grid[0], grid[1], grid[3]],
  [grid[0] , grid[1] , grid[2]],
  [grid[0] , grid[3] , grid[6]],
  [grid[0] , grid[4] , grid[8]],
  [grid[1] , grid[4] , grid[7]],
  [grid[2] , grid[4] , grid[6]],
  [grid[2] , grid[5] , grid[8]],
  [grid[3] , grid[4] , grid[5]],
  [grid[6] , grid[7] , grid[8]]
];

// determine the winner
xWinner = false;
oWinner = false;
function determineWinner(){
    if ((a1 == a2 && a1 == a3 && (a1 == 'X')) ||
    (b1 == b2 && b1 == b3 && (b1 == 'X')) ||
    (c1 == c2 && c1 == c3 && (c1 == 'X')) ||
    (a1 == b1 && a1 == c1 && (a1 == 'X')) ||
    (a2 == b2 && a2 == c2 && (a2 == 'X')) ||
    (a3 == b3 && a3 == c3 && (a3 == 'X')) ||
    (a1 == b2 && a1 == c3 && (a1 == 'X')) ||
    (a3 == b2 && a3 == c1 && (a3 == 'X'))
    ) {
        xWin = true;
        winAlert();

    } else { // CHECKS IF O WON
        if ((a1 == a2 && a1 == a3 && (a1 == "o")) || //first row
        (b1 == b2 && b1 == b3 && (b1 == "o")) || //second row
        (c1 == c2 && c1 == c3 && (c1 == "o")) || //third row
        (a1 == b1 && a1 == c1 && (a1 == "o")) || //first column
        (a2 == b2 && a2 == c2 && (a2 == "o")) || //second column
        (a3 == b3 && a3 == c3 && (a3 == "o")) || //third column
        (a1 == b2 && a1 == c3 && (a1 == "o")) || //diagonal 1
        (a3 == b2 && a3 == c1 && (a3 == "o")) //diagonal 2
        ) {
            oWin = true;
            winAlert();

        } else { // CHECKS FOR TIE GAME IF ALL CELLS ARE FILLED
            if (((a1 == "x") || (a1 == "o")) && ((b1 == "x") || (b1 == "o")) && ((c1 == "x") || (c1 == "o")) && ((a2 == "x") || (a2 == "o")) && ((b2 == "x") || (b2 == "o")) && ((c2 == "x") || (c2 == "o")) && ((a3 == "x") || (a3 == "o")) && ((b3 == "x") || (b3 == "o")) && ((c3 == "x") || (c3 == "o"))) {
                alert("It's a tie!");
            }
        }
    }
};








// for (i = 0; i < winCombo.length; i++){
//
//   var winCondition = winCombo[i];
//   if (grid[winCondition[0]] == "X" &&
//       grid[winCondition[1]] == "X" &&
//       grid[winCondition[2]] == "X"){
//        xWinner = true;
//        alert("X WINS");
//      }
//   else if (grid[winCondition[0]] == "O" &&
//       grid[winCondition[1]] == "O" &&
//       grid[winCondition[2]] == "O"){
//       oWinner = true;
//       alert("O WINS");
//         }
//   else {
//     alert("TIED");
//     }
//   }
// }
