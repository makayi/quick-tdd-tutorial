const {expect} = require('chai')
const {add,multiply,sub} = require('../libs/libs')

describe('Libs Tests',function(){

    it('returns sum of two numbers',function(){
        var sum= add(5,5);
        expect(sum).to.equal(10);
    })

    it('returns product of two numbers',function(){
        var product= multiply(5,5);
        expect(product).to.equal(25);
    })
    it('returns result of subtracting two numbers',function(){
        var product= sub(5,5);
        expect(product).to.equal(0);
})
})
