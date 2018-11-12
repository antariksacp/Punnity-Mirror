/*
 * Creation & Computation - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 * Experiment 3 - Example 03b. Arduino to P5.js - sending 3 switch value as a ASCII
 * 
 * Based on "Lab: Serial Input to P5.js" on ITP Physical Computing site
 * https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
 * 
 */

 var serial; // variable to hold an instance of the serialport library
  var portName = '/dev/cu.usbmodem1411';  // fill in your serial
  var inData;                             // for incoming serial
  var switch1;
  var switch2;
  var switch3;

  var track1, track2, track3, track4, track5, track6;
  var img1, img2, img3, img4, img5, img6;

  //function preload() {
  	 /*img1 = loadImage("pics/egg1.jpg")
  	 img2 = loadImage("pics/egg2.jpg")
  	 img3 = loadImage("pics/ehh1.jpg")
  	 img4 = loadImage("pics/ehh2.jpg")
  	 img5 = loadImage("pics/tent1.jpg")
  	 img6 = loadImage("pics/tent2.jpg")*/

  //}

  function setup() {
	createCanvas(windowWidth, windowHeight);
  background('#f2f2f2');

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
 serial.list(); // list the serial ports
 serial.open(portName);              // open a serial port

 track1 = 0;
 track2 = 0;
 track3 = 0;
 track4 = 0;
 track5 = 0;
 track6 = 0;


}

function draw() {
  background('#f2f2f2');

    if(switch1==0){
      //fill(57, 255, 20);
      //image(img1, 0, 0);
      if ( track1 == 0){
        img1 = createImg('pics/egg2.png');
        img1.position(100,200);
        track1 = 1;
    }
      //image(img, width/3, height/2);
    }else{
      //fill(253, 78, 179);
      //image(img2, 0, 0);
      if ( track2 == 0){
        img2 = createImg('pics/egg1.png'); 
        img2.position(130,200);
        track2 = 1;
    }
  }
  //ellipse(width/3, height/2, 100, 100);
   //image(img2, 0, 0);

    if(switch2==0){
      if (track3 == 0){
        img3 = createImg('pics/ehh2.png');
        img3.position(windowWidth/2.8,200);
        track3 = 1;
      }
    }else{
      if (track4 == 0){
        img4 = createImg('pics/ehh1.png');
        img4.position(windowWidth/2.75,200);
        track4 = 1;
      }
    }

   //ellipse(width/2, height/2, 100, 100);

    if(switch3==0){
      if ( track5 == 0){
        img5 = createImg('pics/tent2.png');
        img5.position(910,200);
        track5 = 1;
      }
      //fill(57, 255, 20); 
    }else{
      if ( track6 == 0){
        img6 = createImg('pics/tent1.png');
        img6.position(900,200);
        track6 = 1;
      }
      //fill(253, 78, 179);
    }

   //ellipse((width/3)*2, height/2, 100, 100);

}

 
 function serverConnected() {
  console.log('connected to server.');
}
 
function portOpen() {
  console.log('the serial port opened.')
}

function serialEvent() {
  // read a string from the serial port
  // until you get carriage return and newline:
  var inString = serial.readStringUntil('\r\n');
 
  //check to see that there's actually a string there:
  if (inString.length > 0 ) {
    var sensors = split(inString, ',');            // split the string on the commas
    if (sensors.length > 2) {                      // if there are three elements
      switch1 = sensors[0];  
      switch2 = sensors[1]; 
      switch3 = sensors[2];     
    }
  }
}
 
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  console.log('The serial port closed.');
}


// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 console.log(i + " " + portList[i]);
 }
}
