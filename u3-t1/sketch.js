var x = 0;
var speed = 3;


function setup() {
  createCanvas(500,500);

}

function draw() {
  background(0);
  fill(255);
  ellipse(x+40, 100, 50, 50);
  ellipse(x, 200, 50, 50);
  ellipse(x+400, 300, 50, 50);
  ellipse(x+150, 400, 50, 50);
  
  if (x > width) {
    speed = -3;
  }

  x = x + speed
  
  if (x < 0) {
    speed = speed* -1
  }
    
}