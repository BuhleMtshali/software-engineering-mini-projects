// Get the prompt-sync module
const prompt = require('prompt-sync')();

// Correct answer
const city = 'cape town';

// Ask the question
let question = prompt('What is the Mother City? ');

// Check the answer
if (question.toLowerCase() === city.toLowerCase()) {
  console.log('✅ Correct! 🎉 Cape Town *is* the Mother City!');
} else {
  // Capitalize each word (e.g. Cape Town)
  const formattedCity = city
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  console.log(`❌ ${question} is incorrect. The correct answer is ${formattedCity}.`);
}
