var playerX = "X";
var playerY = "Y";

var newGame = function () {
  $('.grid').one('click', function (e) {
    if (turn===0) {
      $(this).text(playerX);
      boardCheck();
      checkWin();
      turn = 1;
    } else {
      $(this).text(playerO);
      boardCheck();
      checkWin();
      turn = 0;
    }
  });
}

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

// determines if the grid is filled or not
gridFill = function () {
    a1 = $('#zero').html();
    a2 = $('#one').html();
    a3 = $('#two').html();
    b1 = $('#three').html();
    b2 = $('#four').html();
    b3 = $('#five').html();
    c1 = $('#six').html();
    c2 = $('#seven').html();
    c3 = $('#eight').html();
};
