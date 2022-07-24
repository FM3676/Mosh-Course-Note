const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, function () {
      console.log("move", this);
    });
  }
  draw() {
    console.log(_radius.get(this));
    console.log("draw");
    _move.get(this)();
  }
}

const c = new Circle(1);
console.log(c); // Circle {}
c.draw();
// 1
// draw
// move undefined  --> undienfed because of strict mode
// but if we use arrow function, the problem go away.
