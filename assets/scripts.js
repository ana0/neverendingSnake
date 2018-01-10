const board = [];
const snake = [
  { body: { x: 0, y: 20 },
  move: 'L' }, 
  { body: { x: 10, y: 20 },
  move: 'L' },
  { body: { x: 20, y: 20 },
  move: 'L' }]
let pendingMove = 'L';

const minX = 0;
const maxX = (window.innerWidth - window.innerWidth%10);
const minY = 0;
const maxY = (window.innerHeight - window.innerHeight%10);

// const initBoard = (board) => {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   board = new Array((width - width%10)/10);
//   board = board.map((item) => new Array((height - height%10)/10));
// }

const drawSnake = (snake) => {
  snake.map((segment) => {
  	console.log('drawing snake segment')
    rect(segment.body.x, segment.body.y, 10, 10)
  })
}

const prepareNextMove = (snake) => {
	for (let i = snake.length-1; i > 0; i--) {
    snake[i].move = snake[i-1].move;
	}
	snake[0].move = pendingMove;
}

const moveSnake = (snake) => {
  snake = snake.map((segment, index, array) => {
  	switch(segment.move) {
  	  case 'R':
  	    if (segment.body.x < maxX) segment.body.x = segment.body.x + 10;
  	    else segment.body.x = minX;
  	    break;
  	  case 'L':
  	    if (segment.body.x > minX) segment.body.x = segment.body.x - 10;
  	    else segment.body.x = maxX;
  	    break;
  	  case 'D':
  	    if (segment.body.y < maxY) segment.body.y = segment.body.y + 10;
  	    else segment.body.y = minX;
  	    break;
  	  case 'U':
  	    if (segment.body.y > minY) segment.body.y = segment.body.y - 10;
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
  createCanvas(windowWidth, windowHeight);
  // initGame();
}

function draw() {
  background(255)
  fill(0)
  drawSnake(snake);
  moveSnake(snake);
  prepareNextMove(snake);
  //ellipse(50, 50, 80, 80);
}

console.log('loaded')