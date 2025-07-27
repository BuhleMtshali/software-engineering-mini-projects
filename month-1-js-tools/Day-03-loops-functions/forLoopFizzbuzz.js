const prompt = require('prompt-sync')();

function forLoopFizzbuzz(){
    let keepPlaying = "yes";

    while(keepPlaying.toLocaleLowerCase() === "yes"){
        let iteratorMax = parseFloat(prompt('Enter your desired max iteration: '))
        if(isNaN(iteratorMax)){
            console.log('The chosen iterator is not a valid number: ')
        } else {
            for(let i = 0; i <= iteratorMax; i++){
            if(i % 3 === 0 && i % 5 === 0){
                console.log('Fizzbuzz!!!!!')
            } else if (i % 3 === 0){
                console.log("Fizz!!!!")
            } else if (i % 5 === 0){
                console.log('buzzz!!')
            } else {
                console.log(i)
            }
        }

        }
        keepPlaying = prompt("Wanna go another round(yes/no): ")
        if(keepPlaying.toLocaleLowerCase() === 'no'){
            console.log('thank you for trying my mini game')
        }

    }

}

forLoopFizzbuzz()

