const prompt = require('prompt-sync')();

function miniFizzbuzz(){
    let keepPlaying = "yes";
    while(keepPlaying.toLocaleLowerCase() === "yes"){
        let number = parseFloat(prompt('Choose an iterator: '));
        let iterator = 0;

        if(isNaN(number)){
            console.log('The chosen max iterator value is incorrect!!!')
        } else {
            while( iterator <= number){
            if(iterator % 3 === 0 && iterator % 5 === 0){
                console.log('FizzBuzz🎉')
            } else if (iterator % 3 === 0){
                console.log('Fizz!!!!!!')
            } else if (iterator % 5 === 0){
                console.log('Buzzz!!!!!!')
            } else {
                console.log(iterator)
            }
            iterator++;
        }

        }
        keepPlaying = prompt("Wanna go another round(yes/no): ")
        if(keepPlaying.toLocaleLowerCase() === 'no'){
            console.log('thank you for trying my mini game')
        }
      }
    

}

miniFizzbuzz()