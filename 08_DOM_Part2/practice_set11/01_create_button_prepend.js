const body = document.getElementsByTagName("body");

const button = document.createElement("button");

button.textContent = "Click Me";

button.style.color = "white";
button.style.backgroundColor = "red";

body[0].prepend(button);
