// TIC TAC TOE PROJECT

//GLOBAL VARIABLES
var game
var board
var playerX = "X";
var playerO = "O";
var win
var tie
var turn = 0;
var filledGrid = 0;
function winner ();

// FIRE DA LAZERZ
$(document).ready(function (){
  newGame ();
});

//grid locations linked to divs
gridZero = $('#zero').html();
gridOne = $('#one').html();
gridTwo = $('#two').html();
gridThree = $('#three').html();
gridFour = $('#four').html();
gridFive = $('#five').html();
gridSix = $('#six').html();
gridSeven = $('#seven').html();
gridEight = $('#eight').html();

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
