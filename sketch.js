const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var Matter;
var Snow;
 
var bg = "sprites/snow3.jpg";
function preload(){
 getbackgroundImg;
}
function setup() {
  createCanvas(800,400);
  engine = engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
  snow = new Snow(60,30,120,20);

  
}

function draw() {
  
  
  snow.display();

  function keyPressed(){
    if(keyCode === 32){
        snow.trajectory=[];
        Matter.Body.setPosition(snow.body,{x:200,y:250});
      
    }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/snow3.jpg";
  }
  else{
      bg = "sprites/snow2.jpg";
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
}