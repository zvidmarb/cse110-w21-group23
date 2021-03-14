// task-item.js

/**
 * Three parameters: 
 * - The name/label of the task
 * - The location of the task
 * - whether the task can be deleted
 */
class TaskItem extends HTMLElement {
  constructor(taskName, location, canDelete) {
    super()

    this.setAttribute("class", 'task-item') // for css purpose, maybe we don't need it

    // Create a shadow root
    let shadow = this.attachShadow({ mode: "open" })

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
      checkbox.addEventListener('change', removeTopTask)
    }

    // create task paragraph
    let taskLabel = document.createElement("p")
    taskLabel.setAttribute("class", "taskLabel")
    taskLabel.setAttribute('contenteditable', 'true')
    taskLabel.textContent = taskName;

    // create the delete icon
    let deleteIcon = document.createElement("a")
    deleteIcon.setAttribute("class", "deleteIcon")
    deleteIcon.setAttribute('href', "javascript:void(0)")
    deleteIcon.addEventListener('click', deleteTask)
    deleteIcon.innerHTML = `&times` 

    // Apply external styles to the shadow dom
    const linkElem = document.createElement("link")
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "./css/taskbar.css")

    // Attach the created element to the shadow dom
    shadow.appendChild(linkElem);

    // attach the created elements to the shadow dom
    shadow.appendChild(wrapper)
    wrapper.appendChild(checkbox)
    wrapper.appendChild(taskLabel)
    if (canDelete === true) {
      wrapper.appendChild(deleteIcon)
    }
  }
}

customElements.define("task-item", TaskItem);

// module.exports = {TaskItem}
