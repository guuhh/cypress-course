//const { it } = require("mocha");

// describe('empty spec', () => {
  it('nada agora', () => { } )
    // cy.visit('https://example.cypress.io')
  // })
// })

//  function soma(a, b){
//   return a + b;
//  }

// const soma = function sum(a, b){
//   return a + b;
// }

// const soma = (a, b) => {
//   return a + b
// }

// com chaves, deve-se adicionar o "return"
//const soma = (a, b) => a + b 

//const soma = (a) => a + a

// para apenas 1 parametro nao precisa dos parenteses
//const soma = a => a + a

const soma = () => 5 + 5
console.log(soma(1,4));

it('a function test...', function() {
  console.log('Function', this)
})

it('an arrow function test...', () => {
     console.log('Arrow', this)
})