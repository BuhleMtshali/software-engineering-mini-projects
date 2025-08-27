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
        console.log(`Your balance: ${this.balance}`)
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
    let name = prompt("Enter you name: ")
    let accountNumber = prompt("Enter your account number: ");
    let accountType = prompt("Choose your account type (cheque, savings, credit): ")
    let pin = prompt("Enter your pin: ");
    let openingBalance = parseFloat(prompt("Enter the amount you want to open your account with: "))


    const bank = new Bank(name, accountNumber, accountType, pin, openingBalance);
    console.log(`Your name: ${bank.name}`);
}

transactions();