/*
 * Creation & Computation - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 * Based off Experiment 3 - Example 03b. Arduino to P5.js - sending 3 switch value as a ASCII
 * 
 * which was based on "Lab: Serial Input to P5.js" on ITP Physical Computing site
 * https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
 * 
 * Circuit: 
 * switch connected to pin 2 and ground
 * switch connected to pin 3 and ground
 * switch connected to pin 4 and ground 
 */

int touch1val;
int touch2val;
int touch3val;
 
void setup() {
  //start serial connection
  Serial.begin(9600);
  //configure pin 2 as an input and enable the internal pull-up resistor
  pinMode(2, INPUT_PULLUP);
  pinMode(3, INPUT_PULLUP);
  pinMode(4, INPUT_PULLUP);
  pinMode(5, OUTPUT);
}

void loop() {
  // read the touch value
  touch1val = digitalRead(2);
  // print out the touch value
  Serial.print(touch1val);
  // print a comma to separate the values
  Serial.print(",");

   // read the touch value
  touch2val = digitalRead(3);
  // print out the touch value
  Serial.print(touch2val);
    // print a comma to separate the values
  Serial.print(",");

  // read the switch value
  touch3val = digitalRead(4);
  // print out the switch value and add a line break
  Serial.println(touch3val);
  
  delay(200); // the delay is necessary for the serial communication

  //Turn on LED to indicate switch is activated
  if (touch1val == LOW || touch2val == LOW || touch3val == LOW) {
    digitalWrite(5, HIGH);
  } else {
    digitalWrite(5, LOW);
  }
}
