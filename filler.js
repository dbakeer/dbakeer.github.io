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

function winner (); //becomes true if player wins
var xWin = false; //becomes true if player wins
var oWin = false;
var tie;
var winAlert;

var turnPlayerX = 0;
var turnPlayerY = 1;
var clearBoard;
var filledGrid = 0;

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


// winning combinations dependent on the position of the grid 0 through 8



// X player moves

  // $('.grid').on("click", function (){
  //   $('<div>X</div>').appendTo('#zero')
  // });
