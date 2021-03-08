var canvas;
var music;

var surf1;
var surf2;
var surf3;
var surf4;

var box;

var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surf1 = createSprite (100, 550, 50, 100);
    surf2 = createSprite (300, 550, 50, 100);
    surf3 = createSprite (500, 550, 50, 100);
    surf4 = createSprite (700, 550, 50, 100);
    surf1.shapeColor("red");
    surf2.shapeColor("blue");
    surf3.shapeColor("green");
    surf4.shapeColor("yellow");


    //create box sprite and give velocity
    box = createSprite (400, 25, 50, 50);
    box.velocityX=4;
    box.velocityY=9;
    

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprite();
    box.bounceOff(edges);

    if (box.isTouching(surf1) && box.bounceOff(surf1)) {
        box.shapeColor("red")
    }

    if (box.isTouching(surf2)) {
        box.shapeColor("blue")
        box.velocityX=0
        box.velocityY=0
    }

    if (box.isTouching(surf3) && box.bounceOff(surf3)) {
        box.shapeColor("green")
    }

    if (box.isTouching(surf4) && box.bounceOff(surf4)) {
        box.shapeColor("green")
    }


    //add condition to check if box touching surface and make it box
    drawSprites();
}
