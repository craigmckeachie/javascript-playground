function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(city + ", " + state + " " + zip);
}

// displayMailingLabel("Craig McKeachie", "232 Soneta Street", "New Albany", "OH", 43065);

function formatMailingLabel(name, address, city, state, zip) {
  return `
        ${name}
        ${address}
        ${city}, ${state} ${zip}
  `;
}


let mailingLabel = formatMailingLabel("Craig McKeachie", "232 Soneta Street", "New Albany", "OH", 43065);
console.log(mailingLabel);
