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
function renderList(array){
    listWrapper.innerHTML = '';

    array.forEach((item) => {

        //creating a new list item
        const listItem = document.createElement('li');

        //creating the checkbox
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('for', `checkbox-${item.replace(/\s/g, '')}`);

        //creating a label
        const label = document.createElement('label');
        label.setAttribute('for', `checkbox-${item.replace(/\s/g, '')}`);
        label.textContent = item;
        
        //append the checkbox and label to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        
        //append to the main list
        listWrapper.appendChild(listItem)
       
    })
}