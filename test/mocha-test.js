'use strict';

var validation = require('../lib/index.js');
var assert = require('assert');

describe('#Verify node-validation module...', function() {

	var emails = new Array();

	// before('---> Prepare all datas for testing...', function() {
	emails.push('goden.incredible@gmail.com');
	emails.push('goden690426@yahoo.com.tw');
	emails.push('1234@123.222');
	emails.push('^abc.demo.com');
	// });
	
	describe('#Verify isEmail()...', function() {
		emails.forEach(function(email) {
			describe('--> Verify [' + email + '] format...', function() {
				it('Verify if [' + email + '] is valid....', function() {
					assert.equal(true, validation.isEmail(email), '[' + email + '] is valid.');
				});
			});
		});
	});

	var strings = new Array();
	strings.push('aaaaabbbbbbcccc');
	strings.push('&^%$#');
	strings.push('12345');

	describe('#Verify isEnglish()...', function() {
		strings.forEach(function(str) {
			describe('Verify if [' + str + '] format...', function() {
				it('Verify if [' + str + '] is valid...', function() {
					assert.equal(true, validation.isEnglish(str));
				});
			});
		});
	});

});
