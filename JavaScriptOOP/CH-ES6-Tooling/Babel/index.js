const x = 1;

const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
      if (value <= 0) throw new Error("Invaild radius.");
      _radius.set(this, value);
  }
}

const c = new Circle(1);

c.radius = 10;

console.log(c.radius); // 10


//npm run babel