const prompt = require("prompt-sync")();

function fizzBuzzMachine() {
    console.log("===== Welcome to the FizzBuzz Machine 🧠✨ =====");

    let runAgain = "yes";

    while (runAgain.toLowerCase() === "yes" || runAgain.toLowerCase() === "y") {
        console.log("\nChoose an option:");
        console.log("1. FizzBuzz with output to console");
        console.log("2. FizzBuzz with results stored in array");
        console.log("3. Exit");

        let choice = prompt("Enter your choice (1/2/3): ");

        if (choice === "1" || choice === "2") {
            let max = parseInt(prompt("Enter the max number to FizzBuzz to: "));
            if (isNaN(max) || max < 1) {
                console.log("🚫 Please enter a valid number greater than 0.");
                continue;
            }

            let results = [];

            for (let i = 1; i <= max; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    results.push(`${i} is FizzBuzz!!!`);
                } else if (i % 3 === 0) {
                    results.push(`${i} is Fizz!!!`);
                } else if (i % 5 === 0) {
                    results.push(`${i} is Buzz!!`);
                } else {
                    results.push(i);
                }
            }

            if (choice === "1") {
                console.log("📣 FizzBuzz Results:");
                console.log(results.join("\n"));
            } else {
                console.log("📦 Results saved in array:");
                console.log(results);
            }
        } else if (choice === "3") {
            console.log("👋🏽 Thanks for using the FizzBuzz Machine!");
            break;
        } else {
            console.log("🚫 Invalid option. Please select 1, 2, or 3.");
        }

        runAgain = prompt("Would you like to FizzBuzz again? (yes/no): ");
    }
}

fizzBuzzMachine();
