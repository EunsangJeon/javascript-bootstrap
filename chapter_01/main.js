$(document).ready(function () {
  "use strict";

  paper.install(window);
  paper.setup(document.getElementById("mainCanvas"));

  // // Below code draws small circles on the canvas.
  // let c;
  // for (let x = 25; x < 400; x += 50) {
  //   for (let y = 25; y < 400; y += 50) {
  //     c = Shape.Circle(x, y, 20);
  //     c.fillColor = "green";
  //   }
  // }

  // Draw a circle with text 'Hello, world!'
  let textCircle = Shape.Circle(200, 200, 80);
  textCircle.fillColor = "black";
  let text = new PointText(200, 200);
  text.justification = "center";
  text.fillColor = "white";
  text.fontSize = 20;
  text.content = "Hello, world!";

  // Below code let user to draw a circle by clicking.
  let tool = new Tool();
  tool.onMouseDown = function (event) {
    let c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = "green";
  };

  paper.view.draw();

  console.log("main.js loaded");
});
