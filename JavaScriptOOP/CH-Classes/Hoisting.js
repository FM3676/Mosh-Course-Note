sayHello();

// Function Declaration
function sayHello() { }

// Function Expression
const sayHelloToo = () => { };

// The difference between these two way, is that by declaration
// We can call the function, like sayHello(), before the line of it's declaration.
// This is the hoisting, which means the function declaration will be move on the top of the source code.

// Class Declaration
class Circle { };

// Class Expression
const Square = class { };

// Unlike Function, these two ways are not hoisting,
// which means we can't create a instance before the declaration.
// By the way, no body will use Class Expression