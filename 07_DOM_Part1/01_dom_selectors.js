// document.getElementById("id")
// Finds a single element using its unique id.
// Before: <h1 id="title">DOM Methods Example</h1>
// After: the heading text and style are changed by JavaScript.
const title = document.getElementById("title");
title.textContent = "DOM Methods Demo";
title.style.color = "darkblue";
title.style.backgroundColor = "#eaf3ff";
title.style.padding = "10px";

document.getElementById("beforeAfterText").textContent =
  "Before: This was plain HTML. After: JavaScript changed this text using DOM methods.";
document.getElementById("beforeAfterText").style.color = "#b00020";
document.getElementById("beforeAfterText").style.backgroundColor = "#ffe6e6";

// document.getElementsByTagName("name")
// Finds all elements with the same tag name, like p, div, li.
// Before: there were 3 li items with original text.
// After: each paragraph gets a yellow left border and spacing.
const allParagraphs = document.getElementsByTagName("p");
for (let i = 0; i < allParagraphs.length; i++) {
  allParagraphs[i].style.borderLeft = "4px solid orange";
  allParagraphs[i].style.paddingLeft = "10px";
}

// document.getElementsByClassName("name")
// Finds all elements having the same class name.
// Before: texts were plain paragraph values.
// After: both elements with class="note" were updated.
const noteElements = document.getElementsByClassName("note");
for (let i = 0; i < noteElements.length; i++) {
  noteElements[i].textContent = "Updated using getElementsByClassName()";
  noteElements[i].style.color = "#2a7f62";
  noteElements[i].style.fontWeight = "bold";
}

// document.querySelector("selector")
// Returns the first element that matches a CSS selector.
// Before: first li was "Apple".
// After: it becomes bold and red.
const firstListItem = document.querySelector("li");
firstListItem.style.fontWeight = "bold";
firstListItem.style.color = "red";

// document.querySelectorAll("selector")
// Returns all elements that match a CSS selector.
// Before: list items had fruit names.
// After: all list items are updated with new text and colors.
const allListItems = document.querySelectorAll("li");
allListItems.forEach((item, index) => {
  item.textContent = `Item ${index + 1} updated with querySelectorAll()`;
  item.style.backgroundColor = index % 2 === 0 ? "#f9f9f9" : "#eef7ff";
  item.style.padding = "6px";
  item.style.borderRadius = "4px";
});

// Dynamic text change example.
document.getElementById("dynamicText").textContent =
  "This text was changed by JavaScript using getElementById().";
document.getElementById("dynamicText").style.color = "blue";
document.getElementById("dynamicText").style.fontWeight = "bold";

// Event listener example using getElementById and querySelector.
// Before: button text was "Apply DOM Methods".
// After: on click, the heading changes and an alert appears.
document.getElementById("btn").addEventListener("click", () => {
  document.querySelector("h1").textContent = "DOM Methods Working!";
  alert("All DOM selector methods are working.");
});

console.log("Before change: original HTML");
console.log("After change: DOM values updated");
console.log("By ID:", title);
console.log("By Tag Name:", allParagraphs.length);
console.log("By Class Name:", noteElements.length);
console.log("First querySelector result:", firstListItem);
console.log("All querySelectorAll results:", allListItems.length);
