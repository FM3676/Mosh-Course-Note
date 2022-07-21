// Factories Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
circle.draw();

console.log(circle);
// { radius: 1, draw: [Function: draw] } 

// If we have many Objs with same property, we don't needto create one first and copy it over and over again.
// We use factories function to create a new obj.