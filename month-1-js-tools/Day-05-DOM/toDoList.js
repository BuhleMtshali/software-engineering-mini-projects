//define the elements
const userInput = document.querySelector("#user-input");
const submitBtn = document.querySelector("#submit-btn");
const listWrapper = document.querySelector(".list-wrapper");
let listCount = document.querySelector(".list-count");
let completedCount = document.querySelector(".completed-count")
//create an array that will hold the list
const listArray = [];


//create a function that will push items into the array
submitBtn.addEventListener('click', (e) => {
    let inputValue = userInput.value;
    listArray.push(inputValue);
    listCount.textContent = listArray.length;
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
    let listItem = '';
    //grab items from the array
    array.forEach((item, index) => {

       listItem +=  `
                    <label>
                    <input id="item-${index}" type="checkbox" class="checkbox-input" name="item-checkbox" data-id="${index}"/>
                    ${item}
                    </label>
                    `;
    })
            listWrapper.innerHTML = listItem;

            //getting each box
            const taskCheckboxes = document.querySelectorAll(".checkbox-input");

            taskCheckboxes.forEach((checkbox) => {
                checkbox.addEventListener('change', (e) => {
                     const label = e.target.parentElement;
                     if(checkbox.checked){
                        label.style.textDecoration = "line-through";
                        listCount.textContent--;
                        completedCount.textContent++;
                     } else {
                        label.style.textDecoration = "none";
                        listCount.textContent++;
                        completedCount.textContent--;
                     }
            
            })
        
    })
}