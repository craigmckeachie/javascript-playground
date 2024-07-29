let employee = {
  firstName: "Emily",
  lastName: "Morgan",
  formatName: function (firstName, lastName) {
    return `${lastName}, ${firstName}`;
  },
};
console.log(employee.firstName, employee.lastName);
console.log(employee.formatName(employee.firstName, employee.lastName));

console.log(employee["firstName"]);

for (const propertyName in employee) {
  const propertyValue = employee[propertyName];
  console.log(propertyValue);
}
