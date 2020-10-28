var fruits,fruit2,fruit3,fruit4,fruits_image,fruit2_img,fruit3_img,fruit4_img,fruitGroup,fruits2Group,fruits3Group,fruits4Group;

var sword,sword_img,sword_sound;

var alien,alien_img,alien2_img,alienGroup,alien2,alien2Group;

var gameover,gameover_img,gameover_sound;

var play=12;
var end=15;

var gamestate=play;

var score

function preload(){
  
  fruits_image=loadImage("fruit1.png");
  fruit2_img=loadImage("fruit2.png");
  fruit3_img=loadImage("fruit3.png");
  fruit4_img=loadImage("fruit4.png");
  sword_img=loadImage("sword.png");
  alien_img=loadImage("alien1.png");
  alien2_img=loadImage("alien2.png");
  gameover_img=loadImage("gameover.png");
  
  sword_sound=loadSound("knifeSwooshSound.mp3");
  gameover_sound=loadSound("gameover.mp3");

 
}

function setup(){
createCanvas(600,400)

  sword=createSprite(300,200,20,20);
  sword.addImage(sword_img);
  sword.scale=0.5;
  sword.visible=true;
  
  
  fruitsGroup=createGroup();
  fruits2Group=createGroup();
  fruits3Group=createGroup();
  fruits4Group=createGroup();
  alienGroup=createGroup();
  alien2Group=createGroup();
  
  gameover=createSprite(300,200,20,20);
  gameover.addImage(gameover_img);
  gameover.scale=1.5;
  gameover.visible=false;
  
  score=0;

}

function draw(){
  
  background("lightblue");

  text("Score: "+score,530,50);
  
if (gamestate===play){  
  sword.y=mouseY;
  sword.x=mouseX;
  
  
  
  if (fruitsGroup.isTouching(sword)){
    fruitsGroup.destroyEach();
    sword_sound.play();
    score=score+20;
  }
  
  
  if (fruits2Group.isTouching(sword)){
    fruits2Group.destroyEach();
    sword_sound.play();
    score=score+2;
  }

  
  if (fruits3Group.isTouching(sword)){
    fruits3Group.destroyEach();
    sword_sound.play();
    score=score+2;
  }  
  
  if (fruits4Group.isTouching(sword)){
    fruits4Group.destroyEach();
    sword_sound.play();
    score=score+2;
  }  
  
  if (alienGroup.isTouching(sword)){
    gamestate=end;
    gameover_sound.play();
  }
  
  if (alien2Group.isTouching(sword)){
    gamestate=end;
    gameover_sound.play();
  }
  
  var rand = Math.round(random(1,2));
  
  switch(rand){
  
    case 1: spawnfruits2();
            spawnfruits4();
            spawnalien2();
    break;  
    case 2:spawnfruit1();
           spawnfruits3();
           spawnalien();
    break;
  
  }
}  
  
  if (gamestate===end){
    sword.visible=false;
    gameover.visible=true;
  }
  
  drawSprites();

}

function spawnfruit1(){
  if (frameCount%60===0){
    fruits=createSprite(-60,410,20,20);
    fruits.addImage(fruits_image);
    fruits.scale=0.20;
    fruits.y=Math.round(random(10,390))
    fruits.velocityX=(6+3*score/20);
    fruitsGroup.add(fruits);
    fruits.lifetime=120;
    fruits.visible=true;
}
}

function spawnfruits2(){
  if (frameCount%70===0){
    fruit2=createSprite(-60,410,20,20);
    fruit2.addImage(fruit2_img);
    fruit2.scale=0.20;
    fruit2.y=Math.round(random(10,390))
    fruit2.velocityX=(6+3*score/20);
    fruits2Group.add(fruit2);
    fruit2.lifetime=120;
  }
}

function spawnfruits3(){
  if (frameCount%90===0){
    fruit3=createSprite(620,410,20,20);
    fruit3.addImage(fruit3_img);
    fruit3.scale=0.20;
    fruit3.y=Math.round(random(10,390))
    fruit3.velocityX=-(6+3*score/20);
    fruits3Group.add(fruit3);
    fruit3.lifetime=120;
  }
}

function spawnfruits4(){
  if (frameCount%110===0){
    fruit4=createSprite(620,410,20,20);
    fruit4.addImage(fruit4_img);
    fruit4.scale=0.20;
    fruit4.y=Math.round(random(10,390))
    fruit4.velocityX=-(6+3*score/20);
    fruits4Group.add(fruit4);
    fruit4.lifetime=120;
  }
 }

function spawnalien(){
  if (frameCount%40===0){
    alien=createSprite(620,410,20,20);
    alien.scale=0.5;
    alien.addImage(alien_img);
    alien.y=Math.round(random(10,390))
    alien.velocityX=-(6+3*score/20);
    alien.lifetime=120;
    alienGroup.add(alien);
  }
}

function spawnalien2(){
  if (frameCount%40===0){
    alien2=createSprite(-60,410,20,20);
    alien2.scale=0.5;
    alien2.addImage(alien2_img);
    alien2.y=Math.round(random(10,390))
    alien2.velocityX=(6+3*score/20);
    alien2.lifetime=120;
    alien2Group.add(alien2);
  }
}