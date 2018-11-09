var canvas; // variable holds contextual aspects of game canvas
var canvasBackground; // variable keeps track of actual objects of the canvas

window.onload = function() {
	console.log("SnakeGame");			
	canvas = document.getElementById('gameCanvas');
	canvasBackground = canvas.getContext('2d');
	canvasBackground.fillStyle = 'black';
	canvasBackground.fillRect(0,0,canvas.width,canvas.height);
	canvasBackground.fillStyle = 'red';
	canvasBackground.fillRect(250,200,20,20);
	canvasBackground.fillStyle = 'white'
	canvasBackground.fillRect(200,300,20,20);

	let snake = [
		{x: 150, y: 150},
		{x: 140, y: 150},
		{x: 130, y: 150},
		{x: 120, y: 150},
		{x: 110, y: 150}
	]

	setInterval(function(){drawSnakePart(snakePart)},3000)	
	snake.forEach(drawSnakePart)

}

//drawSnake();

//function drawSnake(){
	//snake.forEach(drawSnakePart)
//}

	function drawSnakePart(snakePart){
	canvasBackground.fillStyle = 'blue';
	canvasBackground.strokestyle = 'black';
	canvasBackground.fillRect(snakePart.x + 30, snakePart.y, 10, 10);
	canvasBackground.strokeRect(snakePart.x + 30, snakePart.y, 10, 10);		
}

