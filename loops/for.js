function doIt() {
  var index;
  let students = [
    "Emily",
    "James",
    "Michael",
    "Angelica",
    "Demetri",
    "LC",
    "Karol",
    "Sheryl",
    "Eric",
    "Deckard",
    "Shane",
  ];
      //init ;    //condition ;             //increment;
  for (index = 0; index < students.length; index++) {
    const student = students[index];
    console.log(student);
  }

  console.log(index);
}

doIt();
