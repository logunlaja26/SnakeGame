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
		{x: 110, y: 150}
	]

	setInterval(function(){main(snake);},1000);	
	//snake.forEach(drawSnakePart)

}

function drawSnakePart(snakePart){
	function moveUp(snakePart){
		snakePart.y = snakePart.y - 10;
		return snakePart;
	}

	snakePart = moveUp(snakePart)

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

	// food object 
	canvasBackground.fillStyle = 'red';
	canvasBackground.fillRect(250,200,20,20);
}

function main(snake){
	drawCanvas();
	drawSnakePart(snake[0]);
}
 	

 	

     
      











