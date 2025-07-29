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
        submitBtn.click()
    }
})


//function for rendering the items
function renderList(array){
    array.forEach((item) => {

        //creating a new list item
        const listItem = document.createElement('li');

        
        
        //append to the main list
        listWrapper.appendChild(listItem)
    })
}