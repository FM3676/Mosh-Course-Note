// 'use strict';

const Circle = function () {
    this.draw = function() {console.log(this);}
}

const c = new Circle();

// Method Call
c.draw() //Circle { draw: [Function (anonymous)] }

let draw = c.draw;

// Function Call
draw(); //Object [global]

// By default, in function call, this is assign to Window/Global.
// In JavaScript, there is a mode called strict mode
// when we enable the strict mode, JavaScript Engine will be more sensitive, and
// it will do more error chekcing, and also change the behavior of 'this' keyword in function

// Now we pretend we have already enable strict mode

draw(); // undefined
// 'this' by default no more assign to global

// By the way, if we define draw() method like this

const Shape = function () {
    this.draw = () => {console.log(this); };
}

draw = new Shape().draw;
draw();//Shape { draw: [Function (anonymous)] }
// 'this' keyword will assign to the Shape!!

// Now we dissable the strict mode!!
class Square{
    draw() {
        console.log(this);
    }
}

draw = new Square().draw;

draw();// undefined
// See, it's undefined. Beacuse it will run at strict mode in the Class Scope