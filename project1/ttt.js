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
          determineWinner();
    });
    $("#one").click(function() {
        $("#one").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
        determineWinner();
    });
    $("#two").click(function() {
        $("#two").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
        determineWinner();
    });
    $("#three").click(function() {
        $("#three").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
        determineWinner();
    });
    $("#four").click(function() {
        $("#four").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
        determineWinner();
    });
    $("#five").click(function() {
        $("#five").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
        determineWinner();
    });
    $("#six").click(function() {
        $("#six").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
        determineWinner();
    });
    $("#seven").click(function() {
        $("#seven").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
        determineWinner();
    });
    $("#eight").click(function() {
        $("#eight").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
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
        determineWinner();
    });
    $("#one").click(function() {
        $("#one").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
        determineWinner();
    });
    $("#two").click(function() {
        $("#two").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
        determineWinner();
    });
    $("#three").click(function() {
        $("#three").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
        determineWinner();
    });
    $("#four").click(function() {
        $("#four").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
        determineWinner();
    });
    $("#five").click(function() {
        $("#five").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
        determineWinner();
    });
    $("#six").click(function() {
        $("#six").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
        determineWinner();
    });
    $("#seven").click(function() {
        $("#seven").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
        determineWinner();
    });
    $("#eight").click(function() {
        $("#eight").text('O').html();
        playerXTurn = true;
        playerOTurn = false;
        gameDisplay();
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

  // piece of the game board
var zero;
var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
// determine if the grid is filled or not
function gridFill() {
      zero = $('#zero').html();
      one = $('#one').html();
      two = $('#two').html();
      three = $('#three').html();
      four = $('#four').html();
      five = $('#five').html();
      six = $('#six').html();
      seven = $('#seven').html();
      eight = $('#eight').html();
  }

// list out winning grid combinations in an array
var winCombo = [
  [zero, one, two],
  [zero, three, six],
  [zero, four, eight],
  [one, four, seven],
  [two, four, six],
  [two, five, eight],
  [three, four, five],
  [six, seven, eight]
];

// determine the winner
xWinner = false;
oWinner = false;
function determineWinner () {
  if ((zero == one && one == two && (zero == 'X')) ||
  (zero == three && three == six && (zero == 'X')) ||
  (zero == four && four == eight && (zero == 'X')) ||
  (one == four && four == seven && (one == 'X')) ||
  (two == four && four == six && (two == 'X')) ||
  (two == five && five == eight && (two == 'X')) ||
  (three == four && four == five && (three == 'X')) ||
  (six == seven && seven == eight && (six == 'X'))){
  xWinner = true;
  announceWinner();
} else if
  ((zero == one && one == two && (zero == 'O')) ||
  (zero == three && three == six && (zero == 'O')) ||
  (zero == four && four == eight && (zero == 'O')) ||
  (one == four && four == seven && (one == 'O')) ||
  (two == four && four == six && (two == 'O')) ||
  (two == five && five == eight && (two == 'O')) ||
  (three == four && four == five && (three == 'O')) ||
  (six == seven && seven == eight && (six == 'O')))
  {
  oWinner = true;
  oWinner ();
  }
  else if
  (((zero == 'X') || (zero == 'O')) &&
  ((one == 'X') || (one == 'O')) &&
  ((two == 'X') || (two == 'O')) &&
  ((three == 'X') || (three == 'O')) &&
  ((four == 'X') || (four == 'O')) &&
  ((five == 'X') || (five == 'O')) &&
  ((six == 'X') || (six == 'O')) &&
  ((seven == 'X') || (seven == 'O')) &&
  ((eight == 'X') || (eight == 'O')))
  {
     alert("DRAW");
  }
}





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
