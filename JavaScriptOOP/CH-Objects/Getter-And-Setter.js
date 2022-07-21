//F---I---R---S---T--------------

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 1, y: 1 };
  this.draw = function () {
    console.log("draw");
  };
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location.");
      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);

console.log(circle.defaultLocation); // { x: 1, y: 1 }
circle.defaultLocation = 1; // Error: Invalid location.

//S---E---C---O---N---D-----------

const person = {
  name: "Jack",
  get getName() {
    return this.name;
  },

  set setName(value) {
    if (typeof value !== "string") throw new Error("Invalid location.");
    this.name = value;
  },
};

console.log(person.getName); // Jack
person.setName = 'Fan';
console.log(person.getName); // Fan