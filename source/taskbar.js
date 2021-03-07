// taskbar.js

function openNav() {
  // the width will probably be changed later
  document.getElementById('taskbar').style.width = '350px'
}

function closeNav () {
  document.getElementById('taskbar').style.width = '0'
}

let ongoingArr = [] // initialize a ongoing tasklist to store all the ongoing tasks of the format {"name" : ""}
let completedArr = [] // initialize a completed tasklist to store all the completed tasks

let ongoingTasks = document.getElementById('ongoing-tasks') // ol of the ongoing tasks
let addBtn = document.getElementById('plus')
let completeTasks = document.getElementById('completed-tasks') // ul of the completed tasks
let currentTask = document.getElementById('current-task') // the top task

window.addEventListener("DOMContentLoaded", () => {
  // if there are data in localStorage, load them
  if (localStorage.getItem("ongoingTasks") || localStorage.getItem("completedTasks") ) {
    appendAllTasks();
  }
})

/**
 * Retrieve the task from local storage and render them to the UI 
 */
function appendAllTasks() {
  if (localStorage.getItem('ongoingTasks')) {
    // render the ongoing tasks
    ongoingArr = JSON.parse(localStorage.getItem("ongoingTasks"))
    ongoingArr.forEach((task) => {
      let currTask = createNewTask(task.name, "ongoing", true, true)
      ongoingTasks.appendChild(currTask)
    })
    renderTopTask() // render the top task
  }
  if (localStorage.getItem('completedTasks')) {
    // render the completed tasks
    completedArr = JSON.parse(localStorage.getItem("completedTasks"))
    completedArr.forEach((task) => {
      let currTask = createNewTask(task.name, "completed", false, true)
      completeTasks.appendChild(currTask)
    })
  }
}

// onclick function for the add button
addBtn.onclick = function () {
  // ask for user input
  // create the input field
  const inputField = document.createElement('input')
  inputField.setAttribute('type', 'input')
  inputField.setAttribute('class', 'form_field')
  inputField.setAttribute('placeholder', 'Enter a Task')
  
  ongoingTasks.appendChild(inputField)  // append the input field to the end of the tasklist

  // execute when users press 'enter'
  inputField.addEventListener('change', (e) => {
    let newTaskName = e.currentTarget.value;
    addNewTask(newTaskName)
    inputField.remove()
  });
}

/**
 * Add a new task to UI/local storage with label newTaskName
 * @param {String} newTaskName 
 */
function addNewTask(newTaskName) {
  // check if the task is currently the first task
  let addToTop = false;
  if (ongoingArr[0] === undefined) {
    addToTop = true;
  }
  ongoingArr.push({"name" : newTaskName})
  let newTask = createNewTask(newTaskName, "ongoing", true, true)
  ongoingTasks.appendChild(newTask)

  localStorage.setItem('ongoingTasks', JSON.stringify(ongoingArr)) //override the previous ongoing tasklist
  
  // if it's currently the first task added, make it the top task as well
  if (addToTop === true) {
    renderTopTask()
  }
}

/**
 * Delete the task that was clicked on
 * @param {event} e - the event is the delete icon
 */
function deleteTask(e) {
  const icon = e.target // get the delete icon
  const taskItem = icon.parentElement.parentElement// get the parent of the icon, which is the li element
  const taskLabel = taskItem.querySelector('p').textContent // get the task label inside the li element
  taskItem.remove() // remove the li element

  let location // either in ongoingArr or completedArr

  // find its location and splice the tasklist to remove it
  let count1 = 0
  let index1 = 0
  ongoingArr.forEach((task) => {
    if (task.name === taskLabel) {
      location = ongoingArr // if it's from ongoingArr
      ongoingArr.splice(count1, 1) // update ongoingAr
      index1 = count1
    }
    count1++
  })

  let count2 = 0
  completedArr.forEach((task) => {
    if (task.name === taskLabel) {
      location = completedArr // if it's from completedArr
      completedArr.splice(count2, 1)  // update completedArr
    }
    count2++
  })

  if (location === ongoingArr) {
    localStorage.setItem('ongoingTasks', JSON.stringify(ongoingArr)) //override the previous ongoing Tasklist
    // if the first task is deleted, change the top task as well
    if (index1 === 0) {
      renderTopTask()
    }
  } else if (location === completedArr) {
    localStorage.setItem('completedTasks', JSON.stringify(completedArr)) //override the previous completed Tasklist
  }
}

/**
 * If the checkbox of an ongoing task is clicked, move it to "complete" section
 * @param {event} e - the event is the checkbox
 */
function checkToComplete(e) {
  const checkBox = e.target // get the checkbox
  const taskItem = checkBox.parentElement // get the parent of the checkbox, which is the li element
  const taskLabel = taskItem.querySelector('p').textContent // get the task label inside the li element
  taskItem.remove() // remove it from the ongoing tasklist

  let count = 0
  let index = 0
  // splice the ongoing tasklist to exclude the task
  ongoingArr.forEach((task) => {
    if (task.name === taskLabel) {
      ongoingArr.splice(count, 1)
      index = count
    }
    count++
  })
  localStorage.setItem('ongoingTasks', JSON.stringify(ongoingArr)) //override the previous ongoing Tasklist

  // create the same task again and append it to the complete tasklist
  completedArr.push({"name" : taskLabel})
  completeTasks.appendChild(createNewTask(taskLabel, "completed", false, true))
  localStorage.setItem('completedTasks', JSON.stringify(completedArr)) //override the previous completed tasklist

  // if the first task is checked, change the top task as well
  if (index === 0) {
    renderTopTask()
  }
}

/**
 * Top task shows under start/stop button and has a check box as well
 */
function renderTopTask() {
    currentTask.innerHTML = ''
    // if there are still ongoing tasks, append the next one to the top task
    if (ongoingArr[0] != undefined) {
      const nextTaskName = ongoingTasks.querySelector('li').querySelector('p').textContent
      currentTask.appendChild(createNewTask(nextTaskName, "topTask", false, false))
    } else {
      currentTask.innerHTML = "No task Stored"
    }
}

/**
 * Click event listener for the checkbox of the top task
 * @param {event} e 
 */
function checkTopTask(e) {
  // remove the first ongoing task
  ongoingTasks.querySelector('li').remove()
  // then check the top task like how we check the ongoing tasks inside task bar
  checkToComplete(e)
}

/**
 * Click event listener for the edit icon of any ongoing tasks
 * @param {event} e 
 */
function editTask(e) {
  const icon = e.target // get the edit icon
  const taskItem = icon.parentElement.parentElement// get the parent of the icon, which is the li element
  const taskLabel = taskItem.querySelector('p').textContent // get the task label inside the li element

  // create the input field 
  const inputField = document.createElement('input')
  inputField.setAttribute('type', 'input')
  inputField.setAttribute('class', 'form_field')
  inputField.setAttribute('placeholder', taskLabel)
  
  var nodes = Array.from( ongoingTasks.children ) // get all children of the ol
  index = nodes.indexOf(taskItem) // get the index of the task that was clicked on

  ongoingTasks.innerHTML = '' // clear all the tasks
  for (let i = 0; i < index; i++) {
    ongoingTasks.appendChild(nodes[i])  // append children before the clicked task
  }
  ongoingTasks.appendChild(inputField)  // append the inputField

  for (let i = index + 1; i < nodes.length; i++) {
    ongoingTasks.appendChild(nodes[i])  // append the rest of the children
  }

  // execute when users press 'enter'
  inputField.addEventListener('change', (e) => {
    let newTaskName = e.currentTarget.value // get the updated task name
    let newTaskItem = createNewTask(newTaskName, 'ongoing', true, true)

    // get the index of the inputField again in case users delete other tasks
    var nodes = Array.from( ongoingTasks.children );
    index = nodes.indexOf(inputField)

    inputField.remove() // remove the input field

    // render all the tasks again
    ongoingTasks.innerHTML = ''
    for (let i = 0; i < index; i++) {
      ongoingTasks.appendChild(nodes[i])
    }
    ongoingTasks.appendChild(newTaskItem)

    for (let i = index + 1; i < nodes.length; i++) {
      ongoingTasks.appendChild(nodes[i])
    }

    // save the new list
    ongoingArr[index] = {'name': newTaskName}
    localStorage.setItem('ongoingTasks', JSON.stringify(ongoingArr)) //override the previous ongoing tasklist

    // if edited the first task, re-render the top task
    if (index === 0) {
      renderTopTask()
    }
  });
}

/**
 * The function that constructs each task
 * @param {String} taskName 
 * @param {String} location - "ongoing", "completed", "topTask"
 * @param {boolean} canEdit - completed and top task cannot be edited
 * @param {boolean} canDelete - top task cannot be deleted
 * @returns 
 */
function createNewTask(taskName, location, canEdit, canDelete) {
  // create li
  let wrapper = document.createElement("li")
  wrapper.setAttribute("class", "task")

  // create checkbox
  let checkbox = document.createElement("input")
  checkbox.setAttribute("class", "checkbox")
  checkbox.setAttribute("type", "checkbox")
  if (location === "ongoing") {
    checkbox.addEventListener('change', checkToComplete)
  } else if (location === "completed") {
    checkbox.checked = true
  } else if (location === "topTask") {
    checkbox.addEventListener('change', checkTopTask)
  }

  // create task label
  let taskLabel = document.createElement("p")
  taskLabel.setAttribute("class", "taskLabel")
  taskLabel.textContent = taskName;

  // create the edit icon
  let editIcon = document.createElement('span')
  editIcon.setAttribute('class', 'editIcon')
  editIcon.addEventListener('click', editTask)
  editIcon.innerHTML = `<i class="material-icons">border_color</i>`

  // create the delete icon
  let deleteIcon = document.createElement("span")
  deleteIcon.setAttribute("class", "deleteIcon")
  deleteIcon.addEventListener('click', deleteTask)
  deleteIcon.innerHTML = `<i class="fa fa-trash"></i>` 

  wrapper.appendChild(checkbox)
  wrapper.appendChild(taskLabel)
  if (canEdit === true) {
    wrapper.appendChild(editIcon)
  }
  if (canDelete === true) {
    wrapper.appendChild(deleteIcon)
  }

  return wrapper
}

module.exports = {openNav, closeNav, appendAllTasks, addNewTask, 
  deleteTask, checkToComplete, renderTopTask, checkTopTask, editTask, createNewTask}
