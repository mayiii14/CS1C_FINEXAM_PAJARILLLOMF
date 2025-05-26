// Get input from the user using prompt
let word1 = prompt("Enter the first word, RACECAR: ");
let word2 = prompt("Enter the second word, RECORDER:");

// Function to reverse a string
function reverseString(str) {
    return str.split().reverse().join();
}

// Reverse the words
let reversed1 = reverseString(word1);
let reversed2 = reverseString(word2);

// Log original and reversed strings
console.log(`Original word 1: {word1}`);
console.log(`Reversed word 1: {reversed1}`);
console.log(`Is "{word1}" a palindrome? 
  {word1 === reversed1}`);

console.log(`Original word 2: {word2}`);
console.log(`Reversed word 2: {reversed2}`);
console.log(`Is "{word2}" a palindrome? {word2 === reversed2}`);
