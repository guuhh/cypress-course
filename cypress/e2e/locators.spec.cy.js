/// <reference types="cypress"/>

describe('work with basic elements', () =>{

    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

    })

    beforeEach(() =>{
        cy.reload()
    })

    it('using jquery selector', ()=>{
        //cy.get(':nth:child(1) > :nth=child(3) > [type="buton"]')
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3)')
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~ td:eq(3) > input').type("example1")
        cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) input').clear()
        

        
    })

    it('using xpath', () =>{
        cy.xpath('(//input[@type=\'button\'][@value=\'Clique aqui\'])[1]').click()
        cy.xpath('//input[contains(@onclick, \'Francisco\')]').click()
        // following the DOM structure using xPath: /html/body//center/form/input[3]
        // skipping all DOM structure /html/body: //
        //https://www.red-gate.com/simple-talk/development/dotnet-development/xpath-css-dom-and-selenium-the-rosetta-stone/
       //*[@id="tabelaUsuarios"]/tbody/tr[1]/td[3]/input

    })
})