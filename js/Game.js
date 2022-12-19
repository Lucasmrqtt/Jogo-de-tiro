class Game {
  constructor() {
    this.resetTitle = createElement('h2')
    this.resetButton = createButton('') 
  }

  start() {
    form = new Form();
    form.display();
    
    obstacles = new Group()
    var obstaclesPositions = [
      { x: width / 2 - 535, y: height / 2 - 215, image: obstacle1Image },
      { x: width / 2 - 490, y: height / 2, image: obstacle1Image },  
      { x: width / 2 , y: height / 2 - 100, image: obstacle1Image },
      { x: width / 2 - 180, y: height /2, image: obstacle1Image },
      { x: width / 2, y: height / 2, image: obstacle1Image },
      { x: width / 2 - 180, y: height / 2 - 200, image: obstacle1Image },
      { x: width / 2 + 180, y: height / 2 - 100, image: obstacle1Image }, 
      { x: width / 2, y: height / 2, image: obstacle1Image },
      { x: width / 2 - 300, y: height / 2 - 200, image: obstacle1Image },
      { x: width / 2 + 500, y: height / 2 + 100, image: obstacle1Image },
      { x: width / 2 + 300, y: height / 2, image: obstacle1Image },
      { x: width / 2 + 180, y: height / 2 + 100, image: obstacle1Image }
    ];
    
    gun = createSprite(width/2 + 50,500)
    gun.addImage(gunImg)
    gun.scale = 1.7
    
    alvo1 = createSprite(random(50,width-50),random(50,400  ))
    alvo1.addImage(obstacle1Image)
    alvo1.scale = 0.5
    //this.addSprites(obstacles,1,obstacle1Image,0.5)

  }

  addSprites(spriteGroup, numberOfSprites, spriteImage, scale,positions=[]) {
    for (var i = 0; i < numberOfSprites; i++) {
      var x, y;

      if (positions.length>0) {
        x = positions[i].x
        y = positions[i].y
        spriteImage = positions[i].image
      } else {
        x = random(50,width-50);
        y = random(50, 400 );
      }
      
      var sprite = createSprite(x, y);
      sprite.addImage("sprite", spriteImage);

      sprite.scale = scale;
      sprite.depth = gun.depth-1
      spriteGroup.add(sprite);
    }

  }

  handleElements(){
    form.hide();

    this.resetTitle.html('Reset')
    this.resetTitle.position(width/2+500,40)
    this.resetTitle.class('resetText')
    this.resetButton.position(width/2+500,100)
    this.resetButton.class('resetButton')

  }

  play(){
    
    this.handleElements()
    this.handleResetButton()
    background(bgImg2)
    
    player.handlePlayerControls()

    if (mousePressedOver(alvo1)) {
      alvo1.destroy()
    }
    
    drawSprites()
      
  }

  handleResetButton(){
    this.resetButton.mousePressed(
      () => {
      window.location.reload()
    })
  }

  showRank() {
      swal({
        //title: `Incrível!${"\n"}Rank${"\n"}${player.rank}`,
        title: `Incrível!${"\n"}${player.rank}º lugar`,
        text: "Você alcançou a linha de chegada com sucesso!",
        imageUrl:
          "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
        imageSize: "100x100",
        confirmButtonText: "Ok"
      });
  }
  
  gameOver() {
      swal({
        title: `Fim de Jogo`,
        text: "Oops você perdeu a corrida!",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
        imageSize: "100x100",
        confirmButtonText: "Obrigado por jogar"
      });
  }
  
  showLife() {
      
  }

  handleObstacleCollision(index) {
    if (cars[index - 1].collide(obstacles)) {
      if (this.leftKeyActive) {
        player.posX += 100;
      } else {
        player.posX -= 100;
      }

      //Reduzindo a vida do jogador
      if (player.life > 0) {
        player.life -= 185 / 4;
      }

      player.update();
    }
  }

}