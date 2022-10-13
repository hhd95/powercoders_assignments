// For each single day of the week log the translated output
// e.g. if it is Monday, log "Montag" and so on
// Choose any language you like
// Try different ways: is it possible with if or switch?

const day = prompt("enter a day").toLowerCase();
let text = "";
if (day === "montag") {
  text = "monday";
} else if (day === "dienstag") {
  text = "tuesday";
} else if (day === "mitwoch") {
  text = "wednesday";
} else if (day === "donnerstag") {
  text = "thursday";
} else if (day === "freitag") {
  text = "friday";
} else if (day === "samstag") {
  text = "saturday";
} else if (day === "sonntag") {
  text = "sunday";
}

window.alert("today is " + text);

