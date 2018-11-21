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

	
	//moveUp(snake, snakeCopy);
	snake.forEach(function(snakePart){
		drawSnakePart(snakePart);
	})

	document.onkeyup = whichKey;
	
}


function moveUp(snake,snakeCopy){
	snake[0] = {x: snakeCopy[0].x, y: snakeCopy[0].y - 10};
	for(let i = 0; i < snake.length - 1; i++){
		snake[i + 1] = {x: snakeCopy[i].x, y: snakeCopy[i].y};
	}
	return snakeCopy;
}

function whichKey(event){
	key = event.keyCode;
		//canvasBackground.fillStyle = 'black';
		//canvasBackground.fillRect(0,0,canvas.width,canvas.height);
	switch(key){
		case 38: // move up arrow
			moveUp();
			break;
	}
	canvasBackground.fillRect(snakePart.x , snakePart.y , 10, 10);
	canvasBackground.strokeRect(snakePart.x , snakePart.y , 10, 10);
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

<<<<<<< HEAD
=======

 	

 	

     
      










>>>>>>> bfd37ccedd46a4d163abd3d90e10b24c135a207b

function()