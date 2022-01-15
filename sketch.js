var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  
  
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 490 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createjewelry();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+50;
      
    }else if(jewelryG.isTouching(boy)) {
      jewelryG.destroyEach();

       //treasureCollection= + 150;
       treasureCollection=  +550 + 550;
       //treasureCollection= treasureCollection - 150;
     treasureCollection= treasureCollection + 550 + 550;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
       
        // cashG.destroyEach;
        // diamondsG.destroyEach;
        // jewelryG.destroyEach;
        // swordGroup.destroyEach;

         cashG.destroy();
        diamondsG.destroy();
         jewelryG.destroy();
        swordGroup.destroy();
        
        // cashG.destroyEach();
        // diamondsG.destroyEach();
        // jewelryG.destroyEach();
        // swordGroup.destroyEach();
        
        // cashGdestroyEach();
         //diamondsGdestroyEach();
        // jewelryGdestroyEach();
        // swordGroupdestroyEach();
        
        cashG.setVelocityYEach(1);
        diamondsG.setVelocityYEach(-1);
        jewelryG.setVelocityYEach(1);
        swordGroup.setVelocityYEach(1);
        
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(Math.round(random(50, 350),40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.13;
  jewelry.velocityY = 3;
  jewelry.lifetime = 150;
  jewelryG.add(jewelry);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
