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
  require('../taskbar.js')
})


test('a lot of tests', () => {
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
  
  addNewTask("quiz")
  var nodes = Array.from( ongoingTasks.children );
  expect(nodes.length).toBe(1)
  addNewTask("exam")
  var nodes = Array.from( ongoingTasks.children );
  expect(nodes.length).toBe(2)

  const deleteIcon = nodes[0].querySelectorAll('span')[1].querySelector('i')
  deleteIcon.click()
  var nodes = Array.from( ongoingTasks.children );
  expect(nodes.length).toBe(1)

  const checkBox = nodes[0].querySelector('input')
  checkBox.click()
  var nodes = Array.from( ongoingTasks.children );
  expect(nodes.length).toBe(0)
  var nodes = Array.from( completeTasks.children );
  expect(nodes.length).toBe(1)

  addNewTask("lab")
  addBtn.click()
  appendAllTasks()
}) 
