var canvas;
var bgImg, bgImg2
var database;
var form, player, game;
var gameState = 0;
var obstacles;
var lifeImage;
var bancada;
var reticulaImg;
var reticula = 1;
var player1;
var gun,gunImg
var alvo1,alvo2;

function preload() {
  bgImg = loadImage('./assets/fundo-madeira.png')
  bgImg2 = loadImage('./assets/bg.png')
  gunImg = loadImage ('./assets/sniper.png')
  obstacle1Image = loadImage('./assets/alvo.png')
  //reticulaImg = loadImage("./assets/White/crosshair001.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  game = new Game();
  game.start();

}

function draw() {
  background(bgImg);
  if (gameState == 1) {
    switch (reticula) {
      case 1:
        reticulaImg = loadImage("./assets/White/crosshair001.png")
        break;
      case 2:
        reticulaImg = loadImage("./assets/White/crosshair022.png")
        break
      case 3:
        reticulaImg = loadImage("./assets/White/crosshair040.png")
        break
      case 4:
        reticulaImg = loadImage("./assets/White/crosshair047.png")
        break
      case 5:
        reticulaImg = loadImage("./assets/White/crosshair058.png")
        break
      case 6:
        reticulaImg = loadImage("./assets/White/crosshair141.png")
        break
      default:
        reticulaImg = loadImage("./assets/White/crosshair001.png")
        break;
    }
    game.play()
  }

  //drawSprites()
  text("X:"+mouseX+"  Y:"+mouseY,mouseX,mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}