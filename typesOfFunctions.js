//function declaration
function multiply1(x, y) {
  return x * y;
}

console.log(multiply1(10, 5));

//function expression assigning an anonymous function into a variable
let multiply2 = function (x, y) {
  return x * y;
};

console.log(multiply2(5, 5));

//arrow function
let multiply3 = (x, y) => x * y;

console.log(multiply3(5, 3));

let multiply4 = (x, y) => {
  console.log(x, y);
  return x * y;
};

console.log(multiply4(5, 3));

function greeter1(firstName) {
  console.log("Hi " + firstName);
}

greeter1("Emily");


function greeter2(firstName) {
  console.log("Hi " + firstName);
}

greeter1("James");



