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
            case "1":
                console.log('i work')
                break


            default:
                console.log('this is the default block');
                break

        }


    }

}

inventoryFunction()