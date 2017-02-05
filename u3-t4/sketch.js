var x = 0;
var speed = 3;


function setup() {
  createCanvas(500,500);

}

function draw() {
  background(0);
  c1 = ellipse(x+40, 100, 50, 50);
  c2 = ellipse(x, 200, 50, 50);
  c3 = ellipse(x+400, 300, 50, 50);
  c4 = ellipse(x+150, 400, 50, 50);
  
  if (x > width) {
    speed = -3;
    fill(255, 204, 0);
    
  }

  x = x + speed
  
  if (x < 0) {
    speed = speed* -1
    fill(random(0,255), random(0,255), random(0,255))
    
  }
    
}