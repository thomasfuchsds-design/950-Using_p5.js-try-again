  // === The business parameters: ===
  
  // Set the number of persons.
  nPersons = 100; // default: 20

  // The initial account value.
  initialAccountValue = 200.0;
  
  // An array of the account values of N people.
  accountValues = new Array(nPersons);
  accountValues.forEach(mySetToInitial);
  
  function mySetToInitial(value) {
    initialAccountValue;
  }
  
  // The plus or minus in one single business event.
  deltaValue = 6.0;
  
  countRuns = 0.0;
  sum = 0.0;
  mean = 0.0;
  


function setup() {
  // Sets the screen width and height
  createCanvas(720, 400);
  background(0);
  noStroke();

  fill(204);
  triangle(18, 18, 18, 360, 81, 360);

  fill(102);
  rect(81, 81, 63, 63);

  fill(204);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill(255);
  ellipse(252, 144, 72, 72);

  fill(204);
  triangle(288, 18, 351, 360, 288, 360);

  fill(255);
  arc(479, 300, 280, 280, PI, TWO_PI);}

function draw() {
}
