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
