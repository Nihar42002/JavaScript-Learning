// Select the button and the paragraph from the HTML page.
const clickButton = document.querySelector("#clickButton");
const clickMessage = document.querySelector("#clickMessage");

clickButton.addEventListener("click", function (event) {
  // The event object is automatically provided by the browser.
  // event.type tells us which event happened: in this case, "click".
  // event.target tells us which HTML element caused the event.
  clickMessage.textContent =
    "Event: " + event.type + ". Target: " + event.target.textContent;
});

// Select the keyboard input and its message paragraph.
const keyboardInput = document.querySelector("#keyboardInput");
const keyboardMessage = document.querySelector("#keyboardMessage");

keyboardInput.addEventListener("keydown", function (event) {
  // This function runs when the user presses a key in the input.
  // event.key contains the name or character of the pressed key.
  keyboardMessage.textContent = "You pressed: " + event.key;
});

// Select the form, name input, and message paragraph.
const userForm = document.querySelector("#userForm");
const nameInput = document.querySelector("#nameInput");
const formMessage = document.querySelector("#formMessage");

userForm.addEventListener("submit", function (event) {
  // This function runs when the form is submitted.
  // event.preventDefault() stops the browser from refreshing the page.
  event.preventDefault();

  // nameInput.value gets the text entered by the user.
  formMessage.textContent = "Form submitted by: " + nameInput.value;
});

// Select the buttons and message used for the removeEventListener example.
const startButton = document.querySelector("#startButton");
const removeButton = document.querySelector("#removeButton");
const removeMessage = document.querySelector("#removeMessage");

// Keep the event function in a variable so the same function can be removed later.
function showButtonMessage() {
  // This function runs whenever the startButton is clicked.
  removeMessage.textContent = "The button event is working.";
}

startButton.addEventListener("click", showButtonMessage);

removeButton.addEventListener("click", function () {
  // removeEventListener() stops showButtonMessage from running on future clicks.
  // It must receive the same function name used with addEventListener().
  startButton.removeEventListener("click", showButtonMessage);
  removeMessage.textContent = "The button event has been removed.";
});
