/// <reference types="cypress" />

describe('Work with basic elements', () =>{

    //Hooks - Run one time before to all tests
    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

    it('Alert', () =>{
        cy.get('#alert').click()
        cy.on('window:alert', msg =>{
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    })

    it('Alert com mock', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })
    it('Confirm', () =>{
        
        cy.on('window:confirm', confirm =>{
            expect(confirm).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', alert =>{
            expect(alert).to.be.equal('Confirmado')
        })
        cy.get('#confirm').click()
    })

    it('Confirm com mock 2 chamadas', () =>{
        const stub = cy.stub().as('confirm')

        cy.on('window:confirm', stub)
        cy.on('window:alert', stub)
        cy.get('#confirm').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Confirm Simples')
            expect(stub.getCall(1)).to.be.calledWith('Confirmado')
        })
    })

    it('Deny', () =>{
        
        cy.on('window:confirm', confirm =>{
            expect(confirm).to.be.equal('Confirm Simples')
            // this return false change the status defaul of confirm to deny
            return false 
        })
        cy.on('window:alert', alert =>{
            expect(alert).to.be.equal('Negado')
        })
        cy.get('#confirm').click()
    })
    it('Prompt', () =>{
        
        cy.window().then(win =>{
            cy.stub(win,'prompt').returns('42')
        })

        cy.on('window:confirm', confirm =>{
            expect(confirm).to.be.equal('Era 42?')
        })
        cy.on('window:alert', alert =>{
           expect(alert).to.be.equal(':D')
        }
        )
        cy.get('#prompt').click()
    })

    it('Desafio Cadastro', () =>{

        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)

        cy.get('#formCadastrar').click().then(() =>
            expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))
        cy.get('#formNome').type('Gustavo')

        cy.get('#formCadastrar').click().then(() =>
            expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))
        cy.get('[data-cy=dataSobrenome]').type('Rodrigues')

        cy.get('#formCadastrar').click().then(() =>
            expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))

        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1').should('contain', 'Cadastrado!')
    })
})  