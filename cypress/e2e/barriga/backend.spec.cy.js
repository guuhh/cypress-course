/// <reference types="cypress"/>

describe('Test in backend level', () =>{

    before(() =>{

    })

    beforeEach(()=>{
        
    })

    it('should create an account', () =>{
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body:{
                email: "guga_drigues@hotmail.com",
                senha: "123456",
                redirecionar:false 
            }
        }).then($res => {
            console.log($res)
            expect($res.body).to.have.property('nome','Gustavo')
            
        })
        .its('body.nome').then(nome => {
            console.log(nome)
            const bodyName = nome.toString()
            expect(bodyName).to.have.equal('Gustavo')
        })
        //.its('body.token').should('not.be.empty')
        
    })
})