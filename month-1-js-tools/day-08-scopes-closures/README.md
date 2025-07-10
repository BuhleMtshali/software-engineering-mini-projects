# 🔐 Password Generator (Closure Edition)

Welcome to your JavaScript-powered CLI Password Generator! This nifty lil' tool lets you generate secure, customizable passwords straight from your terminal — and it uses **closures** to do the magic. 🧙🏽‍♀️✨

---

## 💡 What It Does

- Prompts you for:
  - Password length
  - Whether to include uppercase letters
  - Whether to include numbers
  - Whether to include symbols
- Dynamically builds a **character pool**
- Uses a **closure-based generator function** to produce a random password
- Outputs the password directly to the CLI

---

## 📦 Technologies Used

- JavaScript (ES6+)
- Node.js
- [`prompt-sync`](https://www.npmjs.com/package/prompt-sync)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed. Then install `prompt-sync`:

```bash
npm install prompt-sync

Run the App
node passwordGenerator.js

🧪 Sample Flow
🔐 Welcome to Your Password Generator 🔐
How long should your password be? 12
Include uppercase letters? (yes/no): yes
Include numbers? (yes/no): yes
Include symbols? (yes/no): no

🔑 Your closure-generated password is: jK4wepLoqfD2

🧠 Key Concepts
✅ Closures
A closure in JavaScript is when an inner function remembers the variables of its outer function, even after the outer function has finished executing.

function passwordFactory(pool) {
  return function(length) {
    let pass = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * pool.length);
      pass += pool[index];
    }
    return pass;
  };
}


Here, passwordFactory returns a function that remembers the pool variable — this is a classic closure move 💅🏾

🎯 Improvements for Later
 Add strength meter

 Copy to clipboard feature

 Add option to generate multiple passwords

 Web-based UI with React

 Save history of generated passwords