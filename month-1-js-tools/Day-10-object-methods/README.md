## 🏧 Mini Bank App

A simple command-line banking application built with Node.js that lets users create an account, deposit money, withdraw funds, and check balances.

This project demonstrates OOP in JavaScript (using classes & methods), user input validation, and loops for continuous transactions.


## ✨ Features

- 🔑 Account Creation: User enters their name, account number, 4-digit PIN, account type, and opening balance.

- Deposit Money: Add funds to your balance.

- 🏦 Withdraw Money: Withdraw funds if sufficient balance exists.

- 👀 Check Balance: View current account balance.

- 🔄 Continuous Transactions: Perform multiple operations in one session until user exits.

- ⚠️ Input Validation: Ensures valid name, numeric account number, and proper PIN format.


## 🚀 How to Run

1. Clone this repo or copy the code into a file (e.g., bank.js).

2. Install prompt-sync for handling CLI input:

```
npm install prompt-sync

```

3. Run the app:

```
node bank.js

```

## 📖 Example Usage

```
-------- Welcome to my Mini Bank App🏧 ------  
Enter your name: Buhle  
Enter your account number: 12345  
Enter a 4-digit PIN: 4321  
Choose your account type (cheque, savings, credit): savings  
Enter the amount you want to open your account with: 1000  

Thank you for registering your information Buhle!  

======== ACCOUNT DETAILS FOR: Buhle🍀 =======  

Your name: Buhle  
Account Number: 12345  
Account Type: savings  
Pin: 4321  
Opening Balance: 1000  

1. View Balance  
2. Deposit Money  
3. Withdraw Money  
4. Exit  

Please select an option: 2  
Enter the amount you want to deposit: 500  
✅ successfully deposited amount, new balance: 1500  

```


## 🛠️ Concepts Practiced

- Classes & Object-Oriented Programming in JavaScript.

- Methods for deposit, withdrawal, and balance check.

- Loops (while) for repeating transactions.

- Switch-case for menu-driven choices.

- Validation to ensure correct user input.


## 📌 Future Improvements

- 🔒 Mask PIN input (so it doesn’t display in terminal).

- 🧾 Add transaction history (logs of deposits/withdrawals).

- 📊 Support multiple accounts in one session.

- 💾 Store accounts persistently (using a file or database).

## 👨🏽‍💻 Author

- Built with 💚 by Buhle as part of learning JavaScript OOP & CLI apps.