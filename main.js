var numSquares = 6;
var colors = [];
var pickedcolor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  // mode button event listner
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }

  for (var i = 0; i < squares.length; i++) {
    //   add click listner to sqaures
    squares[i].addEventListener("click", function() {
      // grab color of clicked square
      var clickedcolor = this.style.backgroundColor;
      // compare color to pickedcolor
      if (clickedcolor === pickedcolor) {
        messageDisplay.textContent = "correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedcolor);
        h1.style.backgroundColor = clickedcolor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }

  reset();
}

function reset() {
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedcolor = pickColor();
  // change color display to match picked color
  colorDisplay.textContent = pickedcolor;
  resetButton.textContent = "New colors";
  messageDisplay.textContent = "";
  // change colors of sqaure
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function() {
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedcolor = pickColor();
//   colorDisplay.textContent = pickedcolor;
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });

// hardBtn.addEventListener("click", function() {
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedcolor = pickColor();
//   colorDisplay.textContent = pickedcolor;
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });

resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change each color to match color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = [];
  // add num random colors to array
  for (var i = 0; i < num; i++) {
    // get random color and puxh into arr
    arr.push(randomColor());
  }
  // return thst array
  return arr;
}

function randomColor() {
  // pick a "red from 0- 255"
  var r = Math.floor(Math.random() * 256);
  // pick a "green from 0- 255"
  var g = Math.floor(Math.random() * 256);

  // pick a "blue from 0- 255"
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
