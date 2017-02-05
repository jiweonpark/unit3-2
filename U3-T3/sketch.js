var speed = 3;
var x = 0


function setup() {
  createCanvas(500,500);
  background(0,0,0)

  rect(0, 75, 500, 50);
  rect(0, 175, 500, 50);
  rect(0, 275, 500, 50);
  rect(0, 375, 500, 50);
}




 function draw() {
   
  c1 = ellipse(x+70, 100, 50, 50);
  c2 = ellipse(x, 200, 50, 50);
  c3 = ellipse(x+350, 300, 50, 50);
  c4 = ellipse(x+210, 400, 50, 50);
  
  if (x > width-350) {
    speed = -3;
    fill(255, 255, 255);
  }

  x = x + speed
  
  if (x < 0) {
    speed = speed* -1
    fill(random(0,255), random(0,255), random(0,255))
  }
    
}