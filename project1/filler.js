// var newGame = function () {
//   $('.grid').one('click', function (e) {
//     if (turn===0) {
//       $(this).text(playerX);
//       boardCheck();
//       checkWin();
//       turn = 1;
//     } else {
//       $(this).text(playerO);
//       boardCheck();
//       checkWin();
//       turn = 0;
//     }
//   });
// }
//
// //GLOBAL VARIABLES
//
// function winner (); //becomes true if player wins
// var xWin = false; //becomes true if player wins
// var oWin = false;
// var tie;
// var winAlert;
//
// var turnPlayerX = 0;
// var turnPlayerY = 1;
// var clearBoard;
// var filledGrid = 0;
//
// // var gridZero = document.getElementById("zero");
// // $(document).ready(function() {
// //   $(gridZero).click(function() {
// //     $(gridZero).text("O");
// //   });
// // });
// // var gridOne = document.getElementById("one");
// // $(document).ready(function() {
// //   $(gridOne).click(function() {
// //     $(gridOne).text("X");
// //   });
// // });
//
//
// // winning combinations dependent on the position of the grid 0 through 8
//
//
//
// // X player moves
//
//   // $('.grid').on("click", function (){
//   //   $('<div>X</div>').appendTo('#zero')
//   // });
//
//   // winning grid combinations listed (just in case winCombo array has issues)
//   // var rowOne = [grid[0], grid[1], grid[2]];
//   // var rowTwo = [grid[3], grid[4], grid[5]];
//   // var rowThree = [grid[6], grid[7], grid[8]];
//   // var columnOne = [grid[0], grid[3], grid[6]];
//   // var columnTwo = [grid[1], grid[4], grid[7]];
//   // var columnThree = [grid[2], grid[5], grid[8]];
//   // var diagonalOne = [grid[0], grid[4], grid[8]];
//   // var diagonalTwo = [grid[2], grid[4], grid[6]];
//
//   if ((grid[0] == grid[1] && grid[2] == grid[3] && (grid[0] == "X")) ||
//   if ((grid[0] == grid[3] && grid[3] == grid[6] && (grid[0] == "X")) ||
//   if ((grid[0] == grid[4] && grid[4] == grid[8] && (grid[0] == "X")) ||
//   if ((grid[1] == grid[4] && grid[4] == grid[7] && (grid[1] == "X")) ||
//   if ((grid[2] == grid[4] && grid[4] == grid[6] && (grid[2] == "X")) ||
//   if ((grid[2] == grid[5] && grid[5] == grid[8] && (grid[2] == "X")) ||
//   if ((grid[3] == grid[4] && grid[4] == grid[5] && (grid[3] == "X")) ||
//   if ((grid[6] == grid[7] && grid[7] == grid[8] && (grid[6] == "X")) ||

// var turn = 0;
// var newGame = function (){
// $(".grid div").one('click', function (event) {
//   if (turn === 0) {
//     $(this.text(playerX));
//     turn = 1;
//   } else {
//     $(this.text(playerO));
//     turn = 0;
//   }
// });
// };







//Initializes Game





// list out winning grid combinations in an array
var winCombo = [
  [0 , 1 , 2],
  [0 , 3 , 6],
  [0 , 4 , 8],
  [1 , 4 , 7],
  [2 , 4 , 6],
  [2 , 5 , 8],
  [3 , 4 , 5],
  [6 , 7 , 8]
];

// determine the winner
// xWinner = false;
// oWinner = false;
// function determineWinner (){
//   if (xPlay == winCombo[i])
//     xWinner = true;} else if {
//       (oPlay == winCombo[i])
//     oWinner = true;}
//     }
// }

// determine a if a grid is filled
var grid = [];
var gridFill = function () {
    grid[0] = $('#zero').html("");
    grid[1] = $('#one').html("");
    grid[2] = $('#two').html("");
    grid[3] = $('#three').html("");
    grid[4] = $('#four').html("");
    grid[5] = $('#five').html("");
    grid[6] = $('#six').html("");
    grid[7] = $('#seven').html("");
    grid[8] = $('#eight').html("");
};

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



else if (
  (grid[0] === "X") || (grid[0] === "O") &&
  (grid[1] === "X") || (grid[1] === "O") &&
  (grid[2] === "X") || (grid[2] === "O") &&
  (grid[3] === "X") || (grid[3] === "O") &&
  (grid[4] === "X") || (grid[4] === "O") &&
  (grid[5] === "X") || (grid[5] === "O") &&
  (grid[6] === "X") || (grid[6] === "O") &&
  (grid[7] === "X") || (grid[7] === "O") &&
  (grid[8] === "X") || (grid[8] === "O") &&
) {
  draw = true;
  announceWinner();
  clearBoard();
  gameDisplay();
}
