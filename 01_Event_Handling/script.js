// Mouse event 1: click
const clickButton = document.querySelector("#clickButton");
const clickMessage = document.querySelector("#clickMessage");

clickButton.addEventListener("click", function () {
  // This function runs when the user clicks the button.
  // It changes the text inside the paragraph below the button.
  clickMessage.textContent = "The button was clicked!";
});

// Mouse event 2: mouseover and mouseout
const mouseBox = document.querySelector("#mouseBox");
const mouseMessage = document.querySelector("#mouseMessage");

mouseBox.addEventListener("mouseover", function () {
  // This function runs when the mouse pointer enters the box.
  // It changes the box color and displays a message.
  mouseBox.style.backgroundColor = "lightgreen";
  mouseMessage.textContent = "The mouse is over the box.";
});

mouseBox.addEventListener("mouseout", function () {
  // This function runs when the mouse pointer leaves the box.
  // It restores the original color and changes the message.
  mouseBox.style.backgroundColor = "lightblue";
  mouseMessage.textContent = "The mouse left the box.";
});

// Keyboard events: keypress, keydown, and keyup
const keyboardInput = document.querySelector("#keyboardInput");
const keyboardMessage = document.querySelector("#keyboardMessage");

keyboardInput.addEventListener("keypress", function (event) {
  // This function runs when a character key is pressed.
  // event.key tells us which key was pressed.
  keyboardMessage.textContent = "Key press: " + event.key;
});

keyboardInput.addEventListener("keydown", function (event) {
  // This function runs as soon as any key is pushed down.
  // It displays the key that is currently being pressed.
  keyboardMessage.textContent = "Key down: " + event.key;
});

keyboardInput.addEventListener("keyup", function (event) {
  // This function runs when a pressed key is released.
  // It displays the key that was released.
  keyboardMessage.textContent = "Key up: " + event.key;
});

// Form event: submit
const userForm = document.querySelector("#userForm");
const nameInput = document.querySelector("#nameInput");
const formMessage = document.querySelector("#formMessage");

userForm.addEventListener("submit", function (event) {
  // This function runs when the user submits the form.
  // preventDefault() stops the browser from refreshing the page.
  event.preventDefault();
  // Then it reads the name and displays a personalized message.
  formMessage.textContent = "Hello, " + nameInput.value + "! Form submitted.";
});

// Print event
const printButton = document.querySelector("#printButton");

printButton.addEventListener("click", function () {
  // This function runs when the print button is clicked.
  // window.print() opens the browser's print dialog.
  window.print();
});

// Load event
window.addEventListener("load", function () {
  // This function runs after the complete page has loaded.
  // It confirms that the page is ready to use.
  document.querySelector("#loadMessage").textContent =
    "The page has loaded successfully.";
});
