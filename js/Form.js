class Form {
  constructor() {
    this.playButton = createButton("Jogar");
    this.ret1 = createImg("./assets/white/crosshair001.png")
    this.ret2 = createImg("./assets/white/crosshair022.png")
    this.ret3 = createImg("./assets/white/crosshair040.png")
    this.ret4 = createImg("./assets/white/crosshair047.png")
    this.ret5 = createImg("./assets/white/crosshair058.png")
    this.ret6 = createImg("./assets/white/crosshair141.png")
    this.titleImg = createImg("./assets/titulo.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  setElementsPosition(){
    this.titleImg.position(150,60)
    this.playButton.position(width/2-90,height/2-20)
    this.greeting.position(width/2-150,height/2-250)
    this.ret1.position(width/2-100,height/2-100)
    this.ret2.position(width/2,height/2-100)
    this.ret3.position(width/2+100,height/2-100)
    this.ret4.position(width/2-100,height/2)
    this.ret5.position(width/2,height/2)
    this.ret6.position(width/2+100,height/2)
  }

  setElementsStyle(){
    this.playButton.class('customButton')
    this.titleImg.class('gameTitle')
    this.greeting.class('greeting')
    this.ret1.class('bgReticula')
    this.ret2.class('bgReticula')
    this.ret3.class('bgReticula')
    this.ret4.class('bgReticula')
    this.ret5.class('bgReticula')
    this.ret6.class('bgReticula')
    this.ret1.hide()
    this.ret2.hide()
    this.ret3.hide()
    this.ret4.hide()
    this.ret5.hide()
    this.ret6.hide()
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.ret1.hide()
    this.ret2.hide()
    this.ret3.hide()
    this.ret4.hide()
    this.ret5.hide()
    this.ret6.hide()
    
  }

  display(){
    this.setElementsPosition()
    this.setElementsStyle()
    this.handleMousePressed()
  }

  handleMousePressed(){
    this.playButton.mousePressed(
       () => {
        this.playButton.hide()
        this.titleImg.hide()
        this.greeting.html('Escolha sua retícula')
        this.ret1.show()
        this.ret2.show()
        this.ret3.show()
        this.ret4.show()
        this.ret5.show()
        this.ret6.show()
    } )
    this.ret1.mouseClicked( ()=>{
      reticulaImg = ("./assets/white/crosshair001.png")
      gameState = 1
    } )

    this.ret2.mouseClicked( ()=>{
      reticulaImg = ("./assets/white/crosshair022.png")
      gameState = 1
    } )

    this.ret3.mouseClicked( ()=>{
      reticulaImg = ("./assets/white/crosshair040.png")
      gameState = 1
    } )

    this.ret4.mouseClicked( ()=>{
      reticulaImg = ("./assets/white/crosshair047.png")
      gameState = 1
    } )

    this.ret5.mouseClicked( ()=>{
      reticulaImg = ("./assets/white/crosshair058.png")
      gameState = 1
    } )
    
    this.ret6.mouseClicked( ()=>{
      reticulaImg = ("./assets/white/crosshair141.png")
      gameState = 1
    } )
    
  }

}
