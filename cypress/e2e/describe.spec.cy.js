/// <reference types="cypress" />

it.skip('A external test...', () => {

})

describe('Should  create a group of tests...', () => {

    it('An internal test...', () => {

    })

    describe('Should create a sub-group inside of a group..', () =>{
         
        it.only('An internal test inside of sub-gropup...', () => {

        })

    })
})