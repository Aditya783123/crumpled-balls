
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var can1, can2, can3, can4;
var paperObject;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(900, 900);
    

	engine = Engine.create();
	world = engine.world;

	paperObject = new Paper(100, 200, 30);
    can1 = new Trashcan(700, 550, 20, 400);
    can2 = new Trashcan(600, 350, 200, 20);
    can3 = new Trashcan(500, 420, 20, 150);
    can4 = new Trashcan(500, 680, 20, 150);
    ground = new Ground(800, 750, 1800, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
  paperObject.display();
  can1.display();
  can2.display();
  can3.display();
  can4.display();
  ground.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:3, y:-3});
    }
}

