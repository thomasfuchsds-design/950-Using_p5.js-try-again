// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An array to keep track of how often random numbers are picked
//float[] randomCounts;
randomCounts = new Array(20);
for (x = 0; x < randomCounts.length; x++) {
  randomCounts[x] = 0.0;
} 

function setup() {
  createCanvas(640,360);
  height2 = 360;
  width2 = 640;
  //randomCounts = new float[20];
//  randomCounts.forEach(mySetToInitial);
  
//  function mySetToInitial(value) {
//    0.0;
//  }
}

//index = 0;

function draw() {
  background(0);
  
  // Pick a random number and increase the count
  //index = 0; // int(random(randomCounts.length));
  index = Math.floor(Math.random() * randomCounts.length);
  randomCounts[index] += 1.0;
  index++;
  if (index >= randomCounts.length) {
    index = 0;
  }
  
  // Draw a rectangle to graph results
  stroke(0);
  strokeWeight(2);
  fill(127);
  
  w = width2 / randomCounts.length;
  
  for (x = 0; x < randomCounts.length; x++) {
    rect(x * w, height2 - randomCounts[x], w - 1, randomCounts[x] );
  } 
}
