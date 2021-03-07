// main.js

const startButton = document.getElementById("stop");
const timer = document.getElementById("timer");
const counter = document.getElementById("counter");
const focusing = document.getElementById("focus");
const relaxing = document.getElementById("relax");
let interval; // used for counting down the timer

// These variables are currently hardcoded, will be changed later when the settings are done.
// Super-linter forces them to be const... feel free to change them later
let pomoCount = 1;
const totalCount = 4;
const shortBreak = "00:02";
const longBreak = "00:05";
const pomo = timer.innerHTML; // this comes directly from the html file

startButton.onclick = function () {
  changeButtonText();
};

/**
 * Change the button text between Start/Stop
 */
<<<<<<< HEAD
function changeButtonText () {
  if (startButton.textContent === 'Start') {
    startButton.textContent = 'Stop'
    startTimer()
=======
function changeButtonText() {
  if (startButton.textContent === "Start") {
    startButton.textContent = "Stop";
    startTimer();
>>>>>>> ed0aa809c77eabe1b8bb2cd7fe5ab2a7dd2505d3
  } else {
    startButton.textContent = "Start";
    resetTimer();
  }
}

// some initial variables declaration for convenience of future reference
let initTime
let initMinute
let initSecond
let identifier = 'pomo' // default identifier as 'pomo'

/**
 * Grab the time from the timer and start to count down.
 */
function startTimer() {
  initTime = timer.innerHTML;
  initMinute = parseInt(initTime.slice(0, 2));
  initSecond = parseInt(initTime.slice(3));

  const countDownTime =
    new Date().getTime() + initMinute * 60 * 1000 + initSecond * 1000;
  interval = setInterval(countDown, 1000, countDownTime);
}

/**
 * Counts the timer down.
 * @param {number} countDownTime - The time we will count down.
 */
function countDown(countDownTime) {
  const now = new Date().getTime();
  const difference = countDownTime - now; // countDownTime is the time in the future
  console.log(difference); // log the current difference

  // a bit of hardcode :<
  // notice that most of the time the difference is 0~9ms smaller
  // ex. difference of 9000ms becomes 8995ms. This can be seen in the log.
  // Sometime javascipts goes crazy and 9000ms might become 8480ms...
  // So you might see the timer skip numbers...
  let minute = Math.floor(
    ((difference + 500) % (1000 * 60 * 60)) / (1000 * 60)
  );
  let second = Math.floor(((difference + 500) % (1000 * 60)) / 1000);

  // pad a '0' if turning into a single digit
  if (second < 10) {
    second = "0" + second.toString();
  }
  if (minute < 10) {
    minute = "0" + minute.toString();
  }
  timer.innerHTML = minute + ":" + second;

  // if timer reaches 00:00
  if (minute === "00" && second === "00") {
    // stop timer
    clearInterval(interval);

    // check identifier
    if (identifier === "pomo") {
      if (pomoCount === totalCount) {
        identifier = "long_break";
        enterLongBreak();
      } else {
        identifier = "short_break";
        enterShortBreak();
      }
    } else if (identifier === 'short_break' || identifier === 'long_break') {
      enterPomo()
    } 
  }
}

/**
 * Resets Timer and Pomo Counter.
 */
<<<<<<< HEAD
function resetTimer () {
  timer.innerHTML = pomo
  identifier = 'pomo'
  pomoCount = 1
  counter.innerHTML = `Pomo: ${pomoCount}&frasl;${totalCount}`
  focusing.style.color = '#fafaf2'
  relaxing.style.color = 'rgba(250, 250, 242, 0.2)'
  clearInterval(interval)
=======
function resetTimer() {
  focusing.style.color = "#fafaf2";
  relaxing.style.color = "rgba(250, 250, 242, 0.2)";
  timer.innerHTML = pomo;
  identifier = "pomo";
  pomoCount = 1;
  counter.innerHTML = `Pomo: ${pomoCount}&frasl;${totalCount}`;
  clearInterval(interval);
>>>>>>> ed0aa809c77eabe1b8bb2cd7fe5ab2a7dd2505d3
}

/**
 * Enter a short break.
 */
function enterShortBreak() {
  makeZero();
  setTimeout(() => {
<<<<<<< HEAD
    timer.innerHTML = shortBreak
    startButton.textContent = 'Start'
    focusing.style.color = 'rgba(250, 250, 242, 0.2)'
    relaxing.style.color = '#fafaf2'
  }, 1000)
=======
    timer.innerHTML = shortBreak;
    startButton.textContent = "Start";
    focusing.style.color = "rgba(250, 250, 242, 0.2)";
    relaxing.style.color = "#fafaf2";
  }, 1000);
>>>>>>> ed0aa809c77eabe1b8bb2cd7fe5ab2a7dd2505d3
}

/**
 * Enter a pomo.
 */
function enterPomo() {
  makeZero();
  setTimeout(() => {
    timer.innerHTML = pomo
    startButton.textContent = 'Start'
<<<<<<< HEAD
    focusing.style.color = '#fafaf2'
    relaxing.style.color = 'rgba(250, 250, 242, 0.2)'
  }, 1000)
=======

    if (identifier === 'short_break') {
      // increment counter by 1 after short break
      pomoCount += 1
    } else if (identifier === 'long_break') {
      // reset pomo counter after long break
      pomoCount = 1 
    }
    counter.innerHTML = `Pomo: ${pomoCount}&frasl;${totalCount}`
    identifier = 'pomo'

    timer.innerHTML = pomo;
    startButton.textContent = "Start";
    focusing.style.color = "#fafaf2";
    relaxing.style.color = "rgba(250, 250, 242, 0.2)";
  }, 1000);
>>>>>>> ed0aa809c77eabe1b8bb2cd7fe5ab2a7dd2505d3
}

/**
 * Enter a long break.
 */
function enterLongBreak() {
  makeZero();
  setTimeout(() => {
<<<<<<< HEAD
    timer.innerHTML = longBreak
    startButton.textContent = 'Start'
    focusing.style.color = 'rgba(250, 250, 242, 0.2)'
    relaxing.style.color = '#fafaf2'
  }, 1000)
=======
    timer.innerHTML = longBreak;
    startButton.textContent = "Start";
    focusing.style.color = "rgba(250, 250, 242, 0.2)";
    relaxing.style.color = "#fafaf2";
  }, 1000);
>>>>>>> ed0aa809c77eabe1b8bb2cd7fe5ab2a7dd2505d3
}

/**
 * Make the timer to be 00:00
 */
function makeZero() {
  timer.innerHTML = "00:00";
}

// module.exports = enterPomo;
module.exports = enterShortBreak;
