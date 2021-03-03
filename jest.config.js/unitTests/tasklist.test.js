import { TaskItem } from "./task-item.js.js";

beforeAll(() => {
  document.body.innerHTML = `
  <ul id="ongoing-tasks"></ul>
<button id="plus">+</button>
`
// require('../task-item.js')
  // require('../tasklist.js')
})


test('add a new task', () => {
  const {addNewTask, deleteTask} = require('../tasklist')
  addNewTask('do quiz')
  const tasklist = JSON.parse(localStorage.getItem("tasks"))
  expect(tasklist.keys('name').length).toBe(1)
})