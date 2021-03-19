describe("Start/stop button Tests", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/source");
  });

  it("Start switches to stops", () => {
    cy.get('#stop').invoke('text').then((text1) => {
      expect(text1).to.eq('Start')

      // click the button which changes the button's text to 'Stop'
      cy.get('#stop').click()
    
      // to the current text
      cy.get('#stop').invoke('text').should((text2) => {
        expect(text1).not.to.eq(text2)
        expect(text2).to.eq('Stop')
      })

      // click the button which changes the button's text to 'Start'
      cy.get('#stop').click()
    
      // to the current text
      cy.get('#stop').invoke('text').should((text3) => {
        expect(text3).to.eq(text1)
        expect(text3).to.eq('Start')
      })
    })
  });

})