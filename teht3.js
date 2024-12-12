// Array to store dog names
const dogNames = [];

// Ask the user for six dog names
for (let i = 0; i < 6; i++) {
    const name = prompt(`Enter the name of dog ${i + 1}:`);
    dogNames.push(name);
}

// Sort the dog names in reverse alphabetical order
dogNames.sort().reverse();

// Get the unordered list element from the HTML
const ulElement = document.getElementById("dog-list");

// Add each dog name as a list item in the unordered list
dogNames.forEach((dogName) => {
    const liElement = document.createElement("li");
    liElement.textContent = dogName;
    ulElement.appendChild(liElement);
});
