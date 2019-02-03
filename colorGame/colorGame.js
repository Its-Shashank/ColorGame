var numSquares = 6;
var colors = displayRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	// display 3 colors
	numSquares = 3;
	colors = displayRandomColor(numSquares);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = displayRandomColor(numSquares);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
})
reset.addEventListener("click", function() {
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	// generate new colors
	colors = displayRandomColor(numSquares);
	// pick new colors
	pickedColor = randomColor();
	// display the new color on h1
	colorDisplay.textContent = pickedColor;
	// display colors on squares

	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});
for(var i = 0; i < squares.length; i++) {
	// add color to the squares
	squares[i].style.backgroundColor = colors[i];
	// add click event
	squares[i].addEventListener("click", function() {
		// grab the color
		var clickedColor = this.style.backgroundColor;
		if(clickedColor===pickedColor) {
			messageDisplay.textContent = "Correct!";
			colorChng(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again";
		} else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});

}
function colorChng(color) {
	// loop through the squares
	for(var i = 0; i < squares.length; i++) {
		// all squares turn into clicked color
		squares[i].style.backgroundColor = color;
	}
}
function randomColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function displayRandomColor(num) {
	var arr = []
	for(var i = 0; i < num; i++) {
		arr.push(generateColor());
	}
	return arr;
}
function generateColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
