var assert = require('assert');
var Promise = global.Promise || require("es6-promise").Promise;
Promise.any = require('../');

describe('Promise.any()', function () {
	it('should handle promises where the first one resolves and the second one rejects', function (done) {
		var promises = [Promise.resolve('a'), Promise.reject('b')];
		Promise.any(promises).then(function (value) {
			assert.equal(value, 'a');
			done();
		}, function () {
			assert.fail(null, null, "Reject callback was executed, but it shouldn't have");
			done();
		});
	});
	it('should handle promises where the first one rejects and the second one resolves', function (done) {
		var promises = [Promise.reject('a'), Promise.resolve('b')];
		Promise.any(promises).then(function (value) {
			assert.equal(value, 'b');
			done();
		}, function () {
			assert.fail(null, null, "Reject callback was executed, but it shouldn't have");
			done();
		});
	});
	it('should handle promises where both resolve', function (done) {
		var promises = [Promise.resolve('a'), Promise.resolve('b')];
		Promise.any(promises).then(function (value) {
			assert.equal(value, 'a');
			done();
		}, function () {
			assert.fail(null, null, "Reject callback was executed, but it shouldn't have");
			done();
		});
	});
	it('should handle promises where both reject', function (done) {
		var promises = [Promise.reject('a'), Promise.reject('b')];
		Promise.any(promises).then(function (value) {
			assert.fail(null, null, "Resolve callback was executed, but it shouldn't have");
			done();
		}, function () {
			done();
		});
	});
});
