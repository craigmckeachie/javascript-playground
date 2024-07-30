// class Person {
//   first;
//   last;
//   constructor(first, last) {
//     this.first = first;
//     this.last = last;
//   }
// }

class Person {
  firstName;
  lastName;

  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
}

let person = new Person("Ron", "Swanson");

console.log(person.firstName + " " + person.lastName);
