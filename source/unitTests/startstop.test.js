beforeAll(() => {
  document.body.innerHTML = `
  <p id='counter'>Pomo: 1&frasl;4</p>
  <h1 id='timer'>00:07</h1>
  <button id="stop">Start</button>
  <h2 id="focus">Focus</h2>
  <h2 id="relax">Relax</h2>
  <i id="cogs" class="fas fa-cog"></i>
  <div id="settings" class="hidden">
  </div>
  <i id="cogs" class="fas fa-cog"></i>
  <div id="settings" class="hidden">
  </div>
`
  require('../main.js')
})

test('Ensure when start/stop is pressed, text switches to the opposite', () => {
  const startButton = document.getElementById('stop')
  // Sanity check:
  expect(startButton.textContent).toBe('Start')

  // check the onclick event
  startButton.click()
  expect(startButton.textContent).toBe('Stop')
  startButton.click()
  expect(startButton.textContent).toBe('Start')
})

test('Ensure when stop is pressed, the timer is reset to the max time', (done) => {
  const startButton = document.getElementById('stop')
  const maxTime = document.getElementById('timer').innerHTML // the max/starting time

  // check the onclick event
  // click start
  startButton.click()
  // console.log('start is pressed')
  expect(startButton.textContent).toBe('Stop')

  // wait for 2 seconds for the timer to change text
  setTimeout(() => {
    const timer = document.getElementById('timer')
    // the timer should be changed
    expect(timer.innerHTML).not.toBe(maxTime)

    // click stop
    startButton.click()
    // console.log('stop is pressed')
    expect(startButton.textContent).toBe('Start')
    // the timer should be reset
    expect(timer.innerHTML).toBe(maxTime)
    done()
  }, 2000)
})
