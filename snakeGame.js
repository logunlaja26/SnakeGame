var canvas; // variable holds contextual aspects of game canvas
var canvasBackground; // variable keeps track of actual objects of the canvas

window.onload = function() {
	console.log("SnakeGame");			
	let canvas = document.getElementById('gameCanvas');
	let canvasBackground = canvas.getContext('2d');
	canvasBackground.fillStyle = 'black';
	canvasBackground.fillRect(0,0,canvas.width,canvas.height);
	
	let snake = {
		direction: 'RIGHT',
		body: [
			{x: 150, y: 150},
			{x: 140, y: 150},
			{x: 130, y: 150},
			{x: 120, y: 150},
			{x: 110, y: 150},
			{x: 100, y: 150},
			{x: 90, y: 150}
		]
	}
	document.onkeyup = function(event){
		snake.direction = whichKey(event)
	};
	setInterval(function(){main(snake);},100);	
}

function main(snake){
	drawCanvas();
	drawFood();

	let snakeCopy = [];

	snake.body.forEach(function(snakePart){
		snakeCopy.push(snakePart);
	});

	snake.body.forEach(function(snakePart){
		drawSnakePart(snakePart);
	});
	
	if (snake.direction === 'RIGHT') {
		moveRight(snake.body, snakeCopy);
	} 

	if (snake.direction === 'LEFT') {
		moveLeft(snake.body, snakeCopy);
	}

	if (snake.direction === 'UP') {
		moveUp(snake.body, snakeCopy);
	}

	if (snake.direction === 'DOWN') {
		moveDown(snake.body, snakeCopy);
	}
	
}

function moveUp(snake,snakeCopy){
	snake[0] = {x: snakeCopy[0].x, y: snakeCopy[0].y - 10};
	for(let i = 0; i < snake.length - 1; i++){
		snake[i + 1] = {x: snakeCopy[i].x, y: snakeCopy[i].y};
	}
	return snakeCopy;
}

function moveDown(snake, snakeCopy){
	snake[0] = {x: snakeCopy[0].x, y: snakeCopy[0].y + 10};
	for(let i = 0; i < snake.length - 1; i++){
		snake[i + 1] = {x: snakeCopy[i].x, y: snakeCopy[i].y};
	}
	return snakeCopy;
}

function moveRight(snake, snakeCopy){
	snake[0] = {x: snakeCopy[0].x + 10, y: snakeCopy[0].y};
	for(let i = 0; i < snake.length - 1; i++){
		snake[i + 1] = {x: snakeCopy[i].x, y: snakeCopy[i].y}
	}
	return snakeCopy;
}

function moveLeft(snake, snakeCopy){
	snake[0] = {x: snakeCopy[0].x - 10, y: snakeCopy[0].y};
	for(let i = 0; i < snake.length - 1; i++){
		snake[i + 1] = {x: snakeCopy[i].x, y: snakeCopy[i].y}
	}
	return snakeCopy;
}

function whichKey(event){
	key = event.keyCode;
	switch(key){
		case 37: // left arrow key
			return 'LEFT';
		case 38: //  up arrow key
			return 'UP';
		case 39: // right up arrow
			return 'RIGHT';
		case 40: // down up arrow
			return 'DOWN';
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

function createFood() {
	foodX = math.floor((math.random() * 30) - 10)
	foodY = math.floor((math.random() * 30) - 10)

	snake.body.forEach(funtion isOnSnake(snakePart){
		if (snakePart.x == foodX && snakePart.y == foodY)
			createFood();
	}); 
}

function drawFood(){
	let canvas = document.getElementById('gameCanvas');
	let canvasBackground = canvas.getContext('2d');
	canvasBackground.fillStyle = 'red';
	canvasBackground.fillRect(foodX, foodY,15,15);
}
