var bg, sleep, brush, gym, eat, bath, move, astronaut;

function preload () {
bg= loadImage("images/iss.png");
sleep= loadAnimation("images/sleep.png");
brush= loadAnimation("images/brush.png");
gym= loadAnimation("images/gym1.png", "images/gym2.png", "images/gym1.png", "images/gym2.png");
  eat= loadAnimation("images/eat1.png", "images/eat1.png", "images/eat2.png", "images/eat2.png");
  bath= loadAnimation("images/bath1.png", "images/bath1.png", "images/bath1.png", "images/bath2.png", "images/bath2.png", "images/bath2.png");
  move= loadAnimation("images/move.png", "images/move1.png");
}



function setup() {
  createCanvas(400, 400);

  astronaut= createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(bg);
drawSpirtes();

textSize(20);
fill("white");
text("Instructions:", 20, 35);
textSize(15);
text("Up Arrow= Brushing", 20, 55);
text("Down Arrow= Gymming", 20, 70);
text("Left Arrow= Eating", 20, 85);
text("Right Arrow= Bathing", 20, 100);
text("Key M= Moving", 20, 115);

if (keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if (keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming", gym);
  astronaut.changeAnimation("gymming");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if (keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating", eat);
  astronaut.changeAnimation("eating");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if (keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing", bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if (keyDown("M")){
  astronaut.addAnimation("moving", move);
  astronaut.changeAnimation("moving");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

}