// PersonalityGenerator.js

// Data Arrays
const names = ['Jane', 'Buhle', 'Michelle', 'Dave', 'Sipho'];
const traits = ['shy', 'bubbly', 'social butterfly', 'adventurous', 'introvert', 'extrovert'];
const strengths = ['drawing', 'presentations', 'problem-solving', 'comforting', 'friendly', 'finding clues'];
const weaknesses = ['confrontations', 'team work', 'theory work', 'mathematics', 'meeting new people'];
const hobbies = ['gaming', 'coding', 'running', 'hiking', 'rock collecting', 'reading', 'writing'];

// Helper function to get random item from array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Character Class
class Character {
    constructor(name, trait, strength, weakness, hobby) {
        this.name = name;
        this.trait = trait;
        this.strength = strength;
        this.weakness = weakness;
        this.hobby = hobby;
    }

    // Method to print character info
    displayProfile() {
        console.log("🎭---- Your Random Personality Generator ----🎭");
        console.log(`🧑 Name     : ${this.name}`);
        console.log(`💫 Trait    : ${this.trait}`);
        console.log(`💪 Strength : ${this.strength}`);
        console.log(`🫣 Weakness : ${this.weakness}`);
        console.log(`🎮 Hobby    : ${this.hobby}`);
        console.log("------------------------------------------------");
    }
}

// Generator Class
class PersonalityGenerator {
    static generateCharacter() {
        const name = getRandom(names);
        const trait = getRandom(traits);
        const strength = getRandom(strengths);
        const weakness = getRandom(weaknesses);
        const hobby = getRandom(hobbies);

        return new Character(name, trait, strength, weakness, hobby);
    }
}

// Run the generator
const randomCharacter = PersonalityGenerator.generateCharacter();
randomCharacter.displayProfile();
