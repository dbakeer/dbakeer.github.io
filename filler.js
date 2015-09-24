var playerX = "X";
var playerO = "O";

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

// player turns beginning of figuring out code
$("#zero").click(function() {
    $(document).ready(function(){
        $("#zero").click(function(){
            $("#zero").text('X').html();
        })
    })
});
$("#one").click(function() {
    $(document).ready(function(){
        $("#one").click(function(){
            $("#one").text('X').html();
        })
    })
});
}


// determines if the grid is filled or not
var grids = [0, 1, 2, 3, 4, 5, 6, 7, 8];
gridFill = function () {
    grids[0] = $('#zero').innerHTML();
    grids[1] = $('#one').innerHTML();
    grids[2] = $('#two').innerHTML();
    grids[3] = $('#three').innerHTML();
    grids[4] = $('#four').innerHTML();
    grids[5] = $('#five').innerHTML();
    grids[6] = $('#six').innerHTML();
    grids[7] = $('#seven').innerHTML();
    grids[8] = $('#eight').innerHTML();
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


// X player moves

  // $('.grid').on("click", function (){
  //   $('<div>X</div>').appendTo('#zero')
  // });
