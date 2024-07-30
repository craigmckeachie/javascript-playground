function displayReceipt(totalDue, amountPaid) {
  let changeDue = amountPaid - totalDue;

  console.log(`Total: $${totalDue}`);
  console.log(`Amount Paid: ${amountPaid}`);

  if (changeDue > 0) {
    console.log(`Change due ${changeDue}`);
  } else if (changeDue < 0) {
    let owed = Math.abs(changeDue);
    console.log(`You still owe ${owed}`);
  } else {
    console.log("No Change");
  }
  console.log();
}

displayReceipt(300, 100);
displayReceipt(100, 100);
displayReceipt(100, 300);

