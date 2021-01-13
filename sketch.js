

var player,track,ground,enemy,enemy2
var trackImage,groundImage,playerImage
var distance=0
var obstacle
var score=0
var enemyImage,enemyImage1
var start
gameState="start"

//gameState="end"
function preload(){
trackImage=loadImage("Image/track.jpg")

playerImage=loadImage("Image/car3.png")
enemyImage=loadImage("Image/car2.png")
enemyImage1=loadImage("Image/car4.png")
}

function setup(){
createCanvas(displayWidth-10,displayHeight-20)
player=createSprite(590,350,30,30)
player.addImage(playerImage)
player.debug=true
enemy=createSprite(370,300,30,30)
enemy.shapeColor="red"
enemy.scale=1.3
enemy.debug=true
enemy.addImage(enemyImage)
enemy2=createSprite(800,390,30,30)
enemy2.addImage(enemyImage1)
enemy2.scale=1.3

//start.html
}

function draw(){
background("white")
image(trackImage,0,-displayHeight*50,displayWidth,displayHeight*51)
if(gameState==="start"){
if(keyDown(LEFT_ARROW)){
    player.x=player.x-5
    //player.velocityY=0
    }
   if(keyDown(RIGHT_ARROW)){
    player.x=player.x+5
    
 }
        if(keyDown(UP_ARROW)){
     distance=distance+15
    player.y=displayHeight-distance
    camera.x=displayWidth/2
camera.y=player.y
    enemy.velocityY=-10
    enemy2.velocityY=-10
}

if(player.isTouching(enemy) ||player.isTouching(enemy2)  ){
//reset()
gameState="end"
//

}
obstacles()   
}          

if (gameState==="end"){
    player.velocityY=0;
    enemy.velocityY=0;
    enemy2.velocityY=0;
textSize(30)
fill("red")
text("Game Ended ",displayWidth/2,displayHeight-(distance+20))
text("plz restart ",displayWidth/2,displayHeight-distance)
start=createButton('RESTART')
start.position(player.x+50,player.y+50)
//reset()

}
drawSprites()
}
 function obstacles(){
if (frameCount%60===0){
obstacle=createSprite(400,300,60,60)
obstacle.x=Math.round(random(200,800))
obstacle.y=Math.round(random(displayHeight,displayHeight*51))
obstacle.shapeColor="green"
}
}
function reset(){






}