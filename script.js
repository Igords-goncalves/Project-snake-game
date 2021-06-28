let canvas = window.document.querySelector('canvas#snake'); 
let context = canvas.getContext('2d');
let box = 32;
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = 'right';

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBg() {
    context.fillStyle = 'black'; //Estilo do canvas
    context.fillRect(0, 0, 16 * box, 16 * box); //Desenha o retângulo x, y, altura e largura
}

function criarSnake() {
    for (let index = 0; index < snake.length; index++) {
        context.fillStyle = 'green'
        context.fillRect(snake[index].x, snake[index].y, box, box);
    }
}

function criarFood() {
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}

function start() {

    if (snake[0].x > 15 * box && direction == 'right') snake[0].x = 0;
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == 'down') snake[0].y = 0;
    if (snake[0].y < 0  && direction == 'up') snake[0].y = 16 * box;
    

    criarBg();
    criarSnake();
    criarFood();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if (direction == 'right') snakex += box;
    if (direction == 'left') snakex -= box;
    if (direction == 'up') snakey -= box;
    if (direction == 'down') snakey += box;

    snake.pop();

    let newHead = {
        x: snakex,
        y: snakey
    }
    snake.unshift(newHead);
}
let game = setInterval(start, 100);
