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
