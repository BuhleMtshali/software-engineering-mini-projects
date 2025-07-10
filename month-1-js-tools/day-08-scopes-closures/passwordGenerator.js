const prompt = require("prompt-sync")();

//welcome message
console.log("🔐 Welcome to Your Password Generator 🔐");

//defining character sets
const letters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = letters.toUpperCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=<>?/[]{}";

//asking the user for the password options
let length = parseInt(prompt("How long should your password be? ")); // e.g. 12
let includeUpper = prompt("Include uppercase letters? (yes/no): ").toLowerCase() === 'yes';
let includeNumbers = prompt("Include numbers? (yes/no): ").toLowerCase() === 'yes';
let includeSymbols = prompt("Include symbols? (yes/no): ").toLowerCase() === 'yes';

//build the character pool
let charPool = letters; // always include lowercase

if (includeUpper) charPool += upperLetters;
if (includeNumbers) charPool += numbers;
if (includeSymbols) charPool += symbols;

