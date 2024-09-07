/// <reference types="cypress"/>

describe('helpers', ()=>{
     
    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

    it('wrap exemple 1', ()=>{
        const obj = {name:'User', old:20}
        expect(obj).to.have.property('name')

        //.not run, because object dont have ".should()"
        //obj.should('have.property','nome')
        //cy.wrap(obj).should('have.property','name')
        //cy.get('#formNome').type("funciona?")

        cy.get('#formNome').then($el =>{
            $el.val("funciona via jquery lib?")
        })



    })

    it('wrap exemple 2', ()=>{
        const obj = {name:'User', old:20}
        expect(obj).to.have.property('name')

        const promise = new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(10)
            }, 500)
        })

        //This promise async can be solved in any moment dont repecting the order.
        promise.then(num => console.log(num))
        cy.get('#buttonSimple').then(() => console.log("encontrei primeiro botão!"))
        cy.get('#buttonSimple').then(() => console.log("Encontrei o segundo botão!"))
        
        //To repect the order of execution, the promise have to wrapped.
        cy.wrap(promise).then(ret => console.log("resultado synced: "+ret))
        
        cy.wrap(1).then(num => {
            return 2
        }).should('be.equal', 2)
    })

    it('it...', ()=>{
        const obj = {name:'User', old:20}

        cy.wrap(obj).should('have.property','name','User')
        cy.wrap(obj).its('name').should('be.equal','User')

        const obj2 = {name:'User', old:20, address: {street:'dos bobos'}}
        cy.wrap(obj2).its('address').should('have.property','street')
        cy.wrap(obj2).its('address').its('street').should('be.equal', 'dos bobos')
        cy.wrap(obj2).its('address').its('street').should('contains', 'bobos')
        cy.title().its('length').should('eq',20)
        cy.title().its('length').should('be.equal',20)
    })

    it('Invoke..', () =>{
        const getValue = () => 1;
        const soma = (a,b) => a + b;
        cy.wrap({ fn:getValue}).invoke('fn').should('be.equal', 1)
        cy.wrap({fn: soma}).invoke('fn',2,5).should('be.equal', 7)
    })

    it('Invoke val() jQuery..', () =>{
        
        cy.get('#formNome').invoke('val', 'put value using val jQuery via Invoke')
        cy.window().invoke('alert', 'can you see it?')
        cy.get('#resultado').invoke('html', '<input type="button" value="hacked">')
    })
})