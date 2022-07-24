class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance Method
  // Only can be used in a created instance
  draw() {
    console.log("draw");
  }

  // Static Method
  // A utils function
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const c = Circle.parse(`{"radius": 1}`);
console.log(c); // Circle { radius: 1 }

// Another example
// The Math class in JavaScript, everytime we use like Math.abs(), we don't need to
// create a instance, like new Math().
// And this is static method.

class PersonMath {
  static abs() {
    //...
  }
}

PersonMath.abs();
