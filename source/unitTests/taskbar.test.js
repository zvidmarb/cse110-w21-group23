const {TaskItem} = require("../task-item.js")

beforeAll(() => {
  document.body.innerHTML = `
  <ol id="ongoing-tasks"></ul>
<button id="plus">+</button>
`
require('../taskbar.js')
})

test('add a new task', () => {
  const {addNewTask, deleteTask} = require('../taskbar')
  let newTask = new TaskItem("do quiz", "ongoing", true)
  // addNewTask('do quiz')
  const tasklist = JSON.parse(localStorage.getItem("tasks"))
  expect(tasklist.keys('name').length).toBe(1)
})

// 1. change how TaskItem is imported; pass in a dummy version of TaskItem (a mock class)
// 2. mock the module (a unit test framework)