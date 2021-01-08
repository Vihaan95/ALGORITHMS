var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 100);
  movingRect = createSprite(300, 300, 50, 50);
  fixedRect.shapeColor=  "black";
  movingRect.shapeColor=  "gray";
}

function draw() {
  background(255,255,255);  
  movingRect.x= mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }else{
    fixedRect.shapeColor=  "black";
    movingRect.shapeColor=  "gray";
  }
  drawSprites();
}