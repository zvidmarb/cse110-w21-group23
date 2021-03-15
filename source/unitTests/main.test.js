beforeAll(() => {
  document.body.innerHTML = `
  <p id='counter'>Pomo: 1&frasl;4</p>
<h1 id='timer'>00:07</h1>
<button id='stop'>Start</button>
<h2 id="focus">Focus</h2>
<h2 id="relax">Relax</h2>
<i id="cogs" class="fas fa-cog"></i>
<div id="settings" class="hidden">
</div>
<i id="cogs" class="fas fa-cog"></i>
<div id="settings" class="hidden">
</div>
<audio id="phase-audio" volume=".30" style="display: none;"></audio>
`
  require('../js/main.js')
})

test('a lot of tests for main.js', (done) => {
  const { changeButtonText, enterPomo, enterShortBreak, enterLongBreak, addSetting } = require('../js/main')
  const focusing = document.getElementById('focus')
  const relaxing = document.getElementById('relax')
  // wait for 1.5 seconds for the timer to switch to short break
  enterShortBreak()
  setTimeout(() => {
    expect(focusing.style.color).toBe('rgba(250, 250, 242, 0.2)')
    // expect(relaxing.style.color).toBe("#fafaf2")
    done()
  }, 1500)

  // wait for 1.5 seconds for the timer to switch to pomo
  enterPomo()
  setTimeout(() => {
    expect(focusing.style.color).toBe('#fafaf2')
    expect(relaxing.style.color).toBe('rgba(250, 250, 242, 0.2)')
    done()
  }, 1500)

  // wait for 1.5 seconds for the timer to switch to long break
  enterLongBreak()
  setTimeout(() => {
    expect(focusing.style.color).toBe('rgba(250, 250, 242, 0.2)')
    expect(relaxing.style.color).toBe('#fafaf2')
    done()
  }, 1500)

  changeButtonText()
  changeButtonText()

  addSetting(
    'test_setting',
    'Unused',
    'Internal setting used for testing.',
    5,
    value => {
      testSetting = parseInt(value)
    }
  )
})