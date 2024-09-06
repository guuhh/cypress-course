/// <reference types="cypress"/>

describe('functional integrated tests', () => {

    before(()=> {
        cy.visit('https://barrigareact.wcaquino.me')
    })
       it('login', ()=>{
            cy.get('.input-group > .form-control').type('guga_drigues@hotmail.com')
            cy.get(':nth-child(2) > .form-control').type('123456')
            cy.get('.btn').click()
       }) 
})