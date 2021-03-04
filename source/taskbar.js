
// Taskbar js
// openNav is considered used here
let tasklist = [] // initialize a tasklist to store all the tasks

let ongoingTasks = document.getElementById('ongoing-tasks')
let addBtn = document.getElementById('plus');

/* eslint-disable */
function openNav() {
  document.getElementById('taskbar').style.display = 'block'
  document.getElementById('taskbar').style.width = '350px'
}
/* eslint-enable */

// closeNav is considered used here

/* eslint-disable */
function closeNav () {
  document.getElementById('taskbar').style.width = '0'
  document.getElementById('taskbar').style.display = 'none'
}
/* eslint-enable */


window.addEventListener("DOMContentLoaded", () => {
  // if data are in localStorage
  if (localStorage.getItem("tasks")) {
    appendAllTasks();
  }
})

/**
 * Retrieve the task from local storage and render them to the UI 
 */
function appendAllTasks() {
  tasklist = JSON.parse(localStorage.getItem("tasks"))
  tasklist.forEach((task) => {
    let currTask = new TaskItem(task.name)
    ongoingTasks.appendChild(currTask)
  })
}

addBtn.onclick = function () {
  let newTask = prompt('Enter a new task')
  while (!newTask) {
    newTask = prompt('Please enter a valid task')
  }
  addNewTask(newTask)
}

/**
 * Add a new task to UI/local storage with label newTask
 * @param {String} newTask 
 */
function addNewTask(newTask) {
  tasklist.push({"name" : newTask})
  ongoingTasks.appendChild(new TaskItem(newTask))
  localStorage.setItem('tasks', JSON.stringify(tasklist)) //override the previous tasklist
}

/**
 * Delete the task that was clicked on
 * @param {event} e 
 */
function deleteTask(e) {
  const icon = e.target // gives the delete icon
  const taskItem = icon.parentElement // gives the parent of the icon, which is the li element
  const taskLabel = taskItem.querySelector('p').textContent // retrieve the task label inside the li element
  // slice the task list
  let count = 0
  tasklist.forEach((task) => {
    if (task.name === taskLabel) {
      tasklist.splice(count, 1)
    }
    count++
  })
  localStorage.setItem('tasks', JSON.stringify(tasklist)) //override the previous tasklist
  taskItem.remove()
}

module.exports = {addNewTask, deleteTask}

