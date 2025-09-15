//pegar o canvas do HTML
let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");//"ctx" é o pincel

//Constantes do jogo
const tamanho_jogador = 30;//tamanho do jogador
const velocidade_jogador = 5;//velocidade do jogador

// jogador (quadrado vermelho)
let jogador = {x : 50, y : 50, tamanho : tamanho_jogador, cor : "red" };

// inimigos (array de objetos)
let inimigos = [
{x : 200, y : 200, tamanho : 40, cor : "blue"},
{x : -50, y : -50, tamanho : 60, cor : "yellow"},
{x : -30, y : -100, tamanho : 30, cor : "green"}
];

//movimentação do jogador
let teclas = {};
document.addEventListener("keydown", function(event) {;
teclas[event.key] = true;
});
document.addEventListener("keyup", function(event) {;
teclas[event.key] = false;
});

//função para atualizar a posição do jogador
function atualizarJogador() {
    if(teclas["ArrowUp"]) jogador.y -= velocidade_jogador;
    if(teclas["ArrowDown"]) jogador.y += velocidade_jogador;
    if(teclas["ArrowLeft"]) jogador.x -= velocidade_jogador;
    if(teclas["ArrowRight"]) jogador.x += velocidade_jogador;
}

// função para desenhar o jogador
function desenharQuadrado() {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, tamanho, tamanho);
}

// função para desenhar o inimigo
function desenharInimigos() {
    inimigos.forEach(function(inimigo) {
    ctx.fillStyle = inimigo.cor;
    ctx.fillRect(inimigo.x, inimigo.y, inimigo.tamanho, inimigo.tamanho);
});
}

// movendo o jogador com as setas do teclado
document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowUp") y -= velocidade;
    if(event.key === "ArrowDown") y += velocidade;
    if(event.key === "ArrowLeft") x -= velocidade;
    if(event.key === "ArrowRight") x += velocidade;
    });

    // funcao do jogo
    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // limpa o canvas
        desenharQuadrado();
        desenharInimigo();
    }

    // chama o gameloop 60 vezes por segundo
    setInterval(gameLoop, 1000 / 60); 