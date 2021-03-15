document.body.innerHTML = `
  <p id='counter'>Pomo: 1&frasl;4</p>
  <h1 id='timer'>00:07</h1>
  <button id="stop">Start</button>
  <h2 id="focus">Focus</h2>
  <h2 id="relax">Relax</h2>
  <i id="cogs" class="fas fa-cog"></i>
  <div id="settings" class="hidden">
  </div>
  <i id="cogs" class="fas fa-cog"></i>
  <div id="settings" class="hidden">
  </div>
  `

beforeEach(() => {
  require('../js/main.js')
})

describe('Unit tests to ensure settings functionality.', () => {
  test('Make sure the settings menu opens/closes on click', () => {
    const { _, _, _, addSetting } = require('../js/main')
    // Get our settings box
    const settingsMenu = document.getElementById('settings')
    const settingsButton = document.getElementById('cogs')

    // Should start hidden
    expect(settingsMenu.classList.contains('hidden')).toBeTruthy()

    // Click the button
    settingsButton.click()

    // Should be shown now
    setTimeout(() => {
      expect(settingsMenu.classList.contains('hidden')).toBeFalsy()
    }, 1000)
  })

  test('Ensure addSetting properly functions', () => {
    const { _, _, _, addSetting } = require('../js/main')
    // Setting value for testing
    let testSetting

    // See if we can add a setting
    addSetting(
      'test_setting',
      'Unused',
      'Internal setting used for testing.',
      5,
      value => {
        testSetting = parseInt(value)
      }
    )

    // Ensure the default is kept properly
    expect(testSetting).toBe(5)

    // Ensure we call the callback when the setting changes
    const testSettingInput = document.getElementById('test_setting')
    testSettingInput.value = 9
    testSettingInput.onchange()

    expect(testSetting).toBe(9)
  })
})
