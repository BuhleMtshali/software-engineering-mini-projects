const prompt = require('prompt-sync')();

//first defining the array that will hold the whole inventory
let inventoryArray = [];

let welcomeMessage = "======== Welcome To My Mini Inventory Tracker🛒 =======";
console.log(welcomeMessage)

//main function
function inventoryFunction(){
    while(true){

        //user options
        console.log("Please choose an Option Below: \n");
        console.log("1. View Inventory List: ")
        console.log("2. Add Item to Inventory: ")
        console.log("3. Remove an Item from Inventory: ")
        console.log("4. Search By Catergory: ")
        console.log("5. Exit")

        //get the user option
        let options = prompt("Please select an option to continue: ");

        //start the switch statements
        switch(options){

            //this is the first case of viewing the inventory list
            case "1":
               if (inventoryArray.length <= 0){
                console.log('Inventory list is currently empty for now, please try addin items first')
               } else {
                    inventoryArray.forEach((item) => {
                    console.log(item)
                 })
               }
               break;

            //THIS IS FOR THE SECOND Case 2. Adding item to inventory
            case "2":
                let pName = prompt("Enter the product name: ");
                let pCatergory = prompt("Enter the product catergory: ");
                let pPriceEach = parseFloat(prompt("How much is the product each in (R): "));
                let pQuantity = parseInt(prompt("How many products are you adding: "));
                let total = pQuantity * pPriceEach

               //creating the product object
                let product = {
                    productName: pName.toLowerCase().trim(),
                    productCategory: pCatergory.trim(),
                    productPriceEach: pPriceEach,
                    productQuantity: pQuantity,
                    overallPrice: total.toFixed(2)
                }

                //pushing the product to the main array
                inventoryArray.push(product);

                //confirm its been added
                console.log(`✅ Your ${pName} has been successfully added to the inventory list!`);
                break;

            //case 3: remove an item based on the nme and how much you wanna remove
            case "3":
                let removeItem = prompt("Enter the name of the product you want to remove: ").toLowerCase();

                //finding the item we want to remove from
                const foundItem = inventoryArray.find(item => item.productName === removeItem);

                //using if statements to remove the itesms
                if(foundItem){

                    //here is the logic to execute if the item is found
                    console.log(foundItem);
                    let quantityToRemove = parseInt(prompt(`You currently have ${foundItem.productQuantity} ${foundItem.productName}'s, how many would you like to remove: `))
                    if (foundItem.productQuantity >= quantityToRemove){
                        foundItem.productQuantity = foundItem.productQuantity - quantityToRemove;
                        console.log(`✅ We have successfuly removed ${quantityToRemove} ${foundItem.productName}'s from inventory, you now have ${foundItem.productQuantity} ${foundItem.productName}'s in your inventory`)
                        console.log(foundItem)

                    } else if(foundItem.productQuantity < quantityToRemove){
                        console.log(`❌ You only have ${foundItem.productQuantity} ${foundItem.productName}'s in your inventory, so ${quantityToRemove} is not valid in this case`)

                    } else {
                        console.log(`🚫 ${quantityToRemove} is not valid in this case, try another number`)
                    }
                    //end of found logic

                } else {
                    console.log(`${removeItem} does not currently exist in your inventory list!`)
                }
                break;
            
            //case "4": searching for items based on catergory
            case "4":
                let searchedItem = prompt("Would you like to search items based on the name/catergory: ")
                let nameOfItem = prompt("Enter the name/catergory of the item you want to search for: ")

                //decide what to show based on what the user returns
                if(searchedItem.toLowerCase() === "name"){
                    const searchByName = inventoryArray.filter(item => item.productName === s)
                }




            default:
                console.log('this is the default block');
                break

        }


    }

}

inventoryFunction()