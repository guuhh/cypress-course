/// <reference types="cypress"/>
import loc from '../../support/locators'
import '../../support/commandsAccount'

describe('functional integrated tests', () => {

    before(()=> {
        cy.login('guga_drigues@hotmail.com','123456')
        cy.restApp()
    })

   //beforeEach(() =>{
        //cy.reload()
    //})
       it('Create an account', () =>{
            cy.accessMenuAccount()
            cy.insertNewAccount('Conta de teste')

       }) 
       it('Update an existent account', () =>{
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get('h2').should('contain','Contas')
        cy.xpath(loc.ACCOUNT.XP_BTN_UPDATE, {timeout:3000})
        .click()
        cy.get(loc.ACCOUNT.NAME_FIELD)
        .type('{selectAll}{del}')
        .type('Conta de teste atualizada')
        cy.get(loc.ACCOUNT.BTN_SAVE).click()
        cy.get(loc.TOAST.MESSAGE).should('contain','Conta atualizada com sucesso!')
        cy.xpath(loc.ACCOUNT.XP_NAME_LABEL_UPDATED).then($el =>{
            expect($el).to.have.text('Conta de teste atualizada')
        })
       }) 
    
})