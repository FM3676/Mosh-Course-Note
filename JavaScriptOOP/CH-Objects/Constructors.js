// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}

const circle = new Circle();
// new operator will create a new obj {}, and it will set 'this' to this Obj.
// By default, 'this' assigns to Windows
// We don't have to write return in Circle(), it will happen automaticly when we using new operetor.