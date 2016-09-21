var flowers = []; //an array for the flowers
var randomSize;   // a variable that keeps a number
var ding;         // a variable for the sound

function setup() {
  //creates "stage"
  createCanvas(1024, 768);
  
 //loads images of flowers into flowers array
  flowers[0] = loadImage("assets/flower_1.png");                
  flowers[1] = loadImage("assets/flower_2.png");
  flowers[2] = loadImage("assets/flower_3.png");
  flowers[3] = loadImage("assets/flower_4.png");
  flowers[4] = loadImage("assets/flower_5.png");
  flowers[5] = loadImage("assets/flower_6.png");
  flowers[6] = loadImage("assets/flower_7.png");
  flowers[7] = loadImage("assets/flower_8.png");
  flowers[8] = loadImage("assets/flower_9.png");
  
  //loads sound effect
  ding = loadSound('assets/ding.wav'); 
  background(0);   
  //you don't want it to loop, because you would like the flowers to remain after they appear
 // noLoop();
}

function draw() {                                                 //draw is only drawn once since it is noLoop
                                               //background is black
}

function keyTyped() {                                             //looking for key that is typed                             
  if (key == 'a') {                                               //if the key typed is the 'a' key
      randomSize = random(flowers[0].width/3, flowers[0].width);  //creates random number to be used for sizing later
      image(flowers[int(random(0,8))],                            //shows random flower image
      random(width)-flowers[0].width/2, random(height)-flowers[0].height/2, //places random flower in random location
      randomSize,randomSize);                                     //random sizing of flower
      
      ding.play();                                                //plays sound effect
  } 
}
