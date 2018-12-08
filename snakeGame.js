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

	let food = {
		moving : false,
		coordinates: {x: 190, y: 150},
		midpoint : 10
	}

	document.onkeyup = function(event){
		snake.direction = whichKey(event)
	};
	setInterval(function(){main(snake,food);},1000);	
}

function main(snake,food){
	drawCanvas();
	drawFood(food.coordinates.x, food.coordinates.y); 

	let snakeCopy = [];

	snake.body.forEach(function(snakePart){
		snakeCopy.push(snakePart);
	});

	snake.body.forEach(function(snakePart){
		drawSnakePart(snakePart);
	});

	var isSnakeEatingFood = isSnakeHeadEatingFood(snake, food.coordinates.x, food.coordinates.y);

	if(isSnakeEatingFood){
		food.coordinates.x = Math.ceil((Math.random() * 500)/10) * 10
		food.coordinates.y = Math.ceil((Math.random() * 500)/10) * 10
	}


	
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

function isSnakeHeadEatingFood(snake, foodX, foodY) {
	return snake.body[0].x === foodX && snake.body[0].y === foodY;
}

function drawFood(foodX,foodY){	
	console.log("ale");
	let canvas = document.getElementById('gameCanvas');
	let canvasBackground = canvas.getContext('2d');
	canvasBackground.fillStyle = 'red';
	canvasBackground.fillRect(foodX, foodY,10,10);
	canvasBackground.strokeRect(foodX, foodY, 10, 10);
}

