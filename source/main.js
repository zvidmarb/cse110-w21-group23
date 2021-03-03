// main.js

const startButton = document.getElementById('stop')
const timer = document.getElementById('timer')
const counter = document.getElementById('counter')
const settingsButton = document.getElementById('settingsButton')
const settingsMenu = document.getElementById('settings')

let settings = {}
let interval // used for counting down the timer
let pomoCount = 1

// All of these are going to be updated by the settings! If you want to change their default values, check window.onload and update the settings' defaults
let totalCount
let shortBreak
let longBreak
let pomo

startButton.onclick = function () {
  changeButtonText()
}

settingsButton.onclick = function () {
  settingsMenu.classList.toggle("hidden")
  resetTimer()
}

/**
 * Change the button text between Start/Stop
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

// some initial variables declaration for convenience of future reference
let initTime = "25:00"
let initMinute
let initSecond
let identifier = 'pomo'

/**
 * Grab the time from the timer and start to count down.
 */
function startTimer () {
  // Close the settings menu if you try to start the timer
  if (!settingsMenu.classList.contains("hidden")) {
    settingsMenu.classList.toggle("hidden")
  }

  switch(identifier) {
    case 'pomo':
      initTime = pomo;
      break;
    case 'short_break':
      initTime = shortBreak;
      break;
    case 'long_break':
      initTime = LongBreak;
      break;
  }
  initMinute = parseInt(initTime.slice(0, 2))
  initSecond = parseInt(initTime.slice(3))
  

  const countDownTime =
    new Date().getTime() + initMinute * 60 * 1000
  interval = setInterval(countDown, 1000, countDownTime)
}

/**
 * Counts the timer down.
 * @param {number} countDownTime - The time we will count down.
 */
function countDown (countDownTime) {
  const now = new Date().getTime()
  const difference = countDownTime - now // countDownTime is the time in the future
  console.log(difference) // log the current difference

  // a bit of hardcode :<
  // notice that most of the time the difference is 0~9ms smaller
  // ex. difference of 9000ms becomes 8995ms. This can be seen in the log.
  // Sometime javascipts goes crazy and 9000ms might become 8480ms...
  // So you might see the timer skip numbers...
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
      console.log(pomoCount, totalCount)
      // Internally, we increment here. We don't show this until the break is over, though.
      pomoCount += 1
      if (pomoCount-1 === totalCount) {
        identifier = 'long_break'
        enterLongBreak()
      } else {
        identifier = 'short_break'
        enterShortBreak()
      }
    } else if (identifier === 'short_break') {
      identifier = 'pomo'
      // increment counter by 1 after short break
      counter.innerHTML = `Pomo: ${pomoCount}&frasl;${totalCount}`
      enterPomo()
    } else if (identifier === 'long_break') {
      identifier = 'pomo'
      pomoCount = 1 // reset pomo after long break
      counter.innerHTML = `Pomo: ${pomoCount}&frasl;${totalCount}`
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
  enterPomo()
  clearInterval(interval)
}

/**
 * Adds a setting to the Pomo app
 * @param {string} name - The internal name of the setting
 * @param {string} title - The shown title of the setting
 * @param {string} desc - The longer description of the setting
 * @param {*} def - The default value of the setting
 */
function addSetting (name, title, desc, def, cb) {
  // Add the setting to our list, and set it to default
  settings[name] = def

  // Create the HTML
  let label = document.createElement("label")
  label.setAttribute('for', name)
  label.textContent = title
  let input = document.createElement("input")
  input.setAttribute('type', 'number')
  input.setAttribute('id', name)
  input.setAttribute('name', name)
  settingsMenu.appendChild(label)
  settingsMenu.appendChild(input)

  // Create event listener
  input.onchange = function (event) {
    const newValue = input.value
    settings[name] = newValue
    window.localStorage.setItem(name, newValue)
    cb(newValue)
    resetTimer()
  }
}

window.onload = function () {
  // Settings
  addSetting(
    "pomos_before_long_break",
    "Pomos before long break",
    "The number of pomos that should be completed before a long break occurs.",
    4,
    value => {
      console.log(value)
      totalCount = parseInt(value)
    }
  )
  addSetting(
    "pomo_duration", 
    "Pomo duration",
    "The duration each individual Pomo should be, in minutes.",
    25,
    value => {
      console.log(value)
      pomo = value + ":00"
    }
  )
  addSetting(
    "break_short_duration",
    "Short break duration",
    "How long each individual Short Break should be, in minutes.",
    5,
    value => {
      console.log(value)
      shortBreak = value + ":00"
    }
  )
  addSetting(
    "break_long_duration",
    "Long break duration",
    "The duration each individual Long Break should be, in minutes.",
    30,
    value => {
      console.log(value)
      longBreak = value + ":00"
    }
  )


  // Load default settings
  for (const setting in settings) {
    const curValue = settings[setting]
    const settingStore = window.localStorage.getItem(setting)
    if (settingStore == null) {
      window.localStorage.setItem(setting, curValue)
    } else {
      settings[setting] = window.localStorage.getItem(setting)
    }

    document.getElementById(setting).setAttribute('value', settings[setting])
    document.getElementById(setting).onchange()
  }

  resetTimer()
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

// module.exports = enterPomo;
