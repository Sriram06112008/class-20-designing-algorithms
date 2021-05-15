var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 70, 100);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 4;

  movingRect = createSprite(600, 600, 50, 90);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -4;

}

function draw() {
  background(0); 
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if( movingRect.x -fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x -movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y -fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y -movingRect.y < movingRect.height/2 + fixedRect.height/2
    ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";

  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";

  }
  console.log(movingRect.x -fixedRect.x);
  console.log(movingRect.width/2 + fixedRect.width/2)

*/

if( movingRect.x -fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.x -movingRect.x < movingRect.width/2 + fixedRect.width/2  ) {

    movingRect.velocityX = movingRect.velocityX*(-1);
    fixedRect.velocityX = fixedRect.velocityX*(-1);
  }

  if( movingRect.y -fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y -movingRect.y < movingRect.height/2 + fixedRect.height/2  ) {
  
      movingRect.velocityY = movingRect.velocityY*(-1);
      fixedRect.velocityY = fixedRect.velocityY*(-1);
    }


  drawSprites();
}