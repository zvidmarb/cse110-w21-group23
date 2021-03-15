// Testing out code
// Get the info box
const info = document.getElementById('info')

// Open info box when the question mark is clicked
// (We need to set this up with our question mark icon)
const btn = document.getElementById('info-button')

/**
 * Open info box when the question mark is clicked
 * @return void
 */
btn.onclick = function () {
  info.style.display = 'block'
}

// Close the Info Box when we click on the x
const close = document.getElementById('infoClose')

/**
 * Close the Info Box when we click on the x
 * @return void
 */
close.onclick = function () {
  info.style.display = 'none'
}

/**
 *  Close the Info Box if we click anywhere else on the page
 *  @return void
 */
window.onclick = function (event) {
  if (event.target === info) {
    info.style.display = 'none'
  }
}
