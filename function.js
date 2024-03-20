// function declaration 

function walk() {
    console.log('walk');
}

// anonymous function expression
let run = function () {
    console.log('run')
}

// named function expression
let runOh = function run() {
    console.log('run Oh')
}


let move = run;
walk();
run();
move();