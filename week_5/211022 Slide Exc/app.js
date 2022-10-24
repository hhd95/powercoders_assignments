let a = document.getElementById("navigasyon");
console.log(a);

function letterChanges() {
  for (let i = 0; i < 2; i++) {
    let text = ` headerContent ${i + 1}`;
    a.innerText += text;
  }
}
letterChanges();

// a.innerHTML = "newly arrived cars";
console.log(a);

let b = document.getElementById("cars");
console.log();

// b.innerHTML = "new models";

let p = document.getElementsByTagName("li");

let text = "";
function deliler() {
  for (let i = 0; i < p.length - 1; i++) {
    text = `pContent ${i + 1}`;
    p[i].innerText = text;
  }
}
deliler();
