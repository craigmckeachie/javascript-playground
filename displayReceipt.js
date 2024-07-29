function displayReceipt(totalDue, amountPaid) {
  let changeDue = amountPaid - totalDue;

  if (changeDue > 0) {
    console.log(`Change due ${changeDue}`);
  } else if (changeDue < 0) {
    let owed = Math.abs(changeDue);
    console.log(`You still owe ${owed}`);
  } else {
    console.log("No Change");
  }
}

displayReceipt(300, 100);
displayReceipt(100, 100);
displayReceipt(100, 300);