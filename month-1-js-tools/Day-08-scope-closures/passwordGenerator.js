function outerFunction(){
    let name = "buhle"

    function innerFunction(){
        console.log(`I come from the inner function${name}`)
    }

    return innerFunction;
}

const functionCall = outerFunction();
functionCall()