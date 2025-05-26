 // Create an empty array to store the numbers
let Numbers = [];

// Prompt the user 10 times to input numbers and push to the array
for (let i = 0; i < 10; i++) {
    let input = prompt(`Enter number {i + 1}:`);
    let num = parseInt(input); // Convert to number
    if (!isNaN(num)) {
        Numbers.push(num); // Add to array
    } else {
        console.log("Invalid number. Please try again.");
        i--; // Repeat this iteration
    }
}

console.log("Original Array:", Numbers);

// Bubble Sort function with logging of each comparison
function bubbleSort(arr) {
    let n = arr.length;
    let temp;
    console.log("\nStarting Bubble Sort Comparison Process:\n");

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing {arr[j]} and {arr[j + 1]}`);

            if (arr[j] > arr[j + 1]) {
                console.log(`Swapping {arr[j]} and {arr[j + 1]}`);
                // Swap values
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            } else {
                console.log(`No swap needed`);
            }
        }
        console.log(`Pass {i + 1} result: {arr.join(', ')}`);
    }

    return arr;
}

// Call the bubbleSort function and store result
let sortedArray = bubbleSort(Numbers);

// Log the final sorted array
console.log("\nSorted Array:", sortedArray);
