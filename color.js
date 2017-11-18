var numberOfSquares = 6
var colors = []
var pickedColor
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colordisplay")
var messageDisplay = document.querySelector("#message")
var headingDisplay = document.getElementsByTagName("h1")[0];
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")

init();

	function init(){
	     setupModeButtons()
	     setupSquares()
         reset()
}

function setupModeButtons(){
	for(var i = 0 ; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
    	modeButtons[0].classList.remove("selected")
    	modeButtons[1].classList.remove("selected")
    	this.classList.add("selected")
    	this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6 
        reset()
    })
}
}

function setupSquares(){
	for(i = 0 ; i < squares.length ; i++){
	   squares[i].addEventListener("click",function(){
		  if(this.style.backgroundColor === pickedColor){
			messageDisplay.textContent = "Correct"
			resetButton.textContent = "Play Again?"
			changeColors(pickedColor)
			headingDisplay.style.backgroundColor = pickedColor
		  }
		  else{
		   this.style.backgroundColor = "#232323"
		   messageDisplay.textContent = "Try Again"
		  }
	  })
   }
}
function reset(){
	colors = generateRandomColors(numberOfSquares)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
	messageDisplay.textContent = ""
    resetButton.textContent = "New Colors"
	for(var i = 0; i < squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i]
			squares[i].style.display = "block"
		}
		else squares[i].style.display = "none"
	}
    headingDisplay.style.backgroundColor = "steelblue" 
}
resetButton.addEventListener("click", function(){
	reset();
})
function changeColors(color){
	for(var i = 0 ; i < squares.length; i++){
		squares[i].style.backgroundColor = color
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}
function generateRandomColors(num){
    var colors = []
    for(var i = 0; i < num; i++){
    	colors.push(randomColor())
    }
    return colors
}
function randomColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", "+ g + ", " + b +")"
}