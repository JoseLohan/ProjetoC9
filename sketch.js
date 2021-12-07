
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
}

function draw() 
{

  if (keyDown("left")) 
  {
    background("red");
}
drawSprites();
}
