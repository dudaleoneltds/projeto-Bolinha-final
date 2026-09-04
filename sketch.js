// Projeto Bolinha Final
// Movimentando a bolinha no eixo x e y
let xBolinha = 200;
let yBolinha = 200;
let diametro = 15; 

let xVelocidade = 5;
let yVelocidade = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoX();
  verificaColisaoY();
}

// ---------- Função mostra Bolinha ----------
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro); 
}

// --------- Função movimenta Bolinha -----------
function movimentaBolinha() {
  xBolinha += xVelocidade;
  yBolinha += yVelocidade; 
}

// -------------- Verifica colisão no eixo X ------------
function verificaColisaoX() {
  if (xBolinha > width || xBolinha < 0) {
    xVelocidade *= -1;
  }
}

// ------------ Verifica Colisão no eixo Y --------------
function verificaColisaoY() {
  if (yBolinha > height || yBolinha < 0) {
    yVelocidade *= -1;
  }
}

// ---------- Função click ------
function mousePressed() {
  xVelocidade *= -1;
  console.log('Mudando a velocidade', xVelocidade); 
}
