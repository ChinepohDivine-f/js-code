const circle = {
    radius: 1
};

//using const we canno asign circle to
// a new object but we can modify the circle object
// properties 

circle.color = 'yellow'; // add new properties
circle.draw = function () { }

delete circle.color; // delete properties
delete circle.draw;

console.log(circle);


