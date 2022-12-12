var canvas;
var bgImg, bgImg2
var database;
var form, player, game;
var gameState = 0;
var obstacles;
var lifeImage;
var bancada;
var reticulaImg = "";
var reticula;


function preload() {
  bgImg = loadImage('./assets/fundo-madeira.png')
  bgImg2 = loadImage('./assets/bg.png')
  obstacle1Image = loadImage('./assets/alvo.png')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  game = new Game();
  game.start();

}

function draw() {
  background(bgImg);
  if (gameState == 1) {
    game.play()
  }

  text("X:"+mouseX+"  Y:"+mouseY,mouseX,mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
