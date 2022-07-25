// Implementation Detail
const _radius = new WeakMap();

// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log("draw");
  }
}

module.exports = Circle;
//modules.exports.Circle = Circle;

// Things that are highly related should go together ---------> Cohesion

