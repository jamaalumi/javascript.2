// Initialize an empty array to store the numbers
const numbers = [];

// Prompt the user to enter five numbers
for (let i = 1; i <= 5; i++) {
    const num = parseFloat(prompt(`Enter number ${i}:`));
    numbers.push(num);
}

// Print the numbers in reverse order using a for loop
console.log("Numbers in reverse order:");
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
