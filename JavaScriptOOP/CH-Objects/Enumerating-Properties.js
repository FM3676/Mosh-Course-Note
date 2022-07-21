function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

for (let key in circle) console.log(key, circle[key]);
// radius 10
// draw [Function (anonymous)]

// Another way to get keys
const keys = Object.keys(circle);
console.log(keys);
//[ 'radius', 'draw' ]

// If an obj have a property?
if ( 'radius' in circle) console.log("Circle has a radius.");
// Circle has a radius.