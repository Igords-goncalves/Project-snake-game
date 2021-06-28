let canvas = window.document.querySelector('canvas#snake'); 
let context = canvas.getContext('2d');
let box = 32;
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}


function criarBg() {
    context.fillStyle = 'lightgreen'; //Estilo do canvas
    context.fillRect(0, 0, 16 * box, 16 * box); //Desenha o retângulo x, y, altura e largura
}

function criarSnake() {
    for (let index = 0; index < snake.length; index++) {
        context.fillStyle = 'green'
        context.fillRect(snake[index].x, snake[index].y, box, box);
    }
}

criarBg();
criarSnake();