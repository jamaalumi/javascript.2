// Prompt the user for the number of participants
const numParticipants = parseInt(prompt("Enter the number of participants:"), 10);

// Initialize an array to store participant names
const participants = [];

// Prompt the user to enter the names of participants
for (let i = 0; i < numParticipants; i++) {
    const name = prompt(`Enter the name of participant ${i + 1}:`);
    participants.push(name);
}

// Sort the participant names alphabetically
participants.sort();

// Get the ordered list element from the HTML
const olElement = document.getElementById("participant-list");

// Add each participant's name as a list item in the ordered list
participants.forEach((participant) => {
    const liElement = document.createElement("li");
    liElement.textContent = participant;
    olElement.appendChild(liElement);
});
