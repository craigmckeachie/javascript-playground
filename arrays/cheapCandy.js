let products = [
  { name: "Gummy Worms", price: 5.79 },
  { name: "Plain M&Ms", price: 2.89 },
  { name: "Peanut M&Ms", price: 2.89 },
  { name: "Swedish Fish", price: 3.79 },
];

// Which candies cost less than $4.00?
const cheapCandies = products.filter((p) => p.price < 4);
console.log(cheapCandies);

// Which candies have "M&M" in its name?
const mmCandies = products.filter((p) => p.name.includes("M&Ms"));
console.log(mmCandies);

// Do we carry "Swedish Fish"?
const swedishFish = products.find((p) => p.product == "Swedish Fish");

let answer = "Ask again later.";
if (swedishFish) {
  console.log("Yes, we carry the delicious fishes.");
} else {
  console.log("No, we do not have Swedish Fish.");
}
