//Cheap Candy Exercise
//Create a copy of this file and use array methods (functions attached to the array)
//to answer each question using code.
//Your code and not your brain should answer the question.
//If your code is correct you should be able to change the data but NOT your code and still get the correct answer.

let products = [
  { name: "Gummy Worms", price: 5.79 },
  { name: "Plain M&Ms", price: 2.89 },
  { name: "Peanut M&Ms", price: 2.89 },
  { name: "Swedish Fish", price: 3.79 },
];

//Example: Which candies don't contain peanuts (use the name of the candy since we don't have ingredients)?
let safeCandies = products.filter((product) => !product.name.toLowerCase().includes("peanut"));
console.log(safeCandies);
//or
for (const safeCandy of safeCandies) {
  console.log(safeCandy.name);
}

// Which candies cost less than $4.00?

// Which candies have "M&M" in its name?

// Do we carry "Swedish Fish"?

//Create an array of strings that holds just the product name

//after you get the array of product names working do the same thing using an array method if you didn't the first time
//HINT: it will only be one line of code
