//defining the variables
const inputBox = document.querySelector('#search-bar');
const addTaskBtn = document.querySelector('#add-task');
let listWrapper = document.querySelector('.list-wrapper')

//todo list to store tasks
const taskList = [];

addTaskBtn.addEventListener('click', () => {
   if(!inputBox.value){
    alert('Please add a task first')
   } else {
    if(taskList.includes(inputBox.value)){
        alert('task already exists, no duplicates friend')
    } else{
        taskList.push(inputBox.value);
        renderTask(taskList)
        inputBox.value = ''
    }
   }
})



function renderTask(tasks){
    let html = '';
    tasks.forEach((task, index) => {
        html += `
                <div class="list">
                <li>${task}</li>
                <img src="assets/trash.png" alt="" class="delete-btn" data-index=${index}>
                </div>
                `
        listWrapper.innerHTML = html;
        document.querySelectorAll('.delete-btn').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                console.log(btn.dataset.index)
               if(btn.dataset.index === btn.dataset.index){
                e.target.closest('li');
                listWrapper.remove()
               }
            })
        })
    })
}