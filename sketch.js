
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var box1,box2,box3,box4,box5,box6,slingshot1;
var cannonball1,rope1;
var gameState;
var score;
var bg;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	score = 0;
	ground1 = new Ground(800,550,300,40);
	box1 = new Box(800,500,80,80);
	box2 = new Box(760,500,80,80);
	box3 = new Box(840,500,80,80);
	box4 = new Box(820,460,80,80);
	box5 = new Box(780,460,80,80);
	box6 = new Box(800,420,80,80);
	slingshot1 = new Slingshot(600,350,10,10);
	cannonball1 = new Cannonball(600,-200,30);
	rope1 = new Rope(cannonball1.body,slingshot1.body)
	

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("bg");
	text("Score: " + score,680,20);

	ground1.display();
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	cannonball1.display();
	rope1.display();
	
  
	drawSprites();

}



function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(cannonball1.body, {x: mouseX, y: mouseY});
    }
}


function mouseReleased(){
    rope1.fly();
    gameState = "launched";
}

async function getBackgroundImage(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/America/New_York");
    var responseJSON = await response.json();
    var dt = responseJSON.datetime;
    var hour = dt.slice(11,13);
    if(hour >= 06 && hour <= 18){
        bg = "bg.png";
    }else {
        bg = "white";
    }
    backgroundImg = loadImage(bg);
}