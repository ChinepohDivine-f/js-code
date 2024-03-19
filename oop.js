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
