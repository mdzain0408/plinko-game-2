/*
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Events = Matter.Events

var engine,world;

var divisions = [];
var count ;
var plinkos=[];
var score;
var divisionHeight=350;
var particles = [];
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
    ground1 = new ground();
   
	
    for (var k=0; k < 850; k= k+80){
      divisions.push(new division(k,620,10,500));
    }
    for (var j = 75; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,75,10));
   }

   for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175,10));
   }

   for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275,10));
   }
   for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375,10));
}



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground1.display();

  
  
    for(var k=0;k<divisions.length;k++){
    divisions[k].display();
    }
   
   
    for (var j = 0;j<plinkos.length;j++){

    plinkos[j].display();

    }
    
  
   // particle = new Particle(mouseX,10,10,10);
    if(particles!==null)
    {
       particles.display();
    }
    
  // text("score "+ score,10,100)
  //drawSprites();
 
}


function mousePressed(){

    particles = new particle(mouseX,10,10,10);
   // particles.display();


}*/


  
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new ground();

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75,10));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175,10));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275,10));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375,10));
    }
    
}
 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
 /* textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);*/
  Engine.update(engine);
  ground1.display();
  
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>500)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) {gameState ="end"};  
                  console.log(1)                        
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) ;
                    console.log(2)

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5) {gameState ="end"};
                    console.log(3)

              }      
              
        }

        console.log(score)
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function keyPressed()
{
  if(keyCode===32){
 // if(gameState!=="end")
  //{
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
     console.log("hi")
     return false
  }   
}





