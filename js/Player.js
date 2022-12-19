class Player {
  constructor(reticula) {
    this.index = null
    this.posX = mouseX
    this.posY = mouseY
    this.score = 0
    this.life = 0
    switch (reticula) {
      case 1:
        reticulaImg = loadImage("./assets/White/crosshair001.png")
        break;
      case 2:
        reticulaImg = loadImage("./assets/White/crosshair022.png")
        break;
      case 3:
        reticulaImg = loadImage("./assets/White/crosshair040.png")
        break;
      case 4:
        reticulaImg = loadImage("./assets/White/crosshair047.png")
        break;
      case 5:
        reticulaImg = loadImage("./assets/White/crosshair058.png")
        break;
      case 6:
        reticulaImg = loadImage("./assets/White/crosshair141.png")
        break;
      default:
        reticulaImg = loadImage("./assets/White/crosshair001.png")
        break;
    }
    this.player = createSprite(this.posX, this.posY)
    this.player.addImage(reticulaImg)
    //this.player.visible = false
    this.player.depth = 0
  }

  handlePlayerControls() {
    this.player.position.x = mouseX
    this.player.position.y = mouseY

  }

  showPlayer() {


  }
}