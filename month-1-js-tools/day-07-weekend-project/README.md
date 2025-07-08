# 🧮 Mini CLI Calculator (Loop Edition) – Day 7

Welcome to **Day 7** of the Full-Stack JavaScript Journey!  
This upgraded CLI Calculator is a loop-powered, emoji-hyping, math-solving beast that runs **repeated calculations** until you tell it to stop.

---

## 🚀 Project Overview

This calculator prompts users to:

1. Enter the **first number**
2. Choose an **operator**: `+`, `-`, `*`, or `/`
3. Enter the **second number**
4. Get the **result**, formatted to 2 decimal places
5. Decide if they want to **run again** (yep, it loops)

---

## 📁 Folder Structure

Day-07-weekend-project/
│
├── calculator.js # Main calculator logic
├── README.md # This documentation file


---

## 🛠️ How to Run

1. **Make sure Node.js is installed.**  
   If not, grab it from [nodejs.org](https://nodejs.org)

2. **Install prompt-sync**:

```bash
npm install prompt-sync

1. Run the calculator:

node calculator.js

✅ Features

✅ Supports addition, subtraction, multiplication, and division

✅ Keeps running until user types "no" or "n"

✅ Prevents division by zero (because nobody likes crashing math)

✅ Friendly emoji-enhanced CLI UX

✅ Shows results clearly using string interpolation

💻 Example Interaction
--------- Welcome to My Mini CLI Based Calculator🧮 -------------
Enter your first number: 8
Choose an operator (+, -, *, /): *
Enter your second number: 5
✅ Result: 8 * 5 = 40.00
Would you like to perform another calculation? (yes/no): yes

Enter your first number: 9
Choose an operator (+, -, *, /): /
Enter your second number: 0
Sorry poonkie, we cannot devide by 0
✅ Result: 9 / 0 = NaN
Would you like to perform another calculation? (yes/no): no


🧠 What I Learned

How to use while loops with user prompts

Logical input validation and string comparison

Basic control flow with switch

Keeping CLI programs user-friendly and fun 🎈