/// <reference types="cypress"/>

describe('Fixtures', () =>{

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

    })

    beforeEach(() => {
        cy.reload()
    })

    it('Fixtures test', function() {
        cy.fixture('userData').as('usuario').then(() => {
            cy.get('#formNome').type(this.usuario.nome)
            cy.get('#formSobrenome').type(this.usuario.sobrenome)
            cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click()
            cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`).click()
            cy.get('#formEscolaridade').select(this.usuario.escolaridade)
            cy.get('#formEsportes').select(this.usuario.esportes)

            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')
        })
        
        
    })
})