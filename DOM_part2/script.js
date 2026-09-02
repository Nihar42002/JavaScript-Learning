const box = document.getElementById("box");
const target = document.getElementById("target");

const getAttrBtn = document.getElementById("getAttrBtn");
const setAttrBtn = document.getElementById("setAttrBtn");
const appendBtn = document.getElementById("appendBtn");
const prependBtn = document.getElementById("prependBtn");
const afterBtn = document.getElementById("afterBtn");
const beforeBtn = document.getElementById("beforeBtn");
const removeBtn = document.getElementById("removeBtn");

getAttrBtn.setAttribute("title", "This is button title");
console.log("getAttribute value:", getAttrBtn.getAttribute("title"));

setAttrBtn.setAttribute("data-role", "admin");
console.log("setAttribute value:", setAttrBtn.getAttribute("data-role"));

appendBtn.onclick = function () {
  const p = document.createElement("p");
  p.textContent = "append() example";
  box.append(p);
};

prependBtn.onclick = function () {
  const p = document.createElement("p");
  p.textContent = "prepend() example";
  box.prepend(p);
};

afterBtn.onclick = function () {
  const p = document.createElement("p");
  p.textContent = "after() example";
  target.after(p);
};

beforeBtn.onclick = function () {
  const p = document.createElement("p");
  p.textContent = "before() example";
  target.before(p);
};

removeBtn.onclick = function () {
  const lastNode = document.querySelector("#box p:last-child");
  if (lastNode) {
    lastNode.remove();
  }
};
