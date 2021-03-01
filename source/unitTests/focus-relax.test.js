const enterShortBreak = require("../main");
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
jest
    .dontMock('fs');

beforeAll(() => {
    document.body.innerHTML = `
    <p id='counter'>Pomo: 1&frasl;4</p>
  <h1 id='timer'>00:07</h1>
  <button id='stop'>Start</button>
  <h2 id="focus">Focus</h2>
  <h2 id="relax">Relax</h2>
  `
    require('../main.js')
})

test('Displays relaxing during short break', () => {
    enterShortBreak()
    expect(document.getElementById('focus').style.color).toBe('rgba(250, 250, 242, 0.2)')
    expect(document.getElementById('relax').style.color).toBe('#fafaf2')
})