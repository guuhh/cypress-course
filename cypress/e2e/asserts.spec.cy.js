/// <reference types="cypress" />

it('Equality', () => {
    const a = 1;
    expect(a).equal(1);  
    expect(a, 'Should be 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b');
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true
    expect(b).to.be.null
    expect(a).to.be.not.null
    expect(c).to.be.undefined
})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).to.be.equal(obj)

    expect(obj).to.be.deep.equal({a: 1, b: 2}) // needs the deep
    expect(obj).eql({a: 1, b: 2})

    expect(obj).include({a: 1, b: 2})
    expect(obj).include({a: 1})

    expect(obj).to.have.property('b')
    expect(obj).to.have.property('b', 2)

    expect(obj).to.not.be.empty

    expect({}).to.be.empty

})

it('Arrays', () => {
    const arr = [1,2,3];

    expect(arr).to.have.members([1,2,3]) // should pass full aray
    expect(arr).to.include.members([2,3]) // it is able to pass just part of the full array
    expect(arr).to.not.be.empty

    expect({}).to.be.empty
})

it('Types', () => {
    const num = 1;
    const str = 'String';

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.a('array')
})

it('String', () => {
    const str = 'String of test'

    expect(str).to.be.equal('String of test')
    expect(str).to.have.length(14)
    expect(str).to.contains('of')

    //regex - regular expression
    expect(str).to.match(/of/) //should contain
    expect(str).to.match(/^String/) //should initialize with "String"
    expect(str).to.match(/test$/) //should ending with "test"
    expect(str).to.match(/.{14}/) //should have 14 characteres
    expect(str).to.match(/\w+/) //should exist only words
    expect(str).to.match(/\D+/) //should not exist numbers

})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(5)

    expect(floatNumber).to.be.equal(5.2123) // Should be equal to decimal case of float number
    expect(floatNumber).to.be.closeTo(5.2, 0.1)
    expect(floatNumber).to.be.closeTo(5.21, 0.01)
    expect(floatNumber).to.be.closeTo(5.212, 0.001)
    expect(floatNumber).to.be.above(5)
})