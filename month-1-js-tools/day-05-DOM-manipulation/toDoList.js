//defining the variables
const inputBox = document.querySelector('#search-bar');
const addTaskBtn = document.querySelector('#add-task');
let deleteBtn = document.querySelectorAll('.delete-btn');

//todo list to store tasks
const taskList = [];

addTaskBtn.addEventListener('click', () => {
   if(!inputBox.value){
    alert('Please add a task first')
   } else {
    
   }
})