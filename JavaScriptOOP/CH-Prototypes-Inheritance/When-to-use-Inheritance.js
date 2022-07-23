// Be careful to use inheritance, it will make your source code complex and fragile.
// Don't use inheritance, unless you have enough reasons.

function Animal() {
  this.walk = function () {};
  this.eat = function () {};
}

function Person() {}
function Dog() {}
Person.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Here we got Person and Dog derived from Animal
// If now we want to introduce an new Obj Goldfish derived from Animal too.
// Our hierarchy is broken. Beacuse fish can't walk

// To solve this, we need to change our hierarchy

// On the top, we got Animal with eat()
// And then we got Mammal with walk(), and Fish with swim().
// And we can have Person and Dog derived from Mammal, and Goldfish from Fish.

// So what if ther is more than 10 kinds of animal? It will be complicated.

//!! Aviod creating inheritance hierarchies. It's fragile!!
// Do not go more than one level in inheritance.

//!! Favor Composition over Inheritance.


// So now, instead of using inheritance, we can define various features for animals
// as independent Obj.

function canWalk() {}
function canEat() {}
function canSwim() { }

// Now person can derive from canWalk and canEat
// Codefish from canSwim and canEat