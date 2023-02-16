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
    it.only('TextFields', ()=>{
        cy.get('input#formNome').type('Cypress test')
        cy.get('input#formNome').should('have.value','Cypress test')


        cy.get('textarea#elementosForm\\:sugestoes')
        .type('textarea')
        .should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > tbody > tr:nth-child(1) > td:nth-child(6) > input[type=text]')
        .type('????')

        cy.get('[data-cy=dataSobrenome]')
        .type('Test12345{backspace}{backspace}')
        .should('have.value', 'Test123')

       /* Available sequences are: 
       selectAll, moveToStart, moveToEnd, del, backspace, esc, enter, 
       rightArrow, leftArrow, upArrow, downArrow, 
       home, end, insert, pageUp, pageDown, 
       {, alt, option, ctrl, control, meta, 
       command, cmd, shift */

        cy.get('textarea#elementosForm\\:sugestoes')
        .clear()
        .type('Erro{selectall}Acerto', {delay:100})
        .should('have.value', 'Acerto')
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