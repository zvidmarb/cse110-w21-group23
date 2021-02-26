
// Menu js
// openNav is considered used here

/* eslint-disable */
function openNav() {
  document.getElementById('side-task').style.width = '350px'
}
/* eslint-enable */

// closeNav is considered used here

/* eslint-disable */
function closeNav () {
  document.getElementById('side-task').style.width = '0'
}
/* eslint-enable */

// Testing out code
// Get the info box
const info = document.getElementById('info')

// Open info box when the question mark is clicked
// (We need to set this up with our question mark icon)
const btn = document.getElementById('mybtn')
btn.onclick = function () {
  info.style.display = 'block'
}

// Close the Info Box when we click on the x
const close = document.getElementsByClassName('close')[0]
close.onclick = function () {
  info.style.display = 'none'
}

// Close the Info Box if we click anywhere else on the page
window.onclick = function (event) {
  if (event.target === info) {
    info.style.display = 'none'
  }
}
