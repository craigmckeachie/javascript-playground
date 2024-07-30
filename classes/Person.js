// class Person {
//   first;
//   last;
//   constructor(first, last) {
//     this.first = first;
//     this.last = last;
//   }
// }

class Person {
  first;
  last;
  age;

  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }
}

let ron = new Person("Ron", "Swanson", 40);
let andy = new Person("Andy", "Dwyer", 29);
let ann = new Person("Ann", "Perkins", 27);

// let characters = [ron, andy, ann];
let characters = [
  new Person("Ron", "Swanson", 40),
  new Person("Andy", "Dwyer", 29),
  new Person("Ann", "Perkins", 27),
  new Person("Ann", "Perkins", 27),
];

console.log(characters);
