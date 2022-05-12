var sonic,sonic1,background, sonic_running, edges, ground, fakefloor,groundImage;
var cactus=[0,1] 
var wait= 0
var speed= 0
var a= 2
function preload() {
  sonic_running = loadAnimation("2.png", "3.png","4.png","5.png");
  sonic_standing = loadImage("sonic.png")
  backgroundi = loadImage("background.png")
  groundImage = loadImage("ground2.png")
  fakeFloor = loadImage("ground1.png")
}

function setup() {
  createCanvas(600, 200);
  sonic = createSprite(50, 160, 20, 50);
  sonic1 = createSprite(50, 460, 20, 50);
  ground = createSprite(50, 264, 20, 50);
  ground.addAnimation("ground", groundImage);
  background = createSprite(300,115,50,50)
  background.addAnimation("background", backgroundi);
  sonic1.addAnimation("running", sonic_running);
  fakefloor= createSprite(50, 175, 20, 50);
  fakefloor.addAnimation("fakefloor", fakeFloor);
  cactus[0]= createSprite(random(625,2000),135,20,50)
  cactus[1]= createSprite(random(625,2000),150,20,20)
  sonic.scale = 2;
  sonic1.scale = 2;
  background.scale=0.45
  sonic.x = 50
}
function cactus_create(){
cactus.push(a)
a+=1
console.log(cactus)
cactus[a]= createSprite(random(625,3000),160-25,20,50)
}


function draw() { 
  ground.velocityX = speed
if(wait==0){
  sonic.addAnimation("sonic",sonic_standing);
}
else{
  sonic.destroy()

}
  if(ground.x<0){
    ground.x=ground.width/2
  }
  sonic.collide(fakefloor)
  drawSprites();
  if(keyIsDown(ENTER)){
  wait=1
  speed=-4
  sonic1.y=137
}
background.depth= 0
}
