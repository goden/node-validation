'use strict';

var validation = require('../lib/index.js');
var assert = require('assert');

describe('#Verify each function in node-validation module is ok.', function() {

	var emails = new Array();

	// before('---> Prepare all datas for testing...', function() {
		emails.push('goden.incredible@gmail.com');
		emails.push('goden690426@yahoo.com.tw');
		emails.push('1234@123.222');
		emails.push('^abc.demo.com');
	// });

	emails.forEach(function(email) {
		describe('---> Verify the ' + email + ' format is valid...', function() {
			it('Verify if [' + email + '] is valid....', function() {
				assert.equal(true, validation.isEmail(email), '[' + email + '] is valid.');
			});
		});
	});

});
