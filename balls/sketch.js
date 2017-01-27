function setup() {
  resizeCanvas(300,300);
  var ball = new Ball();
}

var balls = [];

function draw() {
}

function mouseClicked() {
  var ball = new ball();
}

function Ball() {
  // this.x = 50;
  // this.y = 50;
  this.position = new p5.Vector(5, 5);
  this.vector = new p5.Vector(5, 5);
  this.radius = 10;
  
  this.draw = function() {
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
  }
  
  this.update = function() {
    this.position.add(this.vector);
    
  }
}