# 🧮 Day 7 – Modular Mini Calculator (JavaScript)

Welcome to **Day 7** of my coding journey!  
Today, I built a **Modular Mini Calculator** in JavaScript that lets you add, subtract, multiply, and divide numbers — and it keeps asking if you want to calculate again until you say *no*.  

---

## 📌 Project Overview

This calculator is **object-oriented** using a `Calculator` class.  
It supports **four operations**:
- ➕ Addition
- ➖ Subtraction
- ✖️ Multiplication
- ➗ Division (with zero-check)

The program runs in a **loop** so the user can do multiple calculations without restarting it.

---

## 🛠️ Tech Stack
- **Language:** JavaScript (Node.js)
- **Package:** [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) for taking user input in the terminal

---

## 📂 Project Structure

```
Day-7/
├── calculator.js # Main calculator code
├── README.md # Project documentation
└── package.json # Dependencies

```


---

## 🚀 How to Run the Project

### 1️⃣ Install Dependencies

```bash
npm install prompt-sync

```

## 2️⃣ Run the Program

```

node calculator.js

```

## 🧩 How It Works

1. The program greets you with a welcome message.

2. You enter:

    - First number

    - Operator (+, -, *, /)

    - Second number

3. The calculator runs the selected method from the Calculator class.

4. The result is displayed.

5. You’re asked if you want to calculate again:

    - yes → program repeats

    - no → program thanks you and ends


## 💡 Example Run

```

======== Welcome to My Modulated Mini Calculator🍀 =======
Let's start calculating
Enter your first number: 10
Choose an operator(+, *, /, -): *
Choose your second number: 5
Results: 50
Wanna make another calculation(yes/no): yes
Let's start calculating
Enter your first number: 20
Choose an operator(+, *, /, -): /
Choose your second number: 0
we cannot divide by 0
Wanna make another calculation(yes/no): no
thank you for trying my Mini Calculator

```

## 📖 What I Learned

- How to create and use classes in JavaScript

- Difference between methods and functions

- Using switch for clean conditional logic

- How to handle user input with prompt-sync

- Looping until the user decides to exit


## 🗓️ Day 7 Reflection

Today’s project really made me think about code organization and reusability.
Instead of writing all operations inline, I modularized them into a class — making the code much cleaner and reusable for the future.