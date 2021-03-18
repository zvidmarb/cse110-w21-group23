beforeAll(() => {
  document.body.innerHTML = `
    <audio id="phase-audio" volume=".30" style="display: none;"></audio>
  `
})
  
describe('Ensure audio properly plays', () => {
  test('Click is working', () => {
    const { changeButtonText, enterPomo, enterShortBreak, enterLongBreak, addSetting, playSound } = require('../js/main.js')
    const audio = document.getElementById('phase-audio')
    const pauseFake = jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(() => {})
    
    // Check pomo sound
    playSound('pomo')
    expect(audio.getAttribute('src')).toBe('sound/8-startup-sound.mp3')
    expect(pauseFake).toHaveBeenCalled()

    // Check short break sound
    playSound('short_break')
    expect(audio.getAttribute('src')).toBe('sound/naomi-boot-clip.mp3')
    expect(pauseFake).toHaveBeenCalled()

    // Check long_break sound
    playSound('long_break')
    expect(audio.getAttribute('src')).toBe('sound/big-dipper.mp3')
    expect(pauseFake).toHaveBeenCalled()
  })
})
  