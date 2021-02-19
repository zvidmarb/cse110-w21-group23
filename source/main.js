// main.js

let startButton = document.getElementById('stop');
let timer = document.getElementById('timer');
let counter = document.getElementById('counter');
let interval;

startButton.onclick = function () {
  changeButtonText();
};

/**
 * Changes the text of the buttom from Start to Stop.
 */
function changeButtonText() {
  if (startButton.textContent === 'Start') {
    startButton.textContent = 'Stop';
    startTimer();
  } else {
    startButton.textContent = 'Start';
    resetTimer();
  }
}

// some initial variables; for convenience of future reference
let initTime = timer.innerHTML;
let initMinute = parseInt(initTime.slice(0, 2));
let initSecond = parseInt(initTime.slice(3));
let initCounter = counter.innerHTML;

/**
 * Starts the timer.
 */
function startTimer() {
  const countDownTime =
    new Date().getTime() + initMinute * 60 * 1000 + initSecond * 1000;
  interval = setInterval(countDown, 1000, countDownTime);
}

/**
 * Counts the timer down.
 * @param {number} countDownTime - The time we will count down.
 */
function countDown(countDownTime) {
  let now = new Date().getTime();
  let difference = countDownTime - now;
  console.log(difference);

  // a bit of hardcode :<
  // notice that difference is always 0~9 smaller
  // ex. difference of 9000 becomes 8995.
  let minute = Math.floor(((difference + 10) % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor(((difference + 10) % (1000 * 60)) / 1000);

  // pad a '0' if turning into a single digit
  if (second < 10) {
    second = '0' + second.toString();
  }
  if (minute < 10) {
    minute = '0' + minute.toString();
  }
  timer.innerHTML = minute + ':' + second;

  // if timer reaches 00:00
  if (minute === '00' && second === '00') {
    // stop timer
    clearInterval(interval);

    // increment counter by 1
    let prev_count = parseInt(counter.innerHTML.slice(0, 1));
    counter.innerHTML = prev_count + 1 + counter.innerHTML.slice(1);

    // TODO: if prev_count > total_count: change color of the task color

    // TODO: enter a short break

    // TODO: play a sound
  }
}

/**
 * Resets Timer and Pomo Counter.
 */
function resetTimer() {
  timer.innerHTML = initTime;
  counter.innerHTML = initCounter;
  clearInterval(interval);
}
