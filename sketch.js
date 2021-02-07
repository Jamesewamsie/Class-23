const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;


var ground;

function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  ground = new Ground(200,390,400,50);

  box1 = new Boxes(200, 150, 50, 50);
  box2 = new Boxes(220, 100, 50, 80);
}

function draw() {
  background(0);  

  Engine.update(engine);

  
  ground.display();
  box1.display();
  box2.display();
}


