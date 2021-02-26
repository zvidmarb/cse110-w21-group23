// main.js

const startButton = document.getElementById('stop')
const timer = document.getElementById('timer')
const counter = document.getElementById('counter')
let interval

// These variables are currently hardcoded, will be changed later when the settings are done.
// Super-linter forces them to be const... feel free to change them
let pomoCount = 1
const totalCount = 4
const shortBreak = '00:02'
const longBreak = '00:05'
const pomo = timer.innerHTML

startButton.onclick = function () {
  changeButtonText()
}

/**
 * Changes the text of the buttom from Start to Stop.
 */
function changeButtonText () {
  if (startButton.textContent === 'Start') {
    startButton.textContent = 'Stop'
    startTimer()
  } else {
    startButton.textContent = 'Start'
    resetTimer()
  }
}

// some initial variables for convenience of future reference
let initTime
let initMinute
let initSecond
let identifier = 'pomo'

/**
 * Starts the timer.
 */
function startTimer () {
  initTime = timer.innerHTML
  initMinute = parseInt(initTime.slice(0, 2))
  initSecond = parseInt(initTime.slice(3))

  const countDownTime =
    new Date().getTime() + initMinute * 60 * 1000 + initSecond * 1000
  interval = setInterval(countDown, 1000, countDownTime)
}

/**
 * Counts the timer down.
 * @param {number} countDownTime - The time we will count down.
 */
function countDown (countDownTime) {
  const now = new Date().getTime()
  const difference = countDownTime - now
  console.log(difference)

  // a bit of hardcode :<
  // notice that difference is always 0~9 smaller
  // ex. difference of 9000 becomes 8995.
  let minute = Math.floor(((difference + 500) % (1000 * 60 * 60)) / (1000 * 60))
  let second = Math.floor(((difference + 500) % (1000 * 60)) / 1000)

  // pad a '0' if turning into a single digit
  if (second < 10) {
    second = '0' + second.toString()
  }
  if (minute < 10) {
    minute = '0' + minute.toString()
  }
  timer.innerHTML = minute + ':' + second

  // if timer reaches 00:00
  if (minute === '00' && second === '00') {
    // stop timer
    clearInterval(interval)

    // check identifier
    if (identifier === 'pomo') {
      if (pomoCount === totalCount) {
        identifier = 'long_break'
        enterLongBreak()
      } else {
        identifier = 'short_break'
        enterShortBreak()
      }
    } else if (identifier === 'short_break') {
      identifier = 'pomo'
      // increment counter by 1
      pomoCount += 1
      counter.innerHTML = `Pomo: ${pomoCount}&frasl;${totalCount}`
      enterPomo()
    } else if (identifier === 'long_break') {
      // TODO: only go over the estimated pomo if task is not finished?
      identifier = 'pomo'
      pomoCount = 1 // reset timer
      counter.innerHTML = `Pomo: ${pomoCount}&frasl;${totalCount}`
      // TODO: when moving on to the next task, change the color back to white
      enterPomo()
    }
  }
}

/**
 * Resets Timer and Pomo Counter.
 */
function resetTimer () {
  timer.innerHTML = pomo
  identifier = 'pomo'
  pomoCount = 1
  counter.innerHTML = `Pomo: ${pomoCount}&frasl;${totalCount}`
  clearInterval(interval)
}

/**
 * Enter a short break.
 */
function enterShortBreak () {
  makeZero()
  setTimeout(() => {
    timer.innerHTML = shortBreak
    startButton.textContent = 'Start'
  }, 1000)
}

/**
 * Enter a pomo.
 */
function enterPomo () {
  makeZero()
  setTimeout(() => {
    timer.innerHTML = pomo
    startButton.textContent = 'Start'
  }, 1000)
}

/**
 * Enter a long break.
 */
function enterLongBreak () {
  makeZero()
  setTimeout(() => {
    timer.innerHTML = longBreak
    startButton.textContent = 'Start'
  }, 1000)
}

/**
 * Make the timer to be 00:00
 */
function makeZero () {
  timer.innerHTML = '00:00'
}

return 
// module.exports = enterPomo;
