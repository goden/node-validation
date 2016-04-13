'use strict';

// var validation = require('../lib/index.js');
var chai = require('chai');

var expect = chai.expect;

var goden = {
	name: 'Goden',
	age: 35,
	wife: {
		name: 'Grace',
		age: 35
	},
	kids: [{
		name: 'Serene',
		age: 1
	}]
};

describe('#Verify Chai Assertion library...', function() {

	describe('Data Model shows as below...', function() {
		it('goden = ' + JSON.stringify(goden), function() {
			// empty function, do nothing.
		});
	});

	describe('.not() - Negates any of assertions following in the chain.', function() {
		it('Verify expect(goden.wife.name).to.not.equal(\'Mary\')...', function() {
			expect(goden.wife.name).to.not.equal('Mary');
		});

		it('Verify expect(goden.age).not.equal(20)...', function() {
			expect(goden.age).to.not.equal(20);
		});

		it('Verify expect(goden.wife).to.have.property(\'age\').and.to.not.equal(20)...', function() {
			expect(goden.wife).to.have.property('age').and.to.not.equal(20);
		});
	});

	// describe('.deep() - Sets the \'deep\' flag, later used by the \'equal\' and \'property\' assertions.', function() {
	// 	it('', function() {

	// 	});

	// 	it('', function() {
			
	// 	});

	// 	it('', function() {
			
	// 	});
	// });

	describe('.any() - Sets the any flag, (opposite of the all flag) later used in the \'keys\' assertion.', function() {
		it('Verify expect(goden).to.have.any.keys(\'name\', \'age\')...', function() {
			expect(goden).to.have.any.keys('name', 'age');
		});
	});

	describe('.a() & .an() - The \'a\' and \'an\' assertions are aliases that can be used either as language chains or to assert a value\'s type.', function() {
		it('expect(goden.age).to.be.a(\'number\')', function() {
			expect(goden.age).to.be.a('number');
		});
		it('expect(goden.wife).to.be.a(\'object\')', function() {
			expect(goden.wife).to.be.a('object');
		});
		it('expect(goden.kids).to.be.an(\'Array\')', function() {
			expect(goden.kids).to.be.an('Array');
		});
	});

	describe('.incldue() & .contain()', function() {
		it('expect([1, 2, 3]).to.include(2)...', function() {
			expect([1, 2, 3]).to.include(2);
		});
		it('expect(goden.kids[0].name).to.contain(\'Serene\')...', function() {
			expect(goden.kids[0].name).to.contain('Serene');
		});
		it('expect(goden.wife).to.include.keys(\'name\')...', function() {
			expect(goden.wife).to.include.keys('name');
		});
	});

});