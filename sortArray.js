// Use prompt() to get input and convert it into arrays
let Number_Input = prompt("Enter numbers separated by commas (e.g., 24, 65, 21, 5, 9, 32, 42, 80, 57):");
let nameInput = prompt("Enter names separated by commas (e.g., Zenvo, Erica, Jordie, Alicia, Redon):");

// Convert comma-separated strings to arrays.  Add error handling for non-numeric input.
let numbers = Number_Input.split(',').map(numStr => {
    const num = parseInt(numStr.trim());
    return isNaN(num) ? 0 : num; // Default to 0 if not a number
});
let names = nameInput.split(',').map(name => name.trim());

// Input validation: Check for consistency in the number of elements (optional but recommended).
if (numbers.length === 0 || names.length === 0) {
    console.error("Error: Please provide both numbers and names.");
} else {
    // Merge arrays into a single array (not for sorting, just to display both)
    let mergedArray = numbers.concat(names);
    console.log("✅ Merged Array:", mergedArray);

    // Sort numbers in reverse numerical order
    let sortedNumbers = [...numbers].sort((a, b) => b - a);
    console.log("🔢 Numbers Sorted (Descending):", sortedNumbers);

    // Sort names alphabetically
    let sortedNames = [...names].sort();
    console.log("🔠 Names Sorted (A-Z):", sortedNames);
}
