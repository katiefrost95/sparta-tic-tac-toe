document.addEventListener("DOMContentLoaded", function() {
console.log('DOM is ready');

var dataNum = document.getElementsByTagName('td');
var XorO = "X";
var counter = 1;
var wins = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];


buttonResponseXO();

function buttonResponseXO (){
for (var i = 0; i < dataNum.length; i++) {
  var cellNum = dataNum[i];
  cellNum.addEventListener('click', getEvent);
  }
  function getEvent(event) {
    if (counter % 2 === 0){
      XorO = "O";
    } else {
      XorO = "X";
    }
    event.target.innerHTML = XorO;
    counter = counter + 1;
    whoWins();
  }
}

function whoWins () {
  if (dataNum[0].innerHTML === "X" && dataNum[1].innerHTML ==="X" && dataNum[2].innerHTML ==="X") {
  alert("Player X Wins");
  } else if (dataNum[3].innerHTML === "X" && dataNum[4].innerHTML ==="X" && dataNum[5].innerHTML ==="X") {
    alert("Player X Wins");
  } else if (dataNum[6].innerHTML === "X" && dataNum[7].innerHTML ==="X" && dataNum[8].innerHTML ==="X") {
  alert("Player X Wins");
  } else if (dataNum[0].innerHTML === "X" && dataNum[3].innerHTML ==="X" && dataNum[6].innerHTML ==="X") {
  alert("Player X Wins");
  } else if (dataNum[1].innerHTML === "X" && dataNum[4].innerHTML ==="X" && dataNum[7].innerHTML ==="X") {
    alert("Player X Wins");
  } else if (dataNum[3].innerHTML === "X" && dataNum[4].innerHTML ==="X" && dataNum[5].innerHTML ==="X") {
  alert("Player X Wins");
  } else if (dataNum[2].innerHTML === "X" && dataNum[5].innerHTML      ==="X" && dataNum[8].innerHTML ==="X") {
    alert("Player X Wins");
  } else if (dataNum[0].innerHTML === "X" && dataNum[4].innerHTML ==="X" && dataNum[8].innerHTML ==="X") {
  alert("Player X Wins");
  } else if (dataNum[2].innerHTML === "X" && dataNum[4].innerHTML ==="X" && dataNum[6].innerHTML ==="X") {
  alert("Player X Wins");
  }
  if (dataNum[0].innerHTML === "O" && dataNum[1].innerHTML ==="O" && dataNum[2].innerHTML ==="O") {
  alert("Player O Wins");
} else if (dataNum[3].innerHTML === "O" && dataNum[4].innerHTML ==="O" && dataNum[5].innerHTML ==="O") {
    alert("Player O Wins");
  } else if (dataNum[6].innerHTML === "O" && dataNum[7].innerHTML ==="O" && dataNum[8].innerHTML ==="O") {
  alert("Player O Wins");
} else if (dataNum[0].innerHTML === "O" && dataNum[3].innerHTML ==="O" && dataNum[6].innerHTML ==="O") {
  alert("Player O Wins");
} else if (dataNum[1].innerHTML === "O" && dataNum[4].innerHTML ==="O" && dataNum[7].innerHTML ==="O") {
    alert("Player O Wins");
  } else if (dataNum[3].innerHTML === "O" && dataNum[4].innerHTML ==="O" && dataNum[5].innerHTML ==="O") {
  alert("Player O Wins");
} else if (dataNum[2].innerHTML === "O" && dataNum[5].innerHTML      ==="O" && dataNum[8].innerHTML ==="O") {
    alert("Player O Wins");
  } else if (dataNum[0].innerHTML === "O" && dataNum[4].innerHTML ==="O" && dataNum[8].innerHTML ==="O") {
  alert("Player O Wins");
} else if (dataNum[2].innerHTML === "O" && dataNum[4].innerHTML ==="O" && dataNum[6].innerHTML ==="O") {
  alert("Player O Wins");
  }
}

})
