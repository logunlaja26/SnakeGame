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
		{X: 130, y: 150},
		{X: 120, y: 150},
		{X: 110, y: 150}

	]

	

	drawSnake();

	function drawSnake(snakePart){
		snake.forEach(drawSnakePart)
	}

	function drawSnakePart(snakePart){
		canvasBackground.fillStyle = 'blue';
		canvasBackground.strokestyle = 'black';
		canvasBackground.fillRect(snakePart.x, snakePart.y, 10, 10);
		canvasBackground.strokeRect(snakePart.x, snakePart.y, 10, 10);

		
	}


}


