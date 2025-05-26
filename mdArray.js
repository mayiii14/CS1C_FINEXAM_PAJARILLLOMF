let Name_Input = prompt("Enter names:\n Genevieve, Juan, Luna, Gabriel, Elise ");

let ageInput = prompt("Enter ages:\n 24, 65, 21, 5, 9 ");

// Convert name input into an array and remove spaces
let namesArray = Name_Input.split(',').map(name => name.trim());

// Convert age input into an array of numbers, handling potential errors
let agesArray = ageInput.split(',').map(age => {
    const parsedAge = parseInt(age.trim());
    //Error handling: Check if age is a valid number. If not, use a default value (e.g., 0).
    return isNaN(parsedAge) ? 0 : parsedAge;
});


// Input validation: Check if the number of names and ages match.
if (namesArray.length !== agesArray.length) {
    console.error("Error: The number of names and ages must match.");
} else {
    // Create a new multi-dimensional array with [name, age] pairs
    let restructuredArray = [];
    for (let i = 0; i < namesArray.length; i++) {
        restructuredArray.push([namesArray[i], agesArray[i]]);
    }
    console.log("Restructured Multi-Dimensional Array:");
    restructuredArray.forEach(pair => {
        console.log(pair);
    });
}
