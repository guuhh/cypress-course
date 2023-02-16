/// <reference types="cypress" />

describe('Work with basic elements', () =>{

    //Hooks - Run one time before to all tests
    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

    //Hooks - Run each time before to tests

    it('Text', () =>{
        //cy.visit('https://wcaquino.me/cypress/componentes.html') // removed because the before (hooks)
        cy.get('body').should('contain', 'Cuidado') // 'contain' is flexible
        //cy.get('body').should('have.text', 'Cuidado') // 'have.text' is not flexible, should be exactly value
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', ()=>{
        //cy.visit('https://wcaquino.me/cypress/componentes.html') // removed because the before (hooks)
        cy.get('#resultado').should('have.text','Status: Nao cadastrado')
        cy.get('a[href="#"]').click() // get with a[href=""]
        cy.get('#resultado').should('have.not.text','Status: Nao cadastrado')
        cy.get('#resultado').should('have.text','Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.text','Status: Nao cadastrado')
        cy.contains('Voltar').click() // contains with Text value on link
        cy.get('#resultado').should('have.not.text','Status: Nao cadastrado')
        cy.get('#resultado').should('have.text','Voltou!')


    })
})

//A new describe structure does not inherit "before" and "beforeEach" from another one.
describe('Work with basic elements 2', () =>{
    before(() =>{
        cy.visit('https://wcaquino.me/cypress/frame.html')
    })

     it('externo', ()=>{

     })
})