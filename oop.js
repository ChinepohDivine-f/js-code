const circle = {
  radius: 1,
  location: {
    x: 2,
    y: 4,
  },
  inVisible: true,
  draw: function () {
    // method
    console.log("Draw");
  },
};

circle.draw();

// Factory functions
// with these we can create ojects without copy code over and over again
// creating objects is easier when we use funcion to do so.
function createCircle(radius) {
  return {
    radius, // meeanig the key and value are thesame
    draw() {
      console.log("Draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(3);
console.log(circle2);

// constructor funtions
// here we use pascal case: OneTwoThree
// and for regular function we use camel case
// oneTwoThree

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// this refers to a global object

const myFather = new Person("John", "Doe", 40, "brown");

console.log(myFather);

/// construtor property

function createSquare(width) {
  return {
    width,
    draw: function () {
      console.log("Draw");
    },
  };
}

const square = createSquare(1);

function Square(width) {
  this.width = width;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Square(1);

// we can create construtors
// every object has a construture property

new String();
new Boolean();
new Number();

// funcrtions are objects

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another1 = new Circle(1); // Circle.call({}, 1); is thesame as the uncommented code
Circle.apply({}, [1, 2, 3, 4]);
console.log(Circle.name, Circle.length);

// we can create object with funtion because function are objects

const Circle1 = new Function(
  "radius",
  'this.radius = radius; this.draw = function() {console.log("Draw"); }'
);

const another2 = new Circle1(1);

console.log(Circle1.name, Circle1.length);

