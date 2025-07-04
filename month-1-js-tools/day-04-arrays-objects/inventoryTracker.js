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

            if(choice == '1'){
                let productName = prompt('Enter the product name: ');
                let productPrice = parseFloat(prompt('Enter the price of your product(in rands): '));

                let product = {
                    productName: productName,
                    productPrice: productPrice
                }

                inventory.push(product);
            } else{
                console.log('invalid input, please try again!!')
            }
            break;
        case '2':
            if(inventory){
                inventory.forEach((product) => {
                    console.log(product)
                })
            } else{
                console.log('Inventory is currently empty, please add something first!!')
            }
        break;
        case '3':
            let removeItem = prompt('Enter the name of the product you want to remove: ');

            inventory.forEach((product) => {
                if(product.productName.toLowerCase() === removeItem.toLowerCase()){
                    inventory.filter(item => item.productName !== removeItem)
                    console.log(`${removeItem} has been successfuly removed from inventory!!`);
                    console.log('--- Here are the items left in the inventory: ');
                    inventory.forEach((product) => {
                    console.log(product)
                    });
                }
            })

            
     }

}
