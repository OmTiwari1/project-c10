var movingship
var sea
var sea1
var invisblewall
function preload(){
movingship=loadAnimation("ship-1.png","ship-2.png","ship-3.png")
sea=loadImage("sea.png")

}

function setup(){
  createCanvas(600,600);
  sea1=createSprite(300,300,600,600)
  sea1.addImage(sea)
  sea1.velocityX=-4
  movingship=createSprite(300,300,200,400)
  movingship.addAnimation("ship-1.png","ship-2.png","ship-3.png")
  movingship.scale=0.3
 invisblewall= createSprite(300,550,600,20)
 movingship.collide(invisblewall)
 invisblewall.visible=false;

}
function draw() {
  background(0);
if(sea1.x<0){
  sea1.x=300
}
 drawSprites()
}
