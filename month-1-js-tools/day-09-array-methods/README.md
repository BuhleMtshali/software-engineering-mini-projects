# 📚 Day 9 – Student Grade Checker CLI App 🧪

Welcome to **Day 9** of my **#100DaysOfCode** full-stack journey! Today’s build was a *CLI-based Student Grade Management System* — a lightweight tool designed to collect, validate, and display academic records in a readable, formatted style.

## 🧠 What I Built

A **Node.js command-line application** that allows users to:

* Enter student details (name, surname, email, ID)
* Add multiple modules with final marks
* Automatically assign grades and status (pass/fail)
* Validate input (student ID must be 9 digits, email must be valid)
* Print an **academic record-style** output in the terminal

This app is a practical example of how real-world data collection and validation systems work — just without the database… for now. 😉

---

## 🤾 Features

✅ Clean and interactive CLI
✅ Input validation using Regex
✅ Dynamic module handling
✅ Grade assignment logic
✅ Pass/Fail status tracking
✅ Formatted academic report per student

---

## 🛠 Tech Stack

* **Node.js**
* `prompt-sync` for input
* Regex for validation
* Pure JavaScript for logic

---

## 🎯 How It Works

```bash
1. Run the app: node studentGradeChecker.js
2. Input student personal details
3. Specify how many modules to add
4. For each module:
   - Enter the name
   - Enter the final mark (0–100)
5. Get:
   - Grade (A–F)
   - Status (Passed ✅ / Failed ❌)
6. Repeat for more students if needed
7. View a formatted academic record in the terminal
```

---

## 🧮 Grade Logic

| Mark (%) | Grade | Status   |
| -------- | ----- | -------- |
| 90–100   | A     | ✅ Passed |
| 80–89    | B     | ✅ Passed |
| 70–79    | C     | ✅ Passed |
| 60–69    | D     | ✅ Passed |
| 50–59    | E     | ✅ Passed |
| 0–49     | F     | ❌ Failed |

---

## 📸 Sample Output

```
🎓 ======= ACADEMIC RECORDS ======= 🎓

Student 1:
Name: Buhle Mtshali
Student ID: 123456789
Email: buhle@example.com

📘 Modules:
  1. Web Technologies
     Final Mark : 87%
     Grade      : B
     Status     : Passed ✅

  2. Networking
     Final Mark : 44%
     Grade      : F
     Status     : Failed ❌

---------------------------------------------
```

---

## 🔍 What I Learned

* 🧪 How to use regular expressions for robust input validation
* 🔁 Nested loops and conditionals for dynamic form-like CLI interaction
* 🧱 Structuring and nesting arrays/objects for clean data storage
* 🎨 Formatting terminal output to mimic real academic records
* ✉️ Defensive programming and user experience in CLI apps

---

## 🚀 Next Steps

* [ ] Add average mark calculation
* [ ] Export records to `.txt` or `.csv`
* [ ] Save students to a local file or simple database
* [ ] Build a GUI version (React or Electron maybe 👀)

---

## 📂 Project Structure

```
📆 student-grade-checker
├️ 📜 studentGradeChecker.js
├️ 📄 README.md ← you're here!
```

---

## 🧪 Run It Yourself

```bash
npm install prompt-sync
node studentGradeChecker.js
```

---

Let me know if you want a version with a file-saving feature or an HTML-based UI next! You’re leveling up hella fast 💥 Keep pushing, friend — we’re building greatness one script at a time. 🚀🧠
