/// <reference types="Cypress" />

describe('Cypress basiics', () => {
    it('should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
          .title()
             .should('be.equal', 'Campo de Treinamento')
             .should('contain', 'Campo')
             .and('contain', 'Treinamento')
        
    })

    it('should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click()
        cy.get('#buttonSimple').should('have.value','Obrigado!')
    })

    // use it.only
    it('should stop the test on debug command', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
          .title().debug()
             .should('be.equal', 'Campo de Treinamento')
             .should('contain', 'Campo')
             .and('contain', 'Treinamento').debug()
    })
    
    // use it.only
    it('should stop the test on pause command', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.pause()
          cy.title()
             .should('be.equal', 'Campo de Treinamento')
             .should('contain', 'Campo')
             .and('contain', 'Treinamento')
    })
})

