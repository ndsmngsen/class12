var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var appleImg1;
var leaf;
var leafImg1;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg1 = loadImage("apple.png");
  leafImg1 = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale = 0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //player controls
  rabbit.x = mouseX;
  
  createApples();

  createLeaves();

  drawSprites();
}
function createApples(){
 if(frameCount %80 === 0){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage("fall",appleImg1);
  apple.scale = 0.06;
  apple.velocityY = 4;
  apple.lifetime = 90;
  
 }

}
function createLeaves(){
  if(frameCount %80 === 0){
   leaf = createSprite(random(50,350),40,20,20);
   leaf.addImage("falling",leafImg1);
   leaf.scale = 0.06;
   leaf.velocityY = 4;
   leaf.lifetime = 90;
   
  }
}