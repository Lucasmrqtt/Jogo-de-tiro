class Player {
  constructor() {
    this.index = null
    this.posX = 500
    this.posY = 500
    this.score = 0
    this.life = 0
    reticula = loadImage(reticulaImg)
    this.player = createSprite(this.posX,this.posY)
    this.player.addImage(reticula)
  }

  handlePlayerControls(){

    if (!this.blast) {
    
      if (keyIsDown(UP_ARROW)) {
        player.posY += 5
        player.update();
        this.playerMove = true
      } 

      if (keyIsDown(RIGHT_ARROW) && player.posX<width/2+250) {
        this.leftKeyActive = false
        player.posX += 5
        player.update();
      }

      if (keyIsDown(LEFT_ARROW) && player.posX>width/3-50) {
        this.leftKeyActive = true
        player.posX -= 5
        player.update();
      }
    }
  }
  
}
