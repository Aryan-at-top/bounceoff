/*var a , b 



function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(460, 200, 50, 50);

}

function draw() {
  background(230);  
  b.x=World.mouseX
  b.y=World.mouseY
  console.log(b.x-a.x)
  if(b.x-a.x===a.width/2+b.width/2||a.x-b.x===a.width/2+b.width/2||b.y-a.y===a.height/2+b.height/2||a.y-b.y===a.height/2+b.height/2){
a.shapeColor="red"
b.shapeColor="red"
  }else{
    a.shapeColor="grey"
    b.shapeColor="grey"
  }
  drawSprites();
}*/
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  drawSprites();
}