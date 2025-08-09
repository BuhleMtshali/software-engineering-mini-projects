# 🔐 CLI Password Generator (with Closures)

## 📖 Overview
This is a simple **Command Line Interface (CLI)** password generator built in JavaScript using **Node.js**.  
It uses **closures** to store password generation settings like length and character pool, allowing you to quickly generate multiple passwords with the same configuration.

---

## ✨ Features

- Set custom password length.

- Choose whether to include symbols.

- Generate unlimited passwords with saved settings.

- Powered by **closures** for private variable access.

---

## 🛠️ How It Works

We define an **outer function** `createPasswordGenerator()` that:

- Accepts `length` and `useSymbols` as parameters.

- Builds a `charPool` string containing allowed characters.

- Returns an **inner function** `generatePassword()` that:

  - Randomly selects characters from the `charPool`.

  - Remembers the `length` and `charPool` even after the outer function finishes.

This is a **closure**:  

The inner function retains access to the outer function's variables (`charPool`, `length`) without exposing them globally.

---

## 📦 Installation

1. Make sure you have **Node.js** installed.

2. Install `prompt-sync` for CLI input:

   ```bash
   npm install prompt-sync




3. Save the code in a file, e.g., passwordGenerator.js.


## ▶️ Usage

Run the script in your terminal:

```
node passwordGenerator.js
```

## Example:

```
==== 🔐 Password Generator ====
Enter password length: 12
Include symbols? (yes/no): yes

Here’s your password: a$D92)fkl@Qp
Another one? Z@x4D1f#Lm3!
```

## 📚 Example Code

```

const prompt = require("prompt-sync")();

function createPasswordGenerator(length, useSymbols) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    const charPool = useSymbols ? chars + symbols : chars;

    return function generatePassword() {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charPool.length);
            password += charPool[randomIndex];
        }
        return password;
    };
}

console.log("==== 🔐 Password Generator ====");
const length = parseInt(prompt("Enter password length: "), 10);
const includeSymbols = prompt("Include symbols? (yes/no): ").toLowerCase() === "yes";

const passwordGenerator = createPasswordGenerator(length, includeSymbols);

console.log("\nHere’s your password: " + passwordGenerator());
console.log("Another one? " + passwordGenerator());


```

## 🧠 Why Closures?

Closures let us:

Keep password rules private.

Avoid passing parameters every time we generate a password.

Preserve state across multiple function calls without global variables.