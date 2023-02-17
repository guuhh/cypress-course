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
    it('TextFields', ()=>{
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

    it('RadioButton', ()=>{
        cy.get('#formSexoFem')
        .click()
        .should('be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')

        cy.get('[name=formSexo]').should('have.length', 2)
    })

    it('CheckBox', ()=>{
        // check the exact quantity of element which use this name attribute.
        cy.get('[name=formComidaFavorita]').should('have.length', 4)

        cy.get('#formComidaFrango')
        .click()
        .should('be.checked')

        cy.get('[name="formComidaFavorita"]').click({multiple: true})
        // after multiple select, just frango wont selected
        cy.get('#formComidaFrango').should('not.be.checked')

        // all checkbox options will be selected
        cy.get('#formComidaCarne').should('be.checked')
        cy.get('#formComidaPizza').should('be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    })

    it('Combo', ()=>{
        cy.get('[data-test=dataEscolaridade]')
        .select('2o grau completo')
        .should('have.value', '2graucomp')

        cy.get('[data-test=dataEscolaridade]')
        .select('1graucomp')
        .should('have.value', '1graucomp')

        //TODO validar opções do combo
    })

    it('Combo Multiplo', ()=>{
        cy.get('[data-testid=dataEsportes]')
        .select(['natacao','Corrida', 'nada']) // use value insted of text

        //TODO validar opções selecionadas do combo multiplo

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