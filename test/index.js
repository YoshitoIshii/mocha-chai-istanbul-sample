var assert = require('assert');
var expect = require('chai').expect;
var greeting = require('../index');

describe('greeting', function(){
    it('should be return greeting', function(){
        assert.equal(greeting("amy"), "hello, amy");
        assert.equal(greeting("james"), "hello, james");
    });
    it('should be return another greeting when name is tom', function(){
        assert.equal(greeting("tom"), "hi! tom");
    });
    it('should be return another greeting when name is jack', function(){
        assert.equal(greeting("jack"), "hey! jack");
    });
    it('should be error when name is not reserved', function(){
        expect(greeting).to.throw(Error);
    });
});
