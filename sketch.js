const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var snowF = []
var bgImg,ground ;

function preload(){
  bgImg = loadImage("images/bg.jpg")
}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(bgImg);  
  Engine.update(engine);

  if(frameCount%20 === 0){
    snowF.push(new Snow(random(10,750),10,10))
  }
  
  for (var i = 0;i < snowF.length;i++){
    snowF[i].display();
  }

  drawSprites();
}


