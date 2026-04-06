document.addEventListener('DOMContentLoaded', getTasks);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value === '') return;

    createTaskElement(taskInput.value);
    saveLocalTask(taskInput.value);
    taskInput.value = '';
}

function createTaskElement(task) {
    const li = document.createElement('li');
    li.innerHTML = `${task} <span class="delete-btn" onclick="removeTask(this)">DELETE</span>`;
    document.getElementById('taskList').appendChild(li);
}

function removeTask(element) {
    const taskText = element.parentElement.firstChild.textContent.trim();
    element.parentElement.remove();
    removeLocalTask(taskText);
}

function saveLocalTask(task) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.forEach(task => createTaskElement(task));
}

function removeLocalTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}