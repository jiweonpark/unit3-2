var tileCountX = 10;
var tileCountY = 10;
var count = 0;
var colorStep = 6;
var endSize = 0;
var stepSize = 30;
var actRandomSeed = 0;

function setup() { 
  createCanvas(780, 780);
} 

function draw() { 
  //colorMode(HSB, 360, 100, 100);
  smooth();
  noStroke();
  background(360); 
  randomSeed(actRandomSeed);
  stepSize = mouseX/10;
  endSize = mouseY/10;
  for (var gridY=0; gridY<= tileCountY; gridY++) {
    for (var gridX=0; gridX<= tileCountX; gridX++) {
        from = color(255, 0, 0, 0.2 * 255);
        to = color(0, 0, 255, 0.2 * 255);
        c1 = lerpColor(from, to, .33);
        c2 = lerpColor(from, to, .66);
        for (var i = 0; i < 15; i++) {
      // kachelgr?ssen und positionen
      var tileWidth = width / tileCountX;
      var tileHeight = height / tileCountY;
      var posX = tileWidth*gridX;
      var posY = tileHeight*gridY;
      switch(int(random(4))) {
      case 0: 
        // modul
        for(var i=0; i< stepSize; i++) {
          var diameter = map(i,0,stepSize,tileWidth,endSize);
          fill(c2);
          ellipse(posX+i, posY, diameter,diameter);
        }
        break;
      case 1: 
        // modul
        for(var i=0; i< stepSize; i++) {
          var diameter = map(i,400,stepSize,tileHeight,endSize);
          fill(to);
          ellipse(posX, posY+i, diameter,diameter);
        }
        break;
      case 2: 
        // modul
        for(var i=0; i< stepSize; i++) {
          var diameter = map(i,0,stepSize,tileWidth,endSize);
          fill(255-(i*colorStep));
          ellipse(posX-i, posY, diameter,diameter);
        }
        break;
      case 3: 
        // modul
        for(var i=0; i< stepSize; i++) {
          var diameter = map(i,0,stepSize,tileHeight,endSize);
          fill(255-(i*colorStep));
          ellipse(posX, posY-i, diameter,random(30,30));
        }
      }
        break;
      }
    }
  }
} 

function mousePressed() {
  actRandomSeed = int(random(100000));
}

function keyTyped(){
  if (key == 's' || key == 'S') save("P_2_1_3_05.png");
}