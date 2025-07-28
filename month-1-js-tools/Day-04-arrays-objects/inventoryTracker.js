const prompt = require('prompt-sync')();

//first defining the array that will hold the whole inventory
let inventoryArray = [{name: 'buhle'}];

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
                let productName = prompt("Enter the product name: ");
                let productCategory = prompt("Enter the product catergory: ");
                let productPriceEach = parseFloat(prompt("How much is the product each in (R): "));
                let productQuantity = parseInt(prompt("How many products are you adding: "));
                let total = productQuantity * productPriceEach

               //creating the product object
                let product = {
                    pName: productName.trim(),
                    pCatergory: productCategory.trim(),
                    pPriceEach: productPriceEach.trim(),
                    pQuantity: productQuantity.trim(),
                    overallPrice: total.toFixed(2)
                }

                //pushing the product to the main array
                inventoryArray.push(product);

                //confirm its been added
                console.log(`✅ Your ${productName} has been successfully added to the inventory list!`);
                break;
                


            default:
                console.log('this is the default block');
                break

        }


    }

}

inventoryFunction()