var p5Canvas;
var myName;

function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("[Your Name Here]");
}

 /*
  Full reference: https://p5js.org/reference/
  How to draw a line: https://p5js.org/reference/#/p5/line
  How to draw a rectangle: https://p5js.org/reference/#/p5/rect
  How to draw an ellipse: https://p5js.org/reference/#/p5/ellipse
  How to draw an arc: https://p5js.org/reference/#/p5/arc
 */

// Write all your code inside the draw() function below!
function draw() {
  // Example. You can remove when you're ready!
  background(0, 255, 0); // blue background (red, green, blue)
  fill(255, 204, 0);    // Always call fill() before the shape you want to fill in.
  rect(30, 20, 55, 55);
}
