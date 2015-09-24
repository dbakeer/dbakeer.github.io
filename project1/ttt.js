// TIC TAC TOE PROJECT

//GLOBAL VARIABLES
var game;
var newGame; //function to start new game
var boardFill;
var playerX = "X";
var playerO = "O";

function winner (); //becomes true if player wins
var xWin = false; //becomes true if player wins
var oWin = false;
var tie;
var winAlert;

var turnPlayerX = 0;
var turnPlayerY = 1;
var clearBoard;
var filledGrid = 0;


// FIRE DA LAZERZ
$(document).ready(function (){
  newGame ();
});

// setting up information input for Player X
var playerX = {
  name: prompt("Please enter your name, Player X"),
  score: 0,
  win: 0,
  lose: 0
};

if (playerX.name != null) {
  document.getElementById('playerXName').innerText = "Player X   " + playerX.name;}
};



// setting up name input for Player O
var playerO = {
  name: prompt("Please enter your name, Player O"),
  score: 0,
  win: 0,
  lose: 0
}

if (playerO.name != null) {
  document.getElementById('playerOName').innerText = "Player O    " + playerO.name;
};



// winning combinations dependent on the position of the grid 0 through 8
var winCombo = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
];

// determines if a square is filled
var xoFill = function () {
  gridZero = $('#zero').html();
  gridOne = $('#one').html();
  gridTwo = $('#two').html();
  gridThree = $('#three').html();
  gridFour = $('#four').html();
  gridFive = $('#five').html();
  gridSix = $('#six').html();
  gridSeven = $('#seven').html();
  gridEight = $('#eight').html();
};

// var gridZero = document.getElementById("zero");
// $(document).ready(function() {
//   $(gridZero).click(function() {
//     $(gridZero).text("O");
//   });
// });
// var gridOne = document.getElementById("one");
// $(document).ready(function() {
//   $(gridOne).click(function() {
//     $(gridOne).text("X");
//   });
// });

// determines a win

// determines a tie
