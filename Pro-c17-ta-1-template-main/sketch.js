
function setup() 
{
  createCanvas(400, 400);
  Box1= new Box(200,100,50,50,0.5)
  Box2= new Box(100,200,30,30,-0.5)
}

function draw() 
{
  background(220);
  Box1.display()
  Box1.changePosition()
  Box2.display()
  Box2.changePosition()
}

