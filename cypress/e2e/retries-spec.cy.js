/// <reference types="cypress" />

describe('Esperas...', () =>{

    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

    it('Should wait the element is availiable on screen', ()=>{
        cy.get('#novoCampo').should('not.exist')
         cy.get('#buttonDelay').click()
         cy.get('#novoCampo').should('not.exist') // as soon as click on button, element still not appear
         cy.get('#novoCampo').should('exist') // after a time, the element appear
         cy.get('#novoCampo').type(' it works!')
    })

    it.skip('Should to do retries...', ()=>{
         cy.get('#buttonDelay').click()
         cy.get('#novoCampo')
         .should('not.exist') // expected <input#novoCampo> not to exist in the DOM, this is displayed because the element aleady exist on DOM
         .should('exist') // expected null to exist, in most case, should() is able to return a different object.
    })

    it('Use find...', ()=>{
        cy.get('#buttonList').click()
        cy.get('#lista li')
        .find('span')
        .should('contain', 'Item 1')

        //Como o Item 2 demora mais alguns segundos para aparecer durante a execução, temos que procurar o elemento novamente
        cy.get('#lista li span')
        .should('contain', 'Item 2')
   })
})