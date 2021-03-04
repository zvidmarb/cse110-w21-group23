import { TaskItem } from "./taskbar.js.js";

beforeAll(() => {
  document.body.innerHTML = `
  <ol id="ongoing-tasks"></ul>
<button id="plus">+</button>
`
// require('../task-item.js')
  // require('../taskbar.js')
})


test('add a new task', () => {
  const {addNewTask, deleteTask} = require('../taskbar')
  addNewTask('do quiz')
  const tasklist = JSON.parse(localStorage.getItem("tasks"))
  expect(tasklist.keys('name').length).toBe(1)
})