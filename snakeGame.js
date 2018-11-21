var canvas; // variable holds contextual aspects of game canvas
var canvasBackground; // variable keeps track of actual objects of the canvas

window.onload = function() {
	console.log("SnakeGame");			
	let canvas = document.getElementById('gameCanvas');
	let canvasBackground = canvas.getContext('2d');
	canvasBackground.fillStyle = 'black';
	canvasBackground.fillRect(0,0,canvas.width,canvas.height);
	
	let snake = [
		{x: 150, y: 150},
		{x: 140, y: 150},
		{x: 130, y: 150},
		{x: 120, y: 150},
		{x: 110, y: 150},
		{x: 90, y: 150}

	]

	setInterval(function(){main(snake);},1000 );	

	function main(snake){
		drawCanvas();
		drawFood();


		let snakeCopy = [];

		snake.forEach(function(snakePart){
			snakeCopy.push(snakePart);
		});

		snake[0] = {x: snakeCopy[0].x, y: snakeCopy[0].y - 10};
		snake[1] = {x: snakeCopy[0].x, y: snakeCopy[0].y};
		snake[2] = {x: snakeCopy[1].x, y: snakeCopy[1].y};
		snake[3] = {x: snakeCopy[2].x, y: snakeCopy[2].y};
		snake[4] = {x: snakeCopy[3].x, y: snakeCopy[3].y};

		drawSnakePart(snake[0]);
		drawSnakePart(snake[1]);
		drawSnakePart(snake[2]);
		drawSnakePart(snake[3]);
		drawSnakePart(snake[4]);
}
	

}

function drawSnakePart(snakePart){
	let canvas = document.getElementById('gameCanvas');
	let canvasBackground = canvas.getContext('2d');
	canvasBackground.fillStyle = 'blue';
	canvasBackground.strokestyle = 'blue';
	canvasBackground.fillRect(snakePart.x , snakePart.y , 10, 10);
	canvasBackground.strokeRect(snakePart.x , snakePart.y , 10, 10);
}


function drawCanvas(){
	let canvas = document.getElementById('gameCanvas');
	let canvasBackground = canvas.getContext('2d');
	canvasBackground.fillStyle = 'black';
	canvasBackground.fillRect(0,0,canvas.width,canvas.height);
}

function drawFood(){
	let canvas = document.getElementById('gameCanvas');
	let canvasBackground = canvas.getContext('2d');
	canvasBackground.fillStyle = 'red';
	canvasBackground.fillRect(250,250,15,15);
}

function snakeBody(){
	drawSnakePart(snake[0]);
	drawSnakePart(snake[1]);
	drawSnakePart(snake[2]);
	drawSnakePart(snake[3]);
	drawSnakePart(snake[4]);
}


 	

 	

     
      











