const _radius = Symbol();
const _draw = Symbol();

class Circle{
    constructor(radius) {
        this[_radius] = radius;
    }

    [_draw]() {}
}

const c = new Circle(1);
console.log(c);
//Circle { [Symbol()]: 1 }