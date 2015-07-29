var Promise = global.Promise || require("es6-promise").Promise;

module.exports = function (entries) {
	return new Promise(function (resolve, reject) {
		var succeeded = false;
		var failures = 0;

		entries.forEach(function(entry) {
			entry.then(function () {
				if (!succeeded) {
					succeeded = true;
					resolve.apply(resolve, arguments);
				}
			}, function () {
				failures++;
				if (failures == entries.length) {
					reject();
				}
			});
		});
	});
};
