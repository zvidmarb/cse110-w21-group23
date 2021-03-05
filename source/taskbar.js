// taskbar.js

let ongoingArr = [] // initialize a ongoing tasklist to store all the ongoing tasks of the format {"name" : ""}
let completedArr = [] // initialize a completed tasklist to store all the completed tasks

let ongoingTasks = document.getElementById('ongoing-tasks')
let addBtn = document.getElementById('plus')
let completeTasks = document.getElementById('completed-tasks')
let currentTask = document.getElementById('current-task')

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
    ongoingArr = JSON.parse(localStorage.getItem("ongoingTasks"))
    let index = 0
    ongoingArr.forEach((task) => {
      if (index === 0) {
        getTopTask(task)
      }
      index++
      let currTask = new TaskItem(task.name, "ongoing", true)
      ongoingTasks.appendChild(currTask)
    })
  }
  if (localStorage.getItem('completedTasks')) {
    completedArr = JSON.parse(localStorage.getItem("completedTasks"))
    completedArr.forEach((task) => {
      let currTask = new TaskItem(task.name, "completed", true)
      completeTasks.appendChild(currTask)
    })
  }
}

// will be modified later, to make it prettier
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
  let addToTop = false;
  if (ongoingArr[0] === undefined) {
    addToTop = true;
  }
  ongoingArr.push({"name" : newTask})
  ongoingTasks.appendChild(new TaskItem(newTask, "ongoing", true))
  localStorage.setItem('ongoingTasks', JSON.stringify(ongoingArr)) //override the previous ongoing tasklist
  
  if (addToTop === true) {
    getTopTask(ongoingArr[0])
  }

  taskItemNodeList =  ongoingTasks.querySelectorAll("task-item")
}

/**
 * Delete the task that was clicked on
 * @param {event} e - the event is the delete icon
 */
function deleteTask(e) {
  const icon = e.target // retrieve the delete icon
  const taskItem = icon.parentElement // retrieve the parent of the icon, which is the li element
  const taskLabel = taskItem.querySelector('p').textContent // retrieve the task label inside the li element
  
  let location // either in ongoingArr or completedArr

  // find its location and splice the task list to remove it
  let count1 = 0
  let index1 = 0
  ongoingArr.forEach((task) => {
    if (task.name === taskLabel) {
      location = ongoingArr
      ongoingArr.splice(count1, 1)
      index1 = count1
    }
    count1++
  })

  let count2 = 0
  let index2 = 0
  completedArr.forEach((task) => {
    if (task.name === taskLabel) {
      location = completedArr
      completedArr.splice(count2, 1)
      index2 = count2
    }
    count2++
  })

  if (location === ongoingArr) {
    localStorage.setItem('ongoingTasks', JSON.stringify(ongoingArr)) //override the previous ongoingTasklist
    taskItemNodeList =  ongoingTasks.querySelectorAll("task-item")
    taskItemNodeList[index1].remove()
  } else if (location === completedArr) {
    localStorage.setItem('completedTasks', JSON.stringify(completedArr)) //override the previous ongoingTasklist
    taskItemNodeList =  completeTasks.querySelectorAll("task-item")
    taskItemNodeList[index2].remove()
  }
  

  // if the first task is deleted, change the top task as well
  if (index1 === 0 || location === ongoingArr) {
    getTopTask(ongoingArr[0])
  }
}

/**
 * If the checkbox of an ongoing task is clicked, move it to "complete" section
 * @param {event} e - the event is the checkbox
 */
function checkToComplete(e) {
  const checkBox = e.target // retrieve the checkbox
  const taskItem = checkBox.parentElement // retrieve the parent of the checkbox, which is the li element
  const taskLabel = taskItem.querySelector('p').textContent // retrieve the task label inside the li element
  
  // remove it from the ongoing tasklist
  let count = 0
  let index = 0
  ongoingArr.forEach((task) => {
    if (task.name === taskLabel) {
      ongoingArr.splice(count, 1)
      index = count
    }
    count++
  })
  localStorage.setItem('ongoingTasks', JSON.stringify(ongoingArr)) //override the previous ongoingTasklist
  // taskItem.remove()
  taskItemNodeList =  ongoingTasks.querySelectorAll("task-item")
  taskItemNodeList[index].remove()
  console.log(taskItemNodeList)
  // taskItemNodeList.forEach((node) => {
  //   console.log(node)
  //   // if (node.querySelector('li') === null) {
      
  //   // }
  // })

  // append it to the complete tasklist
  completedArr.push({"name" : taskLabel})
  let newCompleteTask = new TaskItem(taskLabel, "completed", true)
  completeTasks.appendChild(newCompleteTask)
  localStorage.setItem('completedTasks', JSON.stringify(completedArr)) //override the previous ongoing tasklist

  // if the first task is checked, change the top task as well
  if (index === 0) {
    getTopTask(ongoingArr[0])
  }
}


/**
 * Top task shows under start/stop button and has a check box as well
 * @param {JSON object} task 
 */
function getTopTask(task) {
  currentTask.innerHTML = ''
  if (task != undefined) {
    let topTask = new TaskItem(task.name, "topTask", false)
    currentTask.appendChild(topTask)
  } else {
    currentTask.textContent = "No task Stored"
  }
  
}

/**
 * Remove the top task, notify the ongoing task list, and replace by the next ongoing task
 */
function removeTopTask(e) {
  checkToComplete(e)
  // taskItemObj = ongoingTasks.querySelector("task-item")
  // taskItemObj.remove()
  // find the next ongoing task
  if (ongoingArr[0] != null) {
    getTopTask(ongoingArr[0])
  } else {
    currentTask.textContent = "No task Stored"
  }
}

// module.exports = {addNewTask, deleteTask}