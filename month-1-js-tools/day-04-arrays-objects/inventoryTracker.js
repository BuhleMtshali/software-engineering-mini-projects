const prompt = require("prompt-sync")();
let inventory = [];

console.log('---- WELCOME TO MINI INVENTORY TRACKER🍀 ----');

// Capitalize first letter
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

let choice;
let name = prompt('Enter your name: ');

do {
  console.log('\nHello, ' + capitalize(name) + '! What would you like to do?');
  console.log('1. Add items to inventory list');
  console.log('2. View inventory list');
  console.log('3. Remove an item from the inventory list');
  console.log('4. Exit');

  choice = prompt('Please select an option: ');

  switch (choice) {
    case '1':
      let productName = capitalize(prompt('Enter the product name: '));
      let productQuantity = parseInt(prompt('Enter how many products you want to add: '));
      let productPrice = parseFloat(prompt('Enter the price of your product (in rands): '));
      let totalPrice = productPrice * productQuantity;

      let product = {
        productName: productName,
        productPrice: productPrice.toFixed(2),
        productQuantity: productQuantity,
        totalPrice: totalPrice.toFixed(2)
      };

      inventory.push(product);
      console.log(`✅ ${product.productName} has been successfully added!`);
      break;

    case '2':
      if (inventory.length > 0) {
        console.log("\n🧾 Your Inventory:");
        inventory.forEach((product, index) => {
          console.log(`${index + 1}. Product Name: ${product.productName}`);
          console.log(`   Quantity       : ${product.productQuantity}`);
          console.log(`   Price (each)   : R${product.productPrice}`);
          console.log(`   Total Price    : R${product.totalPrice}`);
          console.log('--------------------------------');
        });
      } else {
        console.log('⚠️ Inventory is currently empty, please add something first!');
      }
      break;

    case '3':
      if (inventory.length > 0) {
        let removeItem = prompt('Enter the name of the product you want to remove: ');

        const itemExists = inventory.some(
          item => item.productName.toLowerCase() === removeItem.toLowerCase()
        );

        if (!itemExists) {
          console.log(`❌ ${removeItem} not found in your inventory.`);
        } else {
          inventory = inventory.filter(
            item => item.productName.toLowerCase() !== removeItem.toLowerCase()
          );
          console.log(`✅ ${capitalize(removeItem)} has been successfully removed!`);
        }

        if (inventory.length > 0) {
          console.log(`📦 Remaining Inventory:`);
          inventory.forEach((product) => {
            console.log(`- ${product.productName} @ R${product.productPrice}`);
          });
        } else {
          console.log("📭 Inventory is now empty.");
        }
      } else {
        console.log('⚠️ Inventory is currently empty');
      }
      break;

    case '4':
      console.log('👋 Thank you for trying the mini inventory tracker!');
      break;

    default:
      console.log(`${choice} is an invalid choice, please try again!`);
  }
} while (choice !== '4');
