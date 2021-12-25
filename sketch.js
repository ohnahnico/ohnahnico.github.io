let tree;
let star;

function preload() {
  tree = loadImage("christmas_tree.png");
  star = loadImage("star.png");
}

function setup() {
  createCanvas(800, 800)
}

function draw(){
  background(0,0,0);
  image(tree, 50,100,500,500);
  image(star, mouseX,mouseY,300,300)
  if((mouseX >= 140) && (mouseX <= 150) && (mouseY >= 35) && (mouseY <= 70)){
    textSize(32)
    fill(255,255,255)
    text("Merry Christmas", 200, 100)
    
  }
}