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
		{x: 100, y: 150},
		{x: 90, y: 150}

	]

	setInterval(function(){main(snake);},1000);	
}

function main(snake){
	drawCanvas();
	drawFood();

	let snakeCopy = [];

	snake.forEach(function(snakePart){
		snakeCopy.push(snakePart);
	});

	snake.forEach(function(snakePart){
		drawSnakePart(snakePart);
	});

	document.onkeyup = function(event){
		whichKey(event, snake, snakeCopy)
	};
	
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

function whichKey(event, snake, snakeCopy){
	key = event.keyCode;
	switch(key){
		case 37: // left arrow key
			moveLeft(snake, snakeCopy);
			break;
		case 38: //  up arrow key
			moveUp(snake, snakeCopy);
			break;
		case 39: // right up arrow
			moveRight(snake, snakeCopy);
			break;
		case 40: // down up arrow
			moveDown(snake, snakeCopy);
			break;

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

