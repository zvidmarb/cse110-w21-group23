

describe('Test if block active when it is clicked', () => {
    test('Click is working', () => { 
        btn.click()
        expect(info.style.display).toBe('block')
    })
})