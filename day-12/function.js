function myFunction(msg = "Hello World!", name = "User") {
  return "Hello, " + name + "! You said: " + msg;
}

console.log(myFunction("How are you?", "Kamruzzaman"));
console.log(myFunction("What's up?", "Nabila"));
console.log(myFunction("How's it going?", "Munna"));
console.log(myFunction());
console.log(myFunction("Good morning!"));
console.log(myFunction(undefined, "Asif"));

//  pure function
function add(a) {
  return a;
}

// impure function
function addRandom(a) {
  return a + Math.random();
}

// function expression
var add = function (a, b) {
  return a + b;
};

// annonymous function
var subtract = function (a, b) {
  return a - b;
}

// callback function and higher order function
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

var hau = function () {
    console.log("How are you?");
}

greet("Hannan", hau);

// recursive function
function factorial(n) {
  if (n === 1) {
    return 1;
  }
 return n * factorial(n - 1);
}

console.log(factorial(5));

// closure
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  }
}

var closureFunction = outerFunction("I am from outer function");
closureFunction("I am from inner function");

// fat arrow function
var add1 = (a, b) => {
  return a + b;
};



// shorter version of fat arrow function
var add2 = (a, b) => a + b;

var add3 = a => a + 1;