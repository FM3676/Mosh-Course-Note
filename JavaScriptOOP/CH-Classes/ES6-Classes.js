// The Class in JavScript is different from the Class in c# or Java
// They are essientialy syntactic sugar over prototypical inheritance.

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = () => {};
  }

  draw() {
    console.log("draw");
  }
}

const c = new Circle(1);

console.log(c); // Circle { radius: 1, move: [Function (anonymous)] }
// The draw() is in the c.__proto__. It's in the prototype

console.log(typeof Circle); // function
// See, it's actually an function, a constructor function.
