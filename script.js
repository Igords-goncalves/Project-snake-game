let canvas = window.document.querySelector('canvas#snake'); 
let context = canvas.getContext('2d');
let box = 32;
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let derection = 'right';

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

function start() {
    criarBg();
    criarSnake();

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
