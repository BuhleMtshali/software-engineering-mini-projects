//define the elements
const userInput = document.querySelector("#user-input");
const submitBtn = document.querySelector("#submit-btn");
const listWrapper = document.querySelector(".list-wrapper");

//create an array that will hold the list
const listArray = [];

//create a function that will push items into the array
submitBtn.addEventListener('click', (e) => {
    let inputValue = userInput.value;
    listArray.push(inputValue);
    userInput.value = '';
    renderList(listArray)
})

//allowing 'enter' to submit
userInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault()
        submitBtn.click()
    }
})


//function for rendering the items
let listItem = '';

function renderList(array){
    listWrapper.innerHTML = '';
    //grab items from the array
    array.forEach((item) => {
       listItem +=  `
                    <input type="checkbox" class="checkbox-input" name="item-checkbox"/>
                    <label for="item-checkbox">${item}</label>
                    `
            listWrapper.innerHTML = listItem;
    })
}