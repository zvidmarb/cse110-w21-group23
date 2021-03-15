beforeAll(() => {
  document.body.innerHTML = `
    <p id='counter'>Pomo: 1&frasl;4</p>
    <h1 id='timer'>00:07</h1>
    <button id='stop'>Start</button>
    <i id="info-button" class="fas fa-question"></i>
    <div id="info" class="info-box">
      <div class="info-content">
        <span id="infoClose" class="close">&times;</span>
        <h2>How to use the app!</h2>
        <p>Something something something lorem ipsem.</p>
      </div>
    </div>
`
  require('../js/infobox.js')
})

describe('Test if block active when it is clicked', () => {
  test('Click is working', () => {
    const btn = document.getElementById('info-button')
    const info = document.getElementById('info')
    const close = document.getElementById('infoClose')
    btn.click()
    expect(info.style.display).toBe('block')
    close.click()
    expect(info.style.display).toBe('none')
    btn.click()
    expect(info.style.display).toBe('block')
  })
})
