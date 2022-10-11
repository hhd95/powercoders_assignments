var username = prompt("What's your name?");
document.write("Hello " + username + ", Hey how you doing?");

// let name = prompt("What is your name?");
// alert (`Hello, ${name}!`);

// example-1
// const day = "sunday";
// if (day === "monday") {
//   console.log("Monday is 'Montag' in german");
// } else if (day === "tuesday") {
//   console.log("Tuesday is 'Dienstag' in german");
// } else if (day === "wednesday") {
//   console.log("Wednesday is 'Mittwoch' in german");
// } else if (day === "thursday") {
//   console.log("Thursday is 'Donnerstag' in german");
// } else if (day === "friday") {
//   console.log("Friday is 'Freitag' in german");
// } else if (day === "saturday") {
//   console.log("Saturday is 'Samstag' in german");
// } else if (day === "sunday") {
//   console.log("Sunday is 'Sonntag' in german");
// }

// example-2
// const day = new Date().getDay();
// let text = "";
// if (day === 0) {
//   text = "Sonntag";
// } else if (day === 1) {
//   text = "Montag";
// } else if (day === 2) {
//   text = "Dienstag";
// } else if (day === 3) {
//   text = "Mittwoch";
// } else if (day === 4) {
//   text = "Donnerstag";
// } else if (day === 5) {
//   text = "Freitag";
// } else if (day === 6) {
//   text = "Samstag";
// }

// console.log("Heute ist " + text);

// example-3
const day = new Date().getDay();
let text = "";

switch (day) {
  case 0:
    text = "Sonntag";
    break;

  case 1:
    text = "Montag";
    break;

  case 2:
    text = "Dienstag";
    break;

  case 3:
    text = "Mittwoch";
    break;

  case 4:
    text = "Donnerstag";
    break;

  case 5:
    text = "Freitag";
    break;

  case 6:
    text = "Samstag";
    break;
}

console.log("Heute ist " + text);
