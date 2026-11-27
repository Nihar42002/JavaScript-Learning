const URL = "https://catfact.ninja/facts";
const fetchButton = document.getElementById("fetch-button");
const factContainer = document.getElementById("fact-container");

const fetchData = async () => {
    try {
        console.log("Fetching data from API...");
        const response = await fetch(URL);
        console.log("Response status:", response.status);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
        }
        const responseData = await response.json();

        console.log(responseData.data[0].fact);
        factContainer.textContent = responseData.data[0].fact;
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchButton.addEventListener("click", fetchData);
fetchData();