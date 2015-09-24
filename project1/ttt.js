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
$("#two").click(function() {
    $(document).ready(function(){
        $("#two").click(function(){
            $("#two").text('X').html();
        })
    })
});
$("#three").click(function() {
    $(document).ready(function(){
        $("#three").click(function(){
            $("#three").text('X').html();
        })
    })
});
$("#four").click(function() {
    $(document).ready(function(){
        $("#four").click(function(){
            $("#four").text('X').html();
        })
    })
});
$("#five").click(function() {
    $(document).ready(function(){
        $("#five").click(function(){
            $("#five").text('X').html();
        })
    })
});
$("#six").click(function() {
    $(document).ready(function(){
        $("#six").click(function(){
            $("#six").text('X').html();
        })
    })
});
$("#seven").click(function() {
    $(document).ready(function(){
        $("#seven").click(function(){
            $("#seven").text('X').html();
        })
    })
});
$("#eight").click(function() {
    $(document).ready(function(){
        $("#eight").click(function(){
            $("#eight").text('X').html();
        })
    })
});
}

// o's in the grid
function oPlay () {
$("#zero").click(function() {
    $(document).ready(function(){
        $("#zero").click(function(){
            $("#zero").text('O').html();
        })
    })
});
$("#one").click(function() {
    $(document).ready(function(){
        $("#one").click(function(){
            $("#one").text('O').html();
        })
    })
});
$("#one").click(function() {
    $(document).ready(function(){
        $("#one").click(function(){
            $("#one").text('O').html();
        })
    })
});
$("#two").click(function() {
    $(document).ready(function(){
        $("#two").click(function(){
            $("#two").text('O').html();
        })
    })
});
$("#three").click(function() {
    $(document).ready(function(){
        $("#three").click(function(){
            $("#three").text('O').html();
        })
    })
});
$("#four").click(function() {
    $(document).ready(function(){
        $("#four").click(function(){
            $("#four").text('O').html();
        })
    })
});
$("#five").click(function() {
    $(document).ready(function(){
        $("#five").click(function(){
            $("#five").text('O').html();
        })
    })
});
$("#six").click(function() {
    $(document).ready(function(){
        $("#six").click(function(){
            $("#six").text('O').html();
        })
    })
});
$("#seven").click(function() {
    $(document).ready(function(){
        $("#seven").click(function(){
            $("#seven").text('O').html();
        })
    })
});
$("#eight").click(function() {
    $(document).ready(function(){
        $("#eight").click(function(){
            $("#eight").text('O').html();
        })
    })
})
};

// takin' turns budday
var playerX = 1;
function gameDisplay() {
  if (playerX == 1){
    document.getElementById('grid').text('X').html;
    playerX = 0
  } else {
    document.getElementById('grid').text('0').html;
    playerX = 1;
  }
}
