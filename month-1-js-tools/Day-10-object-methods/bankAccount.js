const prompt = require('prompt-sync')();

//CREATING CLASS FOR BANK
class Bank{
    constructor(name, accountNumber, pin, accountType, balance){
        this.name = name;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.pin = pin;
        this.balance = balance
    }

    //METHOD TO GET BALANCE
    getBalance(){
        this.balance;
        console.log(`✅ Your balance: ${this.balance}`)
    }

    //DEPOSIT MONEY
    deposit(depositAmount){
        if(depositAmount > 0){
           this.balance += depositAmount;
            console.log(`✅ successsfuly deposited amount, new balance: ${this.balance}`)
        } else {
            console.log("🚫 Invalid amount")
        }
    }

    //WITHDRAW AMOUNT
    withdraw(withdrawAmount){
        if(this.balance >= withdrawAmount){
          this.balance -= withdrawAmount
            console.log(`✅ Successfully withdraw from account, balance R${this.balance}`)
        } else {
            console.log("🚫 Insufficient amount")
        }
    }
}

//MAIN FUNCTION
function transactions(){
    console.log("-------- Welcome to my Mini Bank App🏧 ------")

    //VALIDATING THE NAME
    let name = "";
    while (name === "") {
        name = prompt("Enter your name: ");
        if (name === "") console.log("🚫 Name is required!");
    }

    let accountNumber = "";
    while (accountNumber === "" || isNaN(accountNumber)) {
        accountNumber = prompt("Enter your account number: ");
        if (accountNumber === "" || isNaN(accountNumber)) {
            console.log("🚫 Invalid account number!");
        }
    }

    let pin = "";
    while (pin.length !== 4 || isNaN(pin)) {
        pin = prompt("Enter a 4-digit PIN: ");
        if (pin.length !== 4 || isNaN(pin)) {
            console.log("🚫 Invalid PIN! Must be 4 numbers.");
        }
    }


    let accountType = prompt("Choose your account type (cheque, savings, credit): ")
    let openingBalance = parseFloat(prompt("Enter the amount you want to open your account with: "))
    
    //creating the bank object

    const bank = new Bank(name, accountNumber, accountType, pin, openingBalance);
    //start loop
    let transactAgain = "yes";

    while(transactAgain.toLocaleLowerCase() === "yes"){
        console.log(`Thank you for registering your information ${name}!`)
        console.log(`\n======== ACCOUNT DETAILS FOR: ${name}🍀 =======\n`)
        console.log(`\nYour name: ${name}`);
        console.log(`\nAccount Number: ${accountNumber}`)
        console.log(`\nAccount Type: ${accountType}`)
        console.log(`\nPin: ${pin}`)
        console.log(`\nOpening Balance: ${openingBalance}`)

        //starting the options=
        console.log('\n1. View Balance')
        console.log('\n2. Deposit Money')
        console.log('\n3. Withdraw Money')
        console.log('\n4. Exit')

        //CHOOSING THE OPTION
        const options = prompt('\nPlease select an option: ')

        //switch options
        switch (options) {
            case "1":
                bank.getBalance()
                break;
            case "2":
                let deposit = parseFloat(prompt("Enter the amount you want to deposit: "))
                bank.deposit(deposit)
                break;
            case "3":
                let withdraw = parseFloat(prompt("Enter the amount you want to withdraw: "))
                bank.withdraw(withdraw);
                break
            default:
                console.log(`invalid operator, please try again`)
                break;
        }


        //closing the loop
        transactAgain = prompt("Wanna make another transaction (yes/no): ")
        if(transactAgain.toLocaleLowerCase() === 'no'){
            console.log(`Thank you for trying my mini bank ${name}`)
        }
    }
}

transactions();