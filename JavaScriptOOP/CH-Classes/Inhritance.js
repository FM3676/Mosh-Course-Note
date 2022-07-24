class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  draw() {
    console.log(c);
  }
}

const c = new Circle("red", 1);
/* 
    Circle {color: 'red', radius: 1}
        color: "red"
        radius: 1
        [[Prototype]]: Shape
            constructor: class Circle
            draw: ƒ draw()
            [[Prototype]]: Object
 */
