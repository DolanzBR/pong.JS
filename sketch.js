//variaveis da bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro / 2;

//velocidade da bolinha
let VelocidadeXBolinha = 8;
let VelocidadeYBolinha = 8;

//raquete

let XRaquete = 5;
let YRaquete = 150;
let ComprimentoRaquete = 10;
let = AlturaRaquete = 90;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYop;
let velocidadeXop;
let chanceDeErrar = 0;

//placar do jogo
let meusPontos = 0;
let PontosOP = 0;

let colid = false

//efeitos sonoros

let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(0);
  mostraBolinha();
  movimentacaoBolinha();
  verificacolisao();
  MostraRaquete(XRaquete, YRaquete);
  MostraRaquete(xRaqueteOponente, yRaqueteOponente);
  Movimentacaoraquete();
  BolaColisaoRaquete(XRaquete, YRaquete);
  BolaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  movraqueteopnente();
  mostraPlacar();
  marcaPontos();
  bolinhaNaoFicaPresa();
}

function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro)
  
}

function movimentacaoBolinha(){
  xBolinha += VelocidadeXBolinha
  yBolinha += VelocidadeYBolinha
}

function verificacolisao(){
    if (xBolinha + raio > width || 
      xBolinha - raio <0){  
      VelocidadeXBolinha *= -1;
  }
    if (yBolinha + raio > height || 
      yBolinha -raio <0){
        VelocidadeYBolinha *= -1;
  }

  }
function MostraRaquete(x, y){
    rect(x, y, ComprimentoRaquete, AlturaRaquete);
}
  
function MovimentacaoraqueteOP(){
  if (keyIsDown(87)){
    YRaquete -= 10;
  }
   if (keyIsDown(83)){
    YRaquete += 10;
}
}
  
function Movimentacaoraquete(){
  if (keyIsDown(UP_ARROW)){
    YRaquete -= 10;
  }
   if (keyIsDown(DOWN_ARROW)){
    YRaquete += 10;
}
}

  
function movraqueteopnente(){
  velocidadeYop =  yBolinha - yRaqueteOponente - ComprimentoRaquete + 30 + chanceDeErrar;
   yRaqueteOponente += velocidadeYop;
  calculaChanceDeErrar();
 }
  
function BolaColisaoRaquete(x, y){
 colid =
  collideRectCircle(x,y, ComprimentoRaquete, AlturaRaquete, xBolinha, yBolinha, raio);
  if (colid){VelocidadeXBolinha *= -1; raquetada.play();
            }
}

function mostraPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(22);
  fill(color(255,140,0)) 
  rect(180, 17, 40, 20);
  fill(255);
  text(meusPontos,200,35)
  fill(color(255,140,0))
  rect(380, 17, 40, 20)
  fill(255);
  text(PontosOP,400, 35)
}

function marcaPontos(){
  if (xBolinha > 590){meusPontos += 1; ponto.play();
  }
  if(xBolinha < 15){PontosOP += 1;ponto.play();
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto= loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");

}  

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
      xBolinha = 23
    }
    if (xBolinha + raio > 600){
      xBolinha = 580
    }
}

function calculaChanceDeErrar(){
  if (PontosOP > meusPontos + 2) {
    chanceDeErrar = random (-54, -20)}
  else {chanceDeErrar = 0}
  }