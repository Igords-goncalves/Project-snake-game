let canvas = window.document.querySelector('canvas#snake'); 
let context = canvas.getContext('2d');
let box = 32;

function criarBg() {
    context.fillStyle = 'lightgreen'; //Estilo do canvas
    context.fillRect(0, 0, 16 * box, 16 * box); //Desenha o retângulo x, y, altura e largura
}

criarBg();