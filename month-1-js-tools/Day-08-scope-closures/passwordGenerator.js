const prompt = require("prompt-sync")();

//outer function that will create a password generator
function createPasswordGenerator(length, useSymbols){
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    const charPool = useSymbols ? chars + symbols : chars; //boolean to decide on whether to use symbols or nor


    //inner function that will remember the above
    return function generatePassword(){
        let password = "";
        for (let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * charPool.length)
            password += charPool[randomIndex]
        }

        return password
    }
}



// CLI Interaction
console.log("==== 🔐 Password Generator ====");
const length = parseInt(prompt("Enter password length: "), 10);
const includeSymbols = prompt("Include symbols? (yes/no): ").toLowerCase() === "yes";

// Create a generator with chosen settings
const passwordGenerator = createPasswordGenerator(length, includeSymbols);

// Generate password using the closure
console.log("\nHere’s your password: " + passwordGenerator());
console.log("Another one? " + passwordGenerator());
console.log("finishedz")