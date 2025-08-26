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
        return this.balance;
    }

    //DEPOSIT MONEY
    deposit(depositAmount){
        if(depositAmount > 0){
            return this.balance + depositAmount;
        } else {
            console.log("🚫 Invalid amount")
        }
    }

    //WITHDRAW AMOUNT
    withdraw(withdrawAmount){
        if(this.balance > withdrawAmount){
            return this.balance - withdrawAmount
            console.log(`✅ Successfully withdraw from account, balance R${this.balance}`)
        } else {
            console.log("🚫 Insufficient amount")
        }
    }
}

//MAIN FUNCTION
function transactions(){
    const bank = new Bank("Buhle", "123454", "savings", "2321", 10000);
}