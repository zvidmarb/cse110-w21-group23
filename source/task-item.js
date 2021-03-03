// task-item.js

/* one parameter: the name of the task */
class TaskItem extends HTMLElement {
  constructor(taskName) {
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

    // create task paragraph
    let taskLabel = document.createElement("p")
    taskLabel.setAttribute("class", "taskLabel")
    taskLabel.textContent = taskName;

    // create the delete icon
    let deleteIcon = document.createElement("a")
    deleteIcon.setAttribute("class", "deleteIcon")
    deleteIcon.addEventListener('click', deleteTask)
    deleteIcon.innerHTML = `&times`

    // Apply external styles to the shadow dom
    const linkElem = document.createElement("link")
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "./style.css")

    // Attach the created element to the shadow dom
    shadow.appendChild(linkElem);

    // attach the created elements to the shadow dom
    shadow.appendChild(wrapper)
    wrapper.appendChild(checkbox)
    wrapper.appendChild(taskLabel)
    wrapper.appendChild(deleteIcon)
  }
}

customElements.define("task-item", TaskItem);