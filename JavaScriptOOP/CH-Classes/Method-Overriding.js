class Shape {
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
    move() {
        super.move();// If we want to use the move() method from it's Parents Class
      console.log('circle move')// Overriding the method by redfination
  }
}

const c = new Circle("red", 1);


/* 
    Circle {}
        [[Prototype]]: Shape
        constructor: class Circle
        move: ƒ move()   -----------------------> from the class Circle
        [[Prototype]]: Object
            constructor: class Shape
            move: ƒ move()   -----------------------> from the class Shape.
            [[Prototype]]: Object
*/