let snake = [];

let pendingMove = 'L';

let score = ''

const minX = 0;
const maxX = (window.innerWidth - window.innerWidth%20);
const minY = 0;
const maxY = (window.innerHeight - window.innerHeight%20);

const foodLocation = {};

const initSnake = () => {
  for (let i = 0; i < 160; i += 20) {
    snake.push({ body: { x: i, y: 20 },
    move: 'L' })
  }
}

const drawScore = () => {
  textSize(24);
  textAlign(LEFT);
  fill(255, 204, 0);
  text(score, 30, 50);
}

const placeFood = () => {
	const randomX = Math.random();
	foodLocation.x = (maxX * randomX) - (maxX * randomX)%20;
	const randomY = Math.random();
	foodLocation.y = (maxY * randomY) - (maxY * randomY)%20;
}

const drawFood = () => {
	rect(foodLocation.x, foodLocation.y, 20, 20);
}

const drawSnake = (snake) => {
  fill(0);
  snake.map((segment) => {
    rect(segment.body.x, segment.body.y, 20, 20)
  })
}

const incrementScore = () => {
  if (score === '') {
    score = 1;
  } else {
    score = parseInt(score) + 1;
  }
}

const detectCollision = () => {
  if (snake[0].body.x === foodLocation.x && snake[0].body.y === foodLocation.y) {
  	snake.push({ body: { x: snake[snake.length-1].body.x, y: snake[snake.length-1].body.y }, move: snake[snake.length-1].move })
  	placeFood();
  }
  if (snake[0].body.x === snake[snake.length-1].body.x && snake[0].body.y === snake[snake.length-1].body.y) {
    console.log('ate tail')
    incrementScore();
  }
}

const prepareNextMove = (snake) => {
	for (let i = snake.length-1; i > 0; i--) {
    snake[i].move = snake[i-1].move;
	}
	snake[0].move = pendingMove;
}

const moveSnake = (snake) => {
  snake = snake.map((segment, index, array) => {
  	if (index === array.length-1) {
  		detectCollision()
  	}
  	switch(segment.move) {
  	  case 'R':
  	    if (segment.body.x < maxX) segment.body.x = segment.body.x + 20;
  	    else segment.body.x = minX;
  	    break;
  	  case 'L':
  	    if (segment.body.x > minX) segment.body.x = segment.body.x - 20;
  	    else segment.body.x = maxX;
  	    break;
  	  case 'D':
  	    if (segment.body.y < maxY) segment.body.y = segment.body.y + 20;
  	    else segment.body.y = minX;
  	    break;
  	  case 'U':
  	    if (segment.body.y > minY) segment.body.y = segment.body.y - 20;
  	    else segment.body.y = maxY;
  	    break;
  	  default:
  	    console.log('default')
  	    break;
  	}
  	return segment;
  })
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    pendingMove = 'L';
  } else if (keyCode === RIGHT_ARROW) {
    pendingMove = 'R';
  } else if (keyCode === UP_ARROW) {
    pendingMove = 'U';
  } else if (keyCode === DOWN_ARROW) {
    pendingMove = 'D';
  } 
}

function setup() {
	frameRate(15)
  createCanvas(windowWidth, windowHeight);
  initSnake();
  placeFood();
}

function draw() {
  background(255)
  fill(0)
  drawFood();
  drawScore();
  drawSnake(snake);
  moveSnake(snake);
  prepareNextMove(snake);
}
