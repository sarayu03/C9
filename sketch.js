var box1;
var box2;

function setup() {
  createCanvas(400,400);

  box1 = createSprite(100,100,50,50)
  box1.shapeColor="red"

  box2 = createSprite(200,200,50,50)
  box2.shapeColor="blue"

}

function draw() 
{
  background(0);

  if(keyDown("right")){
    box1.x = box1.x + 2
  }

  if(keyDown("up")){
    box2.y = box2.y - 2
  }

  if(keyDown("space")){
    box1.shapeColor="blue"
    box2.shapeColor="red"
  }

  drawSprites()

}




