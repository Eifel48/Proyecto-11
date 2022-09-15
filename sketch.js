var ship, ship_browse;
var sea, seaImg;
function preload(){
seaImg=loadImage("sea.png");
ship_browse=loadAnimation("ship-1.png","ship-2.png");

}

function setup(){
  createCanvas(400,400);

  sea=createSprite(200,180,400,20);
  sea.scale=0.3;
  sea.addImage(seaImg);
  sea.velocityX=-4;

  ship=createSprite(50,160,20,50);
  ship.addAnimation("browse", ship_browse);
  ship.scale=0.2;
  ship.x=120;
  
  
  }

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/2;
  }
  drawSprites();
}