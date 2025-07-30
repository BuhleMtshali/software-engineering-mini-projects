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


function renderList(array) {
    listWrapper.innerHTML = '';
    let listItem = '';

    array.forEach((item, index) => {
        listItem += `
            <div class="label-wrapper">
                <label>
                    <input id="${index}" type="checkbox" class="checkbox-input" name="item-checkbox" data-id="${index}"/>
                    ${item}
                </label>
                <span class="material-symbols-outlined delete-btns" data-id="${index}">delete</span>
            </div>
        `;
    });

    listWrapper.innerHTML = listItem;

    // Add event listeners for delete buttons
    const deleteBtns = document.querySelectorAll(".delete-btns");
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id); // get the item index
            array.splice(id, 1); // remove the item from the array
            renderList(array); // re-render the updated list
        });
    });

    // Add event listeners for checkboxes
    const taskCheckboxes = document.querySelectorAll(".checkbox-input");
    taskCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            const label = e.target.parentElement;

            if (checkbox.checked) {
                label.style.textDecoration = "line-through";
                listCount.textContent--;
                completedCount.textContent++;

                if (parseInt(listCount.textContent) === 0) {
                    alert('Hooray!! you finished all your tasks!!!');
                }
            } else {
                label.style.textDecoration = "none";
                listCount.textContent++;
                completedCount.textContent--;
            }
        });
    });
}
