// Scope limited
function BadCircle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 1, y: 1 };

  let computeOtimumLocation = function (factor) {
    // ...
  };

  this.draw = function () {
    computeOtimumLocation(0.1);
    console.log("draw");
  };
}

// Do not using this, so the value can't be access from the outside.

const badCircle = new BadCircle();
// circle.computeOtimumLocation(0.1);
circle.draw();
