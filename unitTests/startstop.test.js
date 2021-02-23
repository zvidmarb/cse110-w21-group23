beforeAll(() => {
  document.body.innerHTML = `
  <p id="counter">Pomo: 1&frasl;4</p>
	<h1 id="timer">00:07</h1>
	<button id="stop">Start</button>
`;
  require("../main.js");
});

test("Ensure when start/stop is pressed, text switches to the opposite", () => {
  const startButton = document.getElementById("stop");
  // Sanity check:
  expect(startButton.textContent).toBe("Start");

  // check the onclick event
  startButton.click();
  expect(startButton.textContent).toBe("Stop");
  startButton.click();
  expect(startButton.textContent).toBe("Start");
});

test("Ensure when stop is pressed, the timer is reset to the max time", (done) => {
  const startButton = document.getElementById("stop");
  const max_time = document.getElementById("timer").innerHTML; // the max/starting time

  // check the onclick event
  // click start
  startButton.click();
  // console.log("start is pressed");
  expect(startButton.textContent).toBe("Stop");

  // wait for 2 seconds for the timer to change text
  setTimeout(() => {
    var timer = document.getElementById("timer");
    // the timer should be changed
    expect(timer.innerHTML).not.toBe(max_time);

    // click stop
    startButton.click();
    // console.log("stop is pressed");
    expect(startButton.textContent).toBe("Start");
    // the timer should be reset
    expect(timer.innerHTML).toBe(max_time);
    done();
  }, 2000);
});
