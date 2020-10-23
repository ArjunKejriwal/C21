var r1, r2, r3

function setup() {
  createCanvas(800,400);
 r1 = createSprite(400, 200, 50, 50);
 r1.shapeColor = "green";
 r2 = createSprite(400, 200, 50, 50);
 r2.shapeColor = "green";
 r3 = createSprite(300, 220, 50, 50);
 r3.shapeColor = "green";
 r1.velocityX = 5
}

function draw() {
  background(0);
  r2.x = mouseX;
  r2.y = mouseY;

 
if (isTouching(r2, r1)){

text ("Bla Bla", 300, 200)

}
bounceOff(r1, r2)
  drawSprites();
}S