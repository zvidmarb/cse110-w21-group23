beforeAll(() => {
  document.body.innerHTML = `
  <i id="bars" class="fas fa-bars" onclick="openNav()"></i>
  <div id="taskbar">

    <div id="task-header" class="popup-header">
      <p id="task-header-label">Tasks</p>
      <a href="javascript:void(0)" class="close" onclick="closeNav()">&times;</a>
    </div>

    <ol id="ongoing-tasks"></ol>
    <button id="plus">+</button>
    <ol id="completed-tasks"></ol>
  </div>
  <div id="current-task">No tasks stored!</div>
`
  require('../js/taskbar.js')
})


test('a lot of tests for the task bar', () => {
  const {openNav, closeNav, appendAllTasks, addNewTask, 
    deleteTask, checkToComplete, renderTopTask, 
    checkTopTask, editTask, createNewTask} = require('../taskbar')

  let ongoingTasks = document.getElementById('ongoing-tasks') // ol of the ongoing tasks
  let addBtn = document.getElementById('plus')
  let completeTasks = document.getElementById('completed-tasks') // ul of the completed tasks
  let currentTask = document.getElementById('current-task') // the top task

  openNav()
  expect(document.getElementById('taskbar').style.width).toBe('350px')
  closeNav()
  expect(document.getElementById('taskbar').style.width).toBe('0px')
  
  // add two tasks: "quiz" and "exam"
  addNewTask("quiz")
  var nodes = Array.from( ongoingTasks.children );
  expect(nodes.length).toBe(1)
  addNewTask("exam")
  nodes = Array.from( ongoingTasks.children );
  expect(nodes.length).toBe(2)

  // delete "quiz"
  var deleteIcon = nodes[0].querySelectorAll('span')[1].querySelector('i')
  deleteIcon.click()
  nodes = Array.from( ongoingTasks.children );
  expect(nodes.length).toBe(1)

  // check off "exam"
  var checkBox = nodes[0].querySelector('input')
  checkBox.click()
  nodes = Array.from( ongoingTasks.children );
  expect(nodes.length).toBe(0)
  nodes = Array.from( completeTasks.children );
  expect(nodes.length).toBe(1)

  // delete "exam"
  deleteIcon = nodes[0].querySelector('i')
  deleteIcon.click()
  nodes = Array.from( completeTasks.children );
  expect(nodes.length).toBe(0)
  

  // add "lab" and "final"
  addNewTask("lab")
  addNewTask("final")

  // check off "lab"
  nodes = Array.from( ongoingTasks.children );
  checkBox = nodes[0].querySelector('input')
  checkBox.click()
  
  // append "lab" and "final" again; both lists should have length 2
  appendAllTasks()
  nodes = Array.from( ongoingTasks.children );
  expect(nodes.length).toBe(2)
  nodes = Array.from( completeTasks.children );
  expect(nodes.length).toBe(2)

  // check off the top task
  checkBox = currentTask.querySelector("input")
  checkBox.click()
  nodes = Array.from( ongoingTasks.children );
  expect(nodes.length).toBe(1)
  
  // add two more tasks
  // and try to click the edit button and the add button
  addNewTask("lecture")
  addNewTask("discussion")
  nodes = Array.from( ongoingTasks.children );
  expect(nodes.length).toBe(3)
  var editIcon = nodes[1].querySelector("i")
  editIcon.click()
  addBtn.click()
}) 
