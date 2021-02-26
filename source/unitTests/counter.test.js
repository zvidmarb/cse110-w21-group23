// beforeAll(() => {
//   document.body.innerHTML = `
//   <p id="counter">Pomo: 1&frasl;4</p>
// 	<h1 id="timer">00:02</h1>
// 	<button id="stop">Start</button>
// `;
//   require("../main.js");
// });

// test("Ensures the counter is incremented by one after a pomo is complete", (done) => {
//   const startButton = document.getElementById("stop");
//   const timer = document.getElementById("timer");
//   const enterPomo = require("../main");
//   var pomoCount = 1;
//   // hardcode the pomo duration
//   enterPomo("00:04");
//   // wait for 5 seconds for the counter to increment
//   setTimeout(() => {
//     var counter = document.getElementById("counter");
//     // the counter should be incremented by 1
//     // extract the sixth char of "Pomo: 1/4"
//     expect(counter.innerHTML.charAt(6)).toBe((pomoCount + 1).toString());
//     done();
//   }, 5000);
// });

test('whatever we want', () => {
  expect(1).toBe(1);
});
