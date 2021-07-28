let ponts = 0;

let canvas = window.document.querySelector('canvas#snake'); // importando o canvas
let context = canvas.getContext('2d'); // serve para criar o background
let box = 32;
let snake = []; // criar cobrinha como lista, já que ela vai ser uma série de coordenadas, que quando pintadas, criam os quadradinhos

// tamanho da snake
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = 'right'; // direção da snake
let food = {
    //Math.floor retira a parte flutuante do Math.random
    //Math.random retorna um número aleatório até 1
    //vai gerar números aleatórios tirando a vírgula até o que setamos
    x: Math.floor(Math.random() * 11) * box,
    y: Math.floor(Math.random() * 11) * box
}

function criarBg() {
    context.fillStyle = '#0e0112'; //Estilo do canvas
    context.fillRect(0, 0, 12 * box, 12 * box); //Desenha o retângulo x, y, altura e largura
}

function criarSnake() {
    for (index = 0; index < snake.length; index++) { // se 0 for menor que o tamanho da snake vai aumentar o tamanho dela de 1 em 1
        context.fillStyle = '#971cbd'
        context.fillRect(snake[index].x, snake[index].y, box, box);// tamanho da snake
    }
}

function criarFood() {
    context.fillStyle = '#ADD8E6';
    context.fillRect(food.x, food.y, box, box);
}

function ganharPontos() {
    document.querySelector('input.pontos').value = ponts;
}

// quando um evento acontece, detecta e chama uma função
document.addEventListener('keydown', update);

// se o número do código for tal e a diração for diferente de tal a snake vai para tal direção
function update(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left'; //Codigo da tecla
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}

function start() {

    let name = document.querySelector('input.nome').value; //Tem que receber o valor
    // se a cabeça da snake na posição x for maior que 12 e a direção for para direita ela vai receber o valor de 0 e vai aparecer do lado de 0 
     // se a snake ultrapassar 15 e 0 de ponto negativo ela sumiria da tela
     //Pense no canavas como plano cartesiano onde a parede esquerda representa x 
     //e a parede direita representa y
     //x p/ esquerda é < 0
     //y p/ baixo é < 0
     //A Partir desse entendimento posso manipular os resultados em relação ao canavas
    if (snake[0].x >= 12 * box && direction == 'right') snake[0].x = 0; //direita do board 
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 11 * box; //Tem que ser menor ue 12
    if (snake[0].y >= 12 * box && direction == 'down') snake[0].y = 0; //de baixo p/ cima do board
    if (snake[0].y < 0  && direction == 'up') snake[0].y = 11 * box; // Tem que ser menor que 12
    
    // se a cabeça se chocar com o corpo, o jogo vai acabar e vai dizer que é o fim do jogo
    for (index = 1; index < snake.length; index++) {
        if (snake[0].x == snake[index].x && snake[0].y == snake[index].y) {
            alert('Game Over! ' + 'Pontuação Total: ' + ponts + ' pnts ' + name);
            clearInterval(game);
        }
    }
    

    // chamando as funções
    criarBg();
    criarSnake();
    criarFood();
    ganharPontos();

    let snakex = snake[0].x; // array na posição 0, x
    let snakey = snake[0].y; // array na posiçao 0, y

    // se a snake tiver em tal posição vai adicionar um quadrado a ela ou diminuir
    if (direction == 'right') snakex += box;
    if (direction == 'left') snakex -= box;
    if (direction == 'up') snakey -= box;
    if (direction == 'down') snakey += box;


    // caso a posição de snakeX seja diferente de food.x e a posição de snakeY for diferente de food.y
    if (snakex != food.x || snakey != food.y){
        snake.pop(); // pop tira o último elemento da lista
    } else { // caso contrário ela vai continuar aumentando e gerar números aleatórios
        food.x = Math.floor(Math.random() * 11 + 1) * box;
        food.y = Math.floor(Math.random() * 11 + 1) * box;
        ponts ++; //A cada elemento tirado da lista um ponto é contabilizado
    }

    //snake.pop(); Aqui estava meu erro, o snake.pop tira o ultimo elemento ou seja a cobrinha nunca iria crescer

    let newHead = {
        x: snakex,
        y: snakey
    }
    snake.unshift(newHead); // método unshift adiciona como primeiro quadradinho da cobrinha
}
function level() {
    let game = document.querySelector('select.level').value; //Ajuste de velocidade
        if (game == '1') game = setInterval(start, 200);
        if (game == '2') game = setInterval(start, 100);
        if (game == '3') game = setInterval(start, 50);
}
