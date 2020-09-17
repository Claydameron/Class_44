var player1,player2,enemy,bg;
var trap;
var wall1;
var ground1,ground2;

function preload(){
    
bg = loadImage("Game_Background.png");

}

function setup(){
canvas = createCanvas(800,800);

trap = createSprite(309.5,417.8,45,21);
trap.visible = false;

player1 = createSprite(50,216.5,10,10);
player1.shapeColor = "lightBlue";

ground1 = createSprite(380,232,790,10);
ground1.visible = false;

ground2 = createSprite(415,322,770,10);
ground2.visible = false;

}

function draw(){
//background("#808080");
background(bg);

edges = createEdgeSprites();

if(keyDown(RIGHT_ARROW)) {
    player1.x = player1.x + 15;
}

if(keyDown(LEFT_ARROW)) {
    player1.x = player1.x + (-15);
}

if (keyDown(UP_ARROW)) {
    player1.velocityY = -5;
    if(player1.y < 225){
    player1.velocityX = 7;
    } else if( player1.y > 227 && player1.y < 325) {
    player1.velocityX = (-7);
    }
}
player1.velocityY = player1.velocityY + 0.5;
player1.collide(ground1);
player1.collide(ground2);
player1.collide(edges);

if(player1.y > 221) {
    player1.velocityX = 0;
}


drawSprites();

text(mouseX + "," + mouseY,10,10);


}   

/*function keyPressed() {
    if(keyCode === RIGHT_ARROW) {
        player1.x = player1.x + 15;
    }
    
    if(keyCode === LEFT_ARROW) {
        player1.x = player1.x + (-15);
    }
    
    if(keyCode === DOWN_ARROW) {
        player1.y = player1.y + 15;
    }
    
    if(keyCode === UP_ARROW) {
        player1.y = player1.y + (-15);
    }
}
*/


