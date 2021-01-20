var monkey , monkey_running, ground;
var bananaImage, obstacleImage;
var fruitGroup, obstaclesGroup, fruit, obstacle;
var score;
function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}
function setup() {
  createCanvas(400,400);
monkey=createSprite(50,325,15,15);
monkey.addAnimation("monnkey_running",monkey_running);  
monkey.scale=0.1;
  ground=createSprite(200,360,600,10);
  ground.color=blue;
  //ground.velocityX=-4;
  ground.x=ground.width/2;
  fruitGroup=createGroup();
  obstaclesGroup=createGroup();
  score=0;
}
function draw(){
  background("white");
  drawSprites();
  if (keyDown("space") && monkey.y>300){
    monkey.velocityY=-12;
  }
  monkey.velocityY= monkey.velocityY + 0.8;
  monkey.collide(ground);
  background.velocityX=-4; 
  spawnFruit();
  spawnObstacles();
  score = score + Math.round(getFrameRate()/61);
  text("Survival Time"+ score, 200,50);
  if (monkey.isTouching(obstaclesGroup)){
    text("Game Over",200,200);
    monkey.velocityX=0;
    monkey.velocityY=0;
    fruit.velocityX=0;
    obstacle.velocityX=0
    fruitGroup.velocityX=0;
    obstaclesGroup.velocityX=0;
    background.velocityX=0;
    score=0;
    fruitGroup.destroyEach();
    obstaclesGroup.destroyEach();
  }
 }
function spawnFruit(){
  if (frameCount % 80 === 0){
    fruit=createSprite(395,200,40,10);
    fruit.y=Math.round(random(80,200));
    fruit.addImage("bananaImage",bananaImage);
    fruit.scale=0.1;
    fruit.velocityX=-4;
    fruit.lifetime=100;
    fruitGroup.add(fruit);
  }   
}
function spawnObstacles(){
  if (frameCount % 250 === 0){
    obstacle=createSprite(800,320,10,40);
    obstacle.y=Math.round(random(250,395));
    obstacle.addImage("obstacleImage",obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-4;
    obstacle.lifetime=200;
    obstaclesGroup.add(obstacle);
  }
}