//first creating arrays for catergories
const names = ['Jane', 'Buhle', 'Michelle', 'Dave', 'Sipho'];
const traits = ['shy', 'bubbly', 'social butterfly', 'adventurous', 'introvert', 'extrovert']
const strength = ['drawing', 'presentations', 'problem-solving', 'comforting', 'friendly', 'finding clues'];
const weakness = ['confrontations', 'team work', 'theory work', 'mathematics', 'meeting new people']
const hobby = ['gaming', 'coding', 'running', 'hiking', 'rock collecting', 'reading', 'writing']

//creating a helper function to grab random values
function getRandom(array){
    return array[Math.floor(Math.random() * array.length)]
}

//function to generate the character
function generateCharacter(){
    const charName = getRandom(names)
    const charTraits = getRandom(traits);
    const charStrengths = getRandom(strength);
    const charWeakness = getRandom(weakness);

    return {
        Name: charName,
        Trait: charTraits,
        Strength: charStrengths,
        Weakness: charWeakness
    }
}

//displaying the personalities
const person = generateCharacter();
console.log('----Your Random Personality Generator----')
console.log(`Name: ${person.Name}`)
console.log(`Trait: ${person.Trait}`)
console.log(`Strength: ${person.Strength}`)
console.log(`Weakeness: ${person.Weakness}`)