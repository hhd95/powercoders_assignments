let span = document.createElement("span");
let node = document.createTextNode("Some new text");
let str = "15 p +12 cm + zkir, +akili";
let parent = document.querySelector("#demo2");
span.appendChild(node);
span.innerHTML = str;
parent.appendChild(span);
