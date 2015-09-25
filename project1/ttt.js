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


function xPlay () {
  $("#zero").click(function() {
      $("#zero").text('X').html();
        playerXTurn = false;
        playerOTurn = true;
        gameDisplay();
        xPlay();
        gridFill();
        determineWinner();
  });

  $("#one").click(function() {
      $("#one").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      xPlay();
      gridFill();
      determineWinner();
  });

  $("#two").click(function() {
      $("#two").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      xPlay();
      gridFill();
      determineWinner();
  });

  $("#three").click(function() {
      $("#three").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      xPlay();
      gridFill();
      determineWinner();
  });

  $("#four").click(function() {
      $("#four").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      xPlay();
      gridFill();
      determineWinner();
  });

  $("#five").click(function() {
      $("#five").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      xPlay();
      gridFill();
      determineWinner();
  });

  $("#six").click(function() {
      $("#six").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      xPlay();
      gridFill();
      determineWinner();
  });

  $("#seven").click(function() {
      $("#seven").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      xPlay();
      gridFill();
      determineWinner();
  });

  $("#eight").click(function() {
      $("#eight").text('X').html();
      playerXTurn = false;
      playerOTurn = true;
      gameDisplay();
      xPlay();
      gridFill();
      determineWinner();
  });
}

// o's in the grid
function oPlay () {
  $("#zero").click(function() {
      $("#zero").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      oPlay();
      gridFill();
      determineWinner();
  });

  $("#one").click(function() {
      $("#one").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      oPlay();
      gridFill();
      determineWinner();
  });

  $("#two").click(function() {
      $("#two").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      oPlay();
      gridFill();
      determineWinner();
  });

  $("#three").click(function() {
      $("#three").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      oPlay();
      gridFill();
      determineWinner();
  });

  $("#four").click(function() {
      $("#four").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      oPlay();
      gridFill();
      determineWinner();
  });

  $("#five").click(function() {
      $("#five").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      oPlay();
      gridFill();
      determineWinner();
  });

  $("#six").click(function() {
      $("#six").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      oPlay();
      gridFill();
      determineWinner();
  });

  $("#seven").click(function() {
      $("#seven").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      oPlay();
      gridFill();
      determineWinner();
  });

  $("#eight").click(function() {
      $("#eight").text('O').html();
      playerXTurn = true;
      playerOTurn = false;
      gameDisplay();
      oPlay();
      gridFill();
      determineWinner();
  });
}

// determine a if a grid is filled
var gZero;
var gOne;
var gTwo;
var gThree;
var gFour;
var gFive;
var gSix;
var gSeven;
var gEight;

function gridFill() {
    gZero = $('#zero').html();
    gOne = $('#one').html();
    gTwo = $('#two').html();
    gThree = $('#three').html();
    gFour = $('#four').html();
    gFive = $('#five').html();
    gSix = $('#six').html();
    gSeven = $('#seven').html();
    gEight = $('#eight').html();
}

// list out winning grid combinations in an array
// var winCombo = [
//   [0 , 1 , 2],
//   [0 , 3 , 6],
//   [0 , 4 , 8],
//   [1 , 4 , 7],
//   [2 , 4 , 6],
//   [2 , 5 , 8],
//   [3 , 4 , 5],
//   [6 , 7 , 8]
// ];

// determine the winner
xWinner = false;
oWinner = false;
function determineWinner(){
  if ((gZero === gOne && gOne == gTwo) && (gOne == "X") ||
     (gZero === gThree && gThree == gSix) && (gZero == "X") ||
     (gZero === gFour && gFour == gEight) && (gZero == "X") ||
     (gOne === gFour && gFour == gEight) && (gOne == "X") ||
     (gTwo === gFour && gFour == gSix) && (gTwo == "X") ||
     (gTwo === gFive && gFive == gEight) && (gTwo == "X") ||
     (gThree === gFour && gFour == gFive) && (gThree == "X") ||
     (gSix === gSeven && gSeven == gEight) && (gSix == "X"))
          {
        xWinner = true;
        alert("X WINS!");}
  else if
      ((gZero === gOne && gOne == gTwo) && (gOne == "O") ||
       (gZero === gThree && gThree == gSix) && (gZero == "O") ||
       (gZero === gFour && gFour == gEight) && (gZero == "O") ||
       (gOne === gFour && gFour == gEight) && (gOne == "O") ||
       (gTwo === gFour && gFour == gSix) && (gTwo == "O") ||
       (gTwo === gFive && gFive == gEight) && (gTwo == "O") ||
       (gThree === gFour && gFour == gFive) && (gThree == "O") ||
       (gSix === gSeven && gSeven == gEight) && (gSix == "O"))
            {
          oWinner = true;
          alert("O WINS!");}
  }



// function determineWinner(){
// for (i = 0; i < winCombo.length; i++){
//   var winCondition = winCombo[i];
//   if (grid[winCondition[0]] == "X" &&
//       grid[winCondition[1]] == "X" &&
//       grid[winCondition[2]] == "X") {
//       xWinner = true;
//      }
//   else if (grid[winCondition[0]] == "O" &&
//       grid[winCondition[1]] == "O" &&
//       grid[winCondition[2]] == "O"){
//       oWinner = true;
//     }
//   }
// }
//
// // announce Winner and reset
// function announceWinner(){
//   if (xWinner === true){
//     alert("X WINS");
//   }
//   else if (oWinner === true){
//     alert("O WINS");
//   }
//   else if (gridFill !== winCombo){
//     alert("TIE");
//   }
// }
