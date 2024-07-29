let truck = {
  type: "Flatbed",
  size: "40x34ft",
  wheelSize: "45in",
  id: "fsk",
  color: "black",
};

function displayTruck(truck) {
  console.log(`
    Type: ${truck.type}
    Size: ${truck.size}
    Id: ${truck.id}
`);
}

displayTruck(truck);
