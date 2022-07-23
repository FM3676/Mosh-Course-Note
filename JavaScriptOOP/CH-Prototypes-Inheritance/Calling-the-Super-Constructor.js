function Shape(color) { this.color = color;}


function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const c1 = new Circle(1);

console.log(c1);// Circle { radius: 1 }
// There is no 'color' property, but from the inherited point of view,
// this obj should have a 'color' property, and should be initialized at the time of creating Circle

//---------------------------------------//

function Shape(color) {
  this.color = color;
}

function Circle(radius, color) {
    Shape(color);
  this.radius = radius;
}

const c2 = new Circle(1, 'red');
console.log(c2);// Circle { radius: 1 }
// It doesn't work.
// When we using 'new' opreator, first we create a new empty obj.
// Then set 'this' to the tmpty obj.
// finally return this obj to the constructor.
// If we don't use the 'new' operator, this will default point to the window(Browser)/global(Node).
// Here we just calling the Shape(), so the 'this' is point to the window Obj.
console.log(global.color);// red
// We can't simply code like new Shape(color);
function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

const c3 = new Circle(1, "red");

console.log(c3);// Circle { color: 'red', radius: 1 }
// Now we got the color property.
