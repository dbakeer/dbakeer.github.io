//Initializes Game
$(document).ready(
  function xInfo() {
    // setting up information input for Player X
    var xName = prompt("Please enter your name", "Player X");

    if (xName != null) {
        document.getElementById("playerXName").innerHTML = xName + "     using X's";
    }
  });
// setting up name input for Player O
$(document).ready(
  function oInfo (){
    var oName = prompt("Please enter your name, Player O", "Player O");

  if (oName != null) {
    document.getElementById("playerOName").innerHTML = oName + "     using O's";
  }

});


// x's in the grid
function xPlay () {
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

// o's in the grid
function OPlay () {
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

// takin' turns budday
var playerXTurn = true;
var playerOTurn = false;
function gameDisplay () {
  if (playerX){
     xPlay();
  } else if (playerO) {
     oPlay();
  }
};
