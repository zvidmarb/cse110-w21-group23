const addSetting = require('../main.js')

beforeAll(() => {
  document.body.innerHTML = `
    <i id="cogs" class="fas fa-cog"></i>
    <div id="settings" class="hidden">
    </div>
    <p id='counter'>Pomo: 1&frasl;4</p>
    <h1 id='timer'>00:07</h1>
    <button id="stop">Start</button>
    <h2 id="focus">Focus</h2>
    <h2 id="relax">Relax</h2>
  `

  require('../main.js')
})

describe('Unit tests to ensure settings functionality.', () => {
  test('Make sure the settings menu opens/closes on click', () => {
    // Get our settings box
    const settingsMenu = document.getElementById('settings')
    const settingsButton = document.getElementById('cogs')

    // Should start hidden
    expect(settingsMenu.classList.contains('hidden')).toBeTruthy()

    // Click the button
    settingsButton.click()

    // Should be shown now
    expect(settingsMenu.classList.contains('hidden')).toBeFalsy()
  })

  test('Ensure addSetting properly functions', () => {
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
    testSettingInput.val(9)
    testSettingInput.trigger('change')

    expect(testSetting).toBe(9)
  })
})
