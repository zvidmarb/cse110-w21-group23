document.body.innerHTML = `
  <p id='counter'>Pomo: 1&frasl;4</p>
  <h1 id='timer'>25:00</h1>
  <button id="stop">Start</button>
  <h2 id="focus">Focus</h2>
  <h2 id="relax">Relax</h2>
  <i id="cogs" class="fas fa-cog"></i>
  <audio id="phase-audio" volume=".30" style="display: none;"></audio>
  <div id="settings" class="hidden">
  </div>
  <i id="cogs" class="fas fa-cog"></i>
  <div id="settings" class="hidden">
  </div>
`

test('Ensure when start/stop is pressed, text switches to the opposite', () => {
  const { changeButtonText } = require('../js/main')
  const startButton = document.getElementById('stop')
  // Sanity check:
  expect(startButton.textContent).toBe('Start')

  // check the onclick event (window.onload might not add onclick event listener in jsdocs)
  changeButtonText()
  expect(startButton.textContent).toBe('Stop')

  changeButtonText()
  expect(startButton.textContent).toBe('Start')
})

// test('Ensure when stop is pressed, the timer is reset to the max time', () => {
//   const { changeButtonText } = require('../js/main')
//   const maxTime = document.getElementById('timer').innerHTML // the max starting time
//   const timer = document.getElementById('timer')
//   jest.useFakeTimers()

//   //start timer
//   changeButtonText()
//   jest.advanceTimersByTime(1000); 
//   expect(timer.innerHTML).not.toBe(maxTime)

//   changeButtonText()
//   console.log(timer.innerHTML)
//   console.log(maxTime);
//   expect(timer.innerHTML).toBe(maxTime)
// })