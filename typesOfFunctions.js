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
