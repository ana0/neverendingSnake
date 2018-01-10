const board = [];
const snake = [
  { body: { x: 0, y: 20 },
  move: false }, 
  { body: { x: 10, y: 20 },
  move: false },
  { body: { x: 1360, y: 650 },
  move: false }]

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

// directions
// R = x + 10
// L = x - 10
// U = y - 10
// D = y + 10

const initGame = () => {
  initBoard(board);
  console.log(board);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  initGame();
}

function draw() {
  fill(0)
  drawSnake(snake);
  console.log(window.innerWidth)
  console.log(window.innerHeight)
  //ellipse(50, 50, 80, 80);
}

console.log('loaded')