# 🎭 Day 11 - Random Personality Generator (Using JavaScript Classes)

Welcome to Day 11 of your 100 Days of JavaScript mini project journey!  
Today’s project is a **Random Personality Generator** built using **JavaScript classes**.  
It’s quirky, fun, and lets you auto-generate fictional personalities — great for games, writing inspiration, or just a good laugh with your code!

---

## 💡 Project Overview

This CLI-based app uses arrays of possible personality traits, strengths, weaknesses, and hobbies to create a randomized character using class-based structure in JavaScript.

---

## 📁 Files

- `personality.js` – Main logic file containing the class and generator logic.
- No HTML or CSS needed, this one's strictly for the terminal/console.

---

## 🧠 Concepts Covered

- JavaScript **classes**
- **Constructor functions**
- **Method creation** inside a class
- **Random selection** from arrays
- Basic console logging
- Data encapsulation using class instances

---

## 📦 Features

- Randomly selects:
  - Name
  - Personality Trait
  - Strength
  - Weakness
  - Hobby
- Uses object-oriented programming (OOP) principles
- Generates a new character every time you run the script

---

## 🧪 Sample Output

----🎲 Your Random Personality Generator ----
Name: Buhle
Trait: social butterfly
Strength: comforting
Weakness: mathematics
Hobby: hiking



---

## 🛠️ How to Run It

1. Make sure you have Node.js installed.
2. Open your terminal in the project folder.
3. Run:

```bash
node personality.js

🧬 Code Breakdown

class Personality {
    constructor(name, trait, strength, weakness, hobby) {
        this.name = name;
        this.trait = trait;
        this.strength = strength;
        this.weakness = weakness;
        this.hobby = hobby;
    }

    display() {
        console.log("----🎲 Your Random Personality Generator ----");
        console.log(`Name: ${this.name}`);
        console.log(`Trait: ${this.trait}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Weakness: ${this.weakness}`);
        console.log(`Hobby: ${this.hobby}`);
    }
}

- Uses Math.random() to pick a value from each category.

- Instantiates a new Personality object with those values.

- Calls .display() to print it all neatly.

✨ Enhancements You Can Try

- Add age, zodiac sign, or MBTI type.

- Export characters to a JSON file.

- Turn it into a web app with buttons and avatars.

- Let users customize the arrays by input.

🧠 Final Thoughts

This mini project is a great introduction to object-oriented programming in JavaScript and adds a creative twist! You’re not just writing code — you’re inventing little digital people. 👀

Keep the creativity rolling, and on to Day 12! 🚀