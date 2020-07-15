var helicopterIMG, packageIMG , ground , target1, target2, target3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
helicopterIMG = loadImage("helicopter.png");
packageIMG = loadImage("package.png");
}

function setup(){
    createCanvas(1200,800)
    rectMode(CENTER);
 
    package = createSprite(530,235,25,15);
    package.addImage(packageIMG);
    package.scale = 0.2;
    

    helicopter = createSprite(500,200,25,15);
    helicopter.addImage(helicopterIMG);
    helicopter.scale = 1;

    ground = createSprite(500,675,800,15,ground_options);
    ground.shapeColor = "white";
    ground.scale = 2;

    
    target1 = createSprite(550,655,175,15);
    target1.shapeColor = "blue";
    target1.scale = 1;

    target2 = createSprite(465,580,15,135);
    target2.shapeColor = "blue";
    target2.scale = 1;

    target3 = createSprite(635,580,15,135);
    target3.shapeColor = "blue";
    target3.scale = 1;

    package.collide(target1);
    package.collide(target2);

    engine=Engine.create();

    world = engine.world;

    //var package_options = {
        //restitution : 0.6,
        //isStatic:true 
       // }

    packageBody = Bodies.circle(530,235,10,)
    World.add(world,packageBody)

    var ground_options = {
        isStatic:true
          
    }

    groundBody = Bodies.rectangle(500,650,800,10,ground_options)
    World.add(world,groundBody);

    Engine.run(engine);
   
    }

    function draw(){
        rectMode(CENTER)
        background("black")

      

     
    /*if(package.isTouching(ground)){
        package.velocityY = -5;
        
    }
    
    package.velocityY = package.velocityY + 1*/
    
       package.x = packageBody.position.x;
       package.y = packageBody.position.y;

        
        
        
        drawSprites();     
    }

    function keyPressed(){
        if(keyCode === DOWN_ARROW){
            package.velocityY = 3;
            }

    }

    
        
        
