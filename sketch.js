var path,runner, leftboundary,rightboundary;
var pathI,runnerI;

function preload(){
  //pre-load images

  runnerI=loadAnimation("Runner-1.png,Runner-2.png")
  pathI=loadImage("path.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here

runner=createSprite(180,340,30,30)
runner=addAnimation("running",runnerI)
runner.scale=0.07;

path=createSprite(200,200)
path=addImage("way",path.png)
path.velocityY = 4;
path.scale=1.2;

leftboundary=createSprite(0,0,100,800);
leftboundary.visible = false;

rightboundary=createSprite(410,0,100,800);
rightboundary.visible = false;
}

function draw() {
  background(0);
  
   path.velocityY = 4;}

  runner.x = World.mouseX;
  
  edges= createEdgeSprites();
  runner.collide(edges);
  runner.collide(leftboundary);
  runner.collide(rightboundary);

  if(path.y > 400 ){
    path.y = height/2;

}
