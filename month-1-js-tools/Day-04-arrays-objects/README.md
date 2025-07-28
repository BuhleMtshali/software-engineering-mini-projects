# 🛒 Mini Inventory Tracker - Day 2 Project

A simple, interactive CLI-based Inventory Tracker built with **Node.js**. This app allows users to manage products by adding, removing, viewing, and searching inventory items. Designed for practicing core JavaScript skills including arrays, objects, loops, conditionals, functions, and user input handling via `prompt-sync`.

---

## 📌 Features

- ✅ **View Inventory**: Lists all items currently in inventory.
- ➕ **Add Items**: Add new products with name, category, price, and quantity.
- ❌ **Remove Items**: Subtract quantity or remove products from the list.
- 🔍 **Search**: Filter items by name or category.
- 🚪 **Exit**: Cleanly exits the app when you're done.

---

## 🛠 Technologies Used

- JavaScript (Node.js)
- `prompt-sync` for user input via terminal

---

## 📦 How to Run It

1. Make sure Node.js is installed.
2. Clone the repo or copy the code into a file like `inventory.js`
3. In the terminal:

```bash

npm install prompt-sync
node inventory.js

```

## 🧠 What I Learned

- How to structure and run while loops and switch statements

- Creating and modifying objects inside arrays

- Capturing and validating user input

- Using .find() and .filter() methods effectively

- Dynamically updating array data

## 🌟 Sample Output

```

======== Welcome To My Mini Inventory Tracker🛒 =======
Please choose an Option Below:

1. View Inventory List:
2. Add Item to Inventory:
3. Remove an Item from Inventory:
4. Search By Category:
5. Exit

```

## 🗂 Example Product Object Structure

```

{
  productName: "apple",
  productCategory: "fruit",
  productPriceEach: 3.50,
  productQuantity: 10,
  overallPrice: "35.00"
}

```

## 🧪 Extra Challenges You Tackled

- Case-insensitive name handling (toLowerCase() and .trim())

- Error handling for invalid quantities

- Clear user messaging and feedback

- Used toFixed(2) for price formatting


## 🔮 Future Improvements

- Add file/database saving to persist inventory

- Add update/edit functionality

- Include user login and roles (admin/staff)

- Turn this into a GUI/web app with React or Flask


## 💬 Final Thoughts

This was built as part of my Day 2 Full-Stack Software Engineering Roadmap. I'm building projects daily to sharpen my skills and grow as a developer.


“A little progress each day adds up to big results.” — keep building. 🚀

