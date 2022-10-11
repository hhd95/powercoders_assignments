// var x = parseInt(prompt("Enter a Number"));

let x = Number(prompt("Enter a number between 0 and 20", 0));

if (x >= 0 && x <= 20) {
  const y = x % 2;
  if (y === 0) {
    alert(x + " is even");
  } else {
    alert(x + " is odd");
  }
} else if (x < 0 || x > 20) {
  alert("Number must be between 0 and 20!");
} else if (typeof x !== Number) {
  alert("Please enter a number!");
}
