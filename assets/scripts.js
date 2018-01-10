const board = [];
const snake = [
  { body: { x: 0, y: 20 },
  move: 'R' }, 
  { body: { x: 10, y: 20 },
  move: 'R' },
  { body: { x: 20, y: 20 },
  move: 'R' }]
let pendingMove = '';

const minX = 0;
const maxX = (window.innerWidth - window.innerWidth%10);
const minY = 0;
const maxY = (window.innerHeight - window.innerHeight%10);

const initBoard = (board) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  board = new Array((width - width%10)/10);
  board = board.map((item) => new Array((height - height%10)/10));
}

const drawSnake = (snake) => {
  snake.map((segment) => {
  	console.log('drawing snake segment')
    rect(segment.body.x, segment.body.y, 10, 10)
  })
}

const moveSnake = (snake) => {
  snake = snake.map((segment) => {
  	switch(segment.move) {
  	  case 'R':
  	    if (segment.body.x < maxX) segment.body.x = segment.body.x + 10;
  	    else segment.body.x = minX;
  	  default:
  	    console.log('default')
  	}
  	return segment;
  })
}

// directions
// R = x + 10
// L = x - 10
// U = y - 10
// D = y + 10

const initGame = () => {
  initBoard(board);
  console.log(board);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 255;
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  initGame();
}

function draw() {
  background(255)
  fill(0)
  drawSnake(snake);
  moveSnake(snake);
  //ellipse(50, 50, 80, 80);
}

console.log('loaded')