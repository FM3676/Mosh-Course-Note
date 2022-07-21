// Factories Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}

const circle = createCircle(1);

const another = new Circle();

console.log(circle.constructor); // [Function: Object]
console.log(another.constructor); // [Function: Circle]

let x = {}
// let x = new Object();