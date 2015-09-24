// setting up information input for Player X
$(document).ready( function () {

  var playerX = {
    name: prompt("Please enter your name, Player X"),
    score: 0,
    win: 0,
    lose: 0
}

if (playerX.name != null) {
  document.getElementById('playerXName').innerText = "Player X:      " + playerX.name;
}



// setting up name input for Player O
var playerO = {
  name: prompt("Please enter your name, Player O"),
  score: 0,
  win: 0,
  lose: 0
}

if (playerO.name != null) {
  document.getElementById('playerOName').innerText = "Player O:     " + playerO.name;
}
});


// fleshing out the game board
