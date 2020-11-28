var fixedRect , movingRect

var tiger , drawing , eagle , lion 

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red"
  tiger=createSprite(200,100,80,30)
  drawing=createSprite(200,250,80,30)
  eagle=createSprite(200,350,90,30)
  lion=createSprite(300,100,90,30)
  tiger.shapeColor="green"
  drawing.shapeColor="cyan"
  eagle.shapeColor="orange"
  lion.shapeColor="gray"
  tiger.velocityX=1;
  lion.velocityX=-1;
}

function draw() {
  background("Yellow");  
  console.log(movingRect.x-fixedRect.x)
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

 if (isTouching(movingRect,fixedRect)){
   movingRect.shapeColor="lime"
   fixedRect.shapeColor="lime"
 } 

 else {
  movingRect.shapeColor="blue"
  fixedRect.shapeColor="blue"
 }

 if (isTouching(movingRect,tiger)){
   movingRect.shapeColor="lime"
   tiger.shapeColor="lime"
 }

 else {
   movingRect.shapeColor="blue"
   tiger.shapeColor="green"
 }

 bounceoff(lion,tiger)
  
  drawSprites();
}

