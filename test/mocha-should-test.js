'use strict';

// var validation = require('../lib/index.js');
var chai = require('chai');
var expect = chai.should();

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

	// =============================================================================================================

	// expect
	describe('.not() - Negates any of assertions following in the chain.', function() {
		it('Verify goden.wife.name.should.have.equal(\'Grace\')...', function() {
			goden.wife.name.should.have.not.equal('Mary');
		});

		it('Verify goden.age.should.not.equal(20)...', function() {
			goden.age.should.not.equal(20);
		});

		it('Verify goden.wife.should.have.property(\'age\').and.not.equal(20)...', function() {
			goden.wife.should.have.property('age').and.not.equal(20);
		});
	});


	describe('.a() & .an() - The \'a\' and \'an\' assertions are aliases that can be used either as language chains or to assert a value\'s type.', function() {
		it('Verify goden.age.to.be.a(\'number\')', function() {
			// expect(goden.age).to.be.a('number');
			goden.age.should.be.a('number');
		});
		it('Verify goden.wife.should.be.a(\'object\')', function() {
			goden.wife.should.be.a('object');
		});
		it('goden.kids.should.be.an(\'Array\')', function() {
			goden.kids.should.be.an('Array');
		});
	});

	describe('.incldue() & .contain()', function() {
		it('Verify [1, 2, 3].should.include(2)...', function() {
			[1, 2, 3].should.include(2);
		});
		it('Verify goden.kids[0].name.should.contain(\'Serene\')...', function() {
			goden.kids[0].name.should.contain('Serene');
		});
		it('Verify goden.wife.should.include.keys(\'name\')...', function() {
			goden.wife.should.include.keys('name');
		});
	});

});