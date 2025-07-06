// select DOM elements
const inputBox = document.querySelector('#search-bar');
const addTaskBtn = document.querySelector('#add-task');
const listWrapper = document.querySelector('.list-wrapper');

// data array
let taskList = [];

// add task button logic
addTaskBtn.addEventListener('click', () => {
  const newTask = inputBox.value.trim();

  if (!newTask) {
    alert('Please add a task first!');
  } else if (taskList.includes(newTask)) {
    alert('Task already exists, no duplicates friend!');
  } else {
    taskList.push(newTask);
    renderTask();
    inputBox.value = '';
  }
});

// render task function
function renderTask() {
  listWrapper.innerHTML = ''; // clear the old list

  taskList.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('list');

    const taskItem = document.createElement('li');
    taskItem.textContent = task;

    const deleteBtn = document.createElement('img');
    deleteBtn.src = 'assets/trash.png';
    deleteBtn.alt = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.dataset.index = index;

    // Delete logic
    deleteBtn.addEventListener('click', () => {
      taskList.splice(index, 1); // remove from array
      renderTask(); // re-render the list
    });

    taskDiv.appendChild(taskItem);
    taskDiv.appendChild(deleteBtn);
    listWrapper.appendChild(taskDiv);
  });
}
