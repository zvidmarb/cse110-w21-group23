// main.js

const startButton = document.getElementById('stop')
const timer = document.getElementById('timer')
const counter = document.getElementById('counter')
const settingsButton = document.getElementById('settingsButton')
const settingsMenu = document.getElementById('settings')
let settings = {}
let interval

startButton.onclick = function () {
  changeButtonText()
}

settingsButton.onclick = function () {
  settingsMenu.classList.toggle("hidden")
  resetTimer()
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
let initMinute = 25
const initCounter = counter.innerHTML

/**
 * Starts the timer.
 */
function startTimer () {
  // Close the settings menu if you try to start the timer
  if (!settingsMenu.classList.contains("hidden")) {
    settingsMenu.classList.toggle("hidden")
  }
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
  const difference = countDownTime - now
  console.log(difference)

  // a bit of hardcode :<
  // notice that difference is always 0~9 smaller
  // ex. difference of 9000 becomes 8995.
  let minute = Math.floor(((difference + 10) % (1000 * 60 * 60)) / (1000 * 60))
  let second = Math.floor(((difference + 10) % (1000 * 60)) / 1000)

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

    // increment counter by 1
    const prevCount = parseInt(counter.innerHTML.slice(0, 1))
    counter.innerHTML = prevCount + 1 + counter.innerHTML.slice(1)

    // TODO: if prevCount > total_count: change color of the task color

    // TODO: enter a short break

    // TODO: play a sound
  }
}

/**
 * Resets Timer and Pomo Counter.
 */
function resetTimer () {
  timer.innerHTML = initMinute + ':00'
  counter.innerHTML = initCounter
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
  label.setAttribute('class', 'setting-label')
  label.textContent = title
  let input = document.createElement("input")
  input.setAttribute('type', 'number')
  input.setAttribute('class', 'setting-input')
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
    "pomo_duration", 
    "Length of work stage:",
    "The duration each individual Pomo should be, in minutes.",
    25,
    value => {
      console.log(value)
      initMinute = value
    }
  )
  addSetting(
    "break_short_duration",
    "Length of short break:",
    "How long each individual Short Break should be, in minutes.",
    5,
    value => {
      console.log(value)
    }
  )
  addSetting(
    "break_long_duration",
    "Length of long break:",
    "The duration each individual Long Break should be, in minutes.",
    30,
    value => {
      console.log(value)
    }
  )
  addSetting(
    "pomos_before_long_break",
    "Stages until long break:",
    "The number of pomos that should be completed before a long break occurs.",
    4,
    value => {
      console.log(value)
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