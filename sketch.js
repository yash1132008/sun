const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg ;



function preload() {
    // create getBackgroundImg( ) here
    backgroundImg=loadImage("sunrise2.png");
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg){
background(backgroundImg);
}

    Engine.update(engine);

    // write code to display time in correct format here
    fill("red");
    textSize(20);


    if(hour<=12){
        text("Time:"+hour%12+"PM",200,200);
                }
    else{
        if(hour=0){
            text("Time:12AM",200,200);
        }
        else{
            text("Time:"+hour%12+"AM",200,200);
        }
    }


async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0 && hour<=14){
        bg = "sunrise1.png";
    }
     else {
        bg = "sunset12.png";
    }
    

    }

    backgroundImg = loadImage(bg);
   // console.log(backgroundImg);
}
