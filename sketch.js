//var jogo
//var seaImg, shipImg1

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

  sea = createSprite(50,160,300,300)
  sea.addAnimation("running", seaImg);
  barco = createSprite(180,200,20,50)
  barco.addAnimation("running2", shipImg1);

  barco.scale = 0.4

  sea.velocityX = sea.velocityX - 0.5


  if(seaImg.x < 0){
    seaImg.x = seaImg.width/2;
  }
}

function setup(){

}

function draw() {
  background("blue");
  drawSprites();


}
