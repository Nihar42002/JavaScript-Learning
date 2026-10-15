let mode = document.querySelector("#toggle");
let current = "light";

if (mode) {
  mode.addEventListener("click", () => {
    if (current === "light") {
      current = "dark";
      document.querySelector("body").style.backgroundColor = "black";
    } else {
      current = "light";
      document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(current);
  });
}
