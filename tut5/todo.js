// Load tasks from Local Storage
document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function(task) {
        displayTask(task);
    });
}

function addTask() {
    var taskInput = document.getElementById('taskInput').value;
    if (taskInput === '') return;

    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskInput);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    displayTask(taskInput);
    document.getElementById('taskInput').value = '';
}

function displayTask(task) {
    var ul = document.getElementById('taskList');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(task));

    // Add a remove button
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () {
        ul.removeChild(li);
        removeTask(task);
    };

    li.appendChild(removeButton);
    ul.appendChild(li);
}

function removeTask(taskToRemove) {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(function(task) {
        return task !== taskToRemove;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}