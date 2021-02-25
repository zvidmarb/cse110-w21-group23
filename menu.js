
/* Menu js */

function openNav () {
  document.getElementById('side-task').style.width = '350px'
}

function closeNav () {
  document.getElementById('side-task').style.width = '0'
}

/*Testing out code */

// Get the info box
let info = document.getElementById('info')

// Open info box when the question mark is clicked
// (We need to set this up with our question mark icon)
let btn = document.getElementById('mybtn')
btn.onclick = function () {
  info.style.display = 'block'
}

// Close the Info Box when we click on the x
let close = document.getElementsByClassName('close')[0]
close.onclick = function () {
  info.style.display = 'none'
}

// Close the Info Box if we click anywhere else on the page
window.onclick = function (event) {
  if (event.target === info) {
    info.style.display = 'none'
  }
}
