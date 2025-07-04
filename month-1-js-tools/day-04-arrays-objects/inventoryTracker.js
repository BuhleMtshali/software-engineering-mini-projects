const prompt = require("prompt-sync")();
//array to hold inventory
let inventory = [];

//welcome message
console.log('---- WELCOME TO MINI INVENTORY TRACKER🍀 ----');

//define variables outside the loops
let choice;
let name = prompt('Enter your name: ')

//start with a do-while loop (it will atleast run once)
do{
    //create options
    console.log('1. Add items to inventory list: ');
    console.log('2. View inventory list: ');
    console.log('3. Remove an item from the inventory list: ');
    console.log('4. Exit: ');

     //get the user's choice
     choice = prompt('Please select an option: ');

     //using switch to operate the inventory
     switch(choice){
        case '1':
            let productName = prompt('Enter the product name: ');
            let productPrice = parseFloat(prompt('Enter the price of your product (in rands): '));

            let product = {
            productName: productName.toUpperCase(),
            productPrice: productPrice
            };

            inventory.push(product);
            console.log(`${productName} has been successfully added!!!`);
        break;

        case '2':
            if(inventory.length > 0){
                inventory.forEach((product, index) => {
                    console.log(`${index + 1}. Product Name: ${product.productName}`);
                    console.log(`   Product Price: R${product.productPrice}`);
                    console.log('--------------------------------');
                })
            } else{
                console.log('Inventory is currently empty, please add something first!!')
            }
        break;
        case '3':
            if (inventory.length > 0) {
                let removeItem = prompt('Enter the name of the product you want to remove: ').toLowerCase();

                const itemExists = inventory.some(item => item.productName === removeItem);
                if (!itemExists) {
                console.log(`❌ ${removeItem} not found in your inventory.`);
                } else {
                inventory = inventory.filter(item => item.productName !== removeItem);
                console.log(`✅ ${removeItem} has been successfully removed!`);
            }

                console.log(`📦 Remaining Inventory:`);
                inventory.forEach((product) => {
                console.log(`- ${product.productName} @ R${product.productPrice}`);
                 });

                } else {
                console.log('⚠️ Inventory is currently empty');
            }
        break;

        case '4':
            console.log('Thank you for trying the mini inventory tracker')
            break;
        default:
            console.log(`${choice} is an invalid choice, please try again!!`);
     } 

} while (choice !== '4')
