// main.js

const startButton = document.getElementById("stop");
const timer = document.getElementById("timer");
const counter = document.getElementById("counter");
let interval;

// These variables are currently hardcoded, will be changed later when the settings are done.
// keep track of the fraction
var pomoCount = 1;
var totalCount = 4;
var shortBreak = "00:02";
var longBreak = "00:05";
var pomo = timer.innerHTML;

startButton.onclick = function () {
  changeButtonText();
};

/**
 * Changes the text of the buttom from Start to Stop.
 */
function changeButtonText() {
  if (startButton.textContent === "Start") {
    startButton.textContent = "Stop";
    startTimer();
  } else {
    startButton.textContent = "Start";
    resetTimer();
  }
}

// some initial variables for convenience of future reference
var initTime;
var initMinute;
var initSecond;
var identifier = "pomo";

/**
 * Starts the timer.
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
  const difference = countDownTime - now;
  console.log(difference);

  // a bit of hardcode :<
  // notice that difference is always 0~9 smaller
  // ex. difference of 9000 becomes 8995.
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
    if (identifier == "pomo") {
      if (pomoCount == totalCount) {
        identifier = "long_break";
        enterLongBreak();
      } else {
        identifier = "short_break";
        // increment counter by 1

        enterShortBreak();
      }
    } else if (identifier == "short_break") {
      identifier = "pomo";
      pomoCount += 1;
      counter.innerHTML = `Pomo: ${pomoCount}&frasl;${totalCount}`;
      enterPomo(pomo);
    }
  }
}

/**
 * Resets Timer and Pomo Counter.
 */
function resetTimer() {
  timer.innerHTML = pomo;
  identifier = "pomo";
  pomoCount = 1;
  counter.innerHTML = `Pomo: ${pomoCount}&frasl;${totalCount}`;
  clearInterval(interval);
}

/**
 * Enter a short break.
 */
function enterShortBreak() {
  timer.innerHTML = shortBreak;
  startTimer();
}

/**
 * Enter a pomo.
 * Add a paramter for unit testing purpose
 */
function enterPomo(currPomo) {
  timer.innerHTML = currPomo;
  startTimer();
}

/**
 * Enter a long break.
 */
function enterLongBreak() {
  timer.innerHTML = longBreak;
  startTimer();
}

module.exports = enterPomo;
