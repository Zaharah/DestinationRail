var mongoose = require('mongoose');
var Failures = mongoose.model('Failures');

var sendJsonResponse = function (res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.failureHistoryCreate = function (req, res) {
	var failureId = req.params.failureid;
	if (failureId) {
		Failures
      .findById(req.params.failureid)
      .select('spotHistory')
      .exec(
			function (err, failure) {
				if (err) {
					sendJSONresponse(res, 400, err);
				} else {
						doAddFailureHistory(req, res, failure);
					sendJsonResponse(res, 201, { message: 'Failure updated!', data: failure });
				}
			}
		);
	} else {
		sendJSONresponse(res, 404, {
			"message": "Not found, locationid required"
		});
	}
};

var doAddFailureHistory = function (req, res, failure) {
	console.log('I am from Add failure history');
};