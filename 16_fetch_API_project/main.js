const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// querySelectorAll returns every currency dropdown; querySelector returns the first matching element.
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("#convert-button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const amountInput = document.querySelector("#amount-input");
const msg = document.querySelector("#result");

// Fill each dropdown with supported currencies and refresh its flag on change.
for(let select of dropdowns){
    // for...in visits each currency code used as a key in countryList.
    for(let currCode in countryList){
    // Create an option node, set its displayed text and submitted value, then add it to the dropdown.
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
  select.append(newOption);
    }
    // Run this callback whenever the user chooses a different currency.
    select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  // Use 1 when the amount is blank or less than 1.
  let amtVal = amountInput.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amountInput.value = "1";
  }

  // The API expects lowercase currency codes in its URL and response object.
  const fromCurrency = fromCurr.value.toLowerCase();
  console.log("From currency:", fromCurrency);
  const toCurrency = toCurr.value.toLowerCase();
  console.log("To currency:", toCurrency);
  const URL = `${BASE_URL}/${fromCurrency}.json`;
  console.log("Fetching exchange rate from URL:", URL);

  try {
    // fetch sends the request; await pauses here until the server responds.
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    // json() parses the response body into a JavaScript object.
    const data = await response.json();
    const rate = data[fromCurrency][toCurrency];
    // toFixed(4) formats the calculated amount with four digits after the decimal.
    const finalAmount = (amtVal * rate).toFixed(4);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    msg.innerText = "Unable to fetch exchange rate.";
  }
};

const updateFlag = (element) => {
// Map the selected currency to its country code and update the flag image.
let currCode = element.value;
let countryCode = countryList[currCode];
let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
// Find the image beside this dropdown and change its source to the matching flag URL.
let img = element.parentElement.querySelector("img");
img.src = newSrc;
};

// Prevent the form from reloading the page when the user requests a conversion.
btn.addEventListener("click", (event) => {
  event.preventDefault();
  updateExchangeRate();
});