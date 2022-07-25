"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var x = 1;

var _radius = new WeakMap();

var Circle = function () {
  function Circle(radius) {
    _classCallCheck(this, Circle);

    _radius.set(this, radius);
  }

  _createClass(Circle, [{
    key: "radius",
    get: function get() {
      return _radius.get(this);
    },
    set: function set(value) {
      if (value <= 0) throw new Error("Invaild radius.");
      _radius.set(this, value);
    }
  }]);

  return Circle;
}();

var c = new Circle(1);

c.radius = 10;

console.log(c.radius); // 10


//npm run babel
