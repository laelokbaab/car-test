const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ball,ground



function setup(){
    var canvas=createCanvas(400,400);
engine= Engine.create();
world=engine.world;


var ballp={
    restitution:1
}
ball = Bodies.rectangle(200,100,40,90,ballp)
World.add(world,ball)

console.log(ball)

var groundp={
    isStatic:true
}
ground=Bodies.rectangle(200,390,400,30,groundp)
World.add(world,ground)

  }
  function draw()  {
    background(0);
    Engine.update(engine)
    rectMode(CENTER);
    
      rect(ball.position.x,ball.position.y,40,90)
      rect(ground.position.x,ground.position.y,400,30)
  }