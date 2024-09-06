/// <reference types="cypress" />


describe('Waits', () =>{

    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

    it('use find', () =>{
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain','Item 1')

        cy.get('#lista li')
        .should('contain','Item 2')
        })
    it('Use timeout default', () =>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
    })

    it('reach a element that demant more than timeout default', () =>{
        cy.get('#buttonListDOM').click()
        //cy.wait(1000)  - not use this way because this will demand all time set.
        //to show this element the system demand at leat 6 seconds
        cy.get('#lista li span', {timeout:10000}) 
            .should('have.length', 2)
            .should('contain','Item 2')

            /*cy.get('#lista li span')
            .should('have.length', 2)*/
    })

    it.only('should vs then', () =>{

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').should($el =>{
            console.log($el)
            expect($el).to.have.length(1)
        })
        // .then()  is executed just when /get() is solved
        cy.reload()
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el =>{
            //console.log($el)
            expect($el).to.have.length(1)
            // try get a element out this sub-yield just is possible using .then()
            cy.get('#buttonDelay')
            
        }).and('not.have.id', '#buttonListDOM')
    })
})