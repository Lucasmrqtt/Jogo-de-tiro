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
    //this.player.visible = false
  }

  handlePlayerControls(){
    this.player.position.x = mouseX
    this.player.position.y = mouseY

  }
  
  showPlayer(){
    //this.player.visible = true
  }
}
