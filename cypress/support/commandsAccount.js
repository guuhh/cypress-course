import loc from '../support/locators'

Cypress.Commands.add('accessMenuAccount', () =>{
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
    cy.get('h2').should('contain','Contas')
    
})

Cypress.Commands.add('insertNewAccount', account =>{
    cy.get(loc.ACCOUNT.NAME_FIELD).type(account)
    cy.get(loc.ACCOUNT.BTN_SAVE).click()
    cy.get(loc.TOAST.MESSAGE).should('contain', 'Conta inserida com sucesso!')
    //cy.get(loc.TOAST.CLOSE).click()
})