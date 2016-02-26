var mongoose = require('mongoose');
var Failures = mongoose.model('Failures');

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};


module.exports.getAllFailuresHistory = function (req, res) {
	sendJsonResponse(res,200, { "status": "success" });
};
//


//	sendJsonResponse(res, 200, { "status": "An Instance has been created" });

module.exports.failureHistoryGetOne = function (req, res) {
		sendJsonResponse(res, 200, { "status": "success" });
};
module.exports.failureHistoryUpdateOne = function (req, res) {
		sendJsonResponse(res, 200, { "status": "An instance has been updated" });
};
module.exports.failureHistoryDeleteOne = function (req, res) {
	sendJsonResponse(res, 200, { "status": "Instance Deleted!" });
};

//create failure
//localhost:1337/api/failures
module.exports.failureCreate = function (req, res) {
	Failures.create({
		type: req.body.type,
		mitigation : req.body.mitigation,
		geoCoord : [parseFloat(req.body.lng), parseFloat(req.body.lat)],
		severityLevel : req.body.severityLevel,
	}, function (err, failure) {
		if (err) {
			sendJsonResponse(res, 400, err);
		} else {
			sendJsonResponse(res, 201, failure);
		}
	});
};
//get all
//localhost:1337/api/failures
module.exports.getAllFailures = function (req, res) {
	Failures
	.find()
	.exec(function (err, failure) {
		sendJsonResponse(res, 200, failure);
		console.log("In the failures");
	});
};
//get specfic document
//localhost:1337/api/failures/:failureid
module.exports.failureGetOne = function (req, res) {
	var value = req.path;
	value = value.split('/');
	var failureId = req.params.failureid;
	//value = value[2];
	Failures
	.findById(failureId)
	.exec(function (err, failure) {
		sendJsonResponse(res, 200, failure);
		console.log(req.params.failureId+"Value:" +value+ "Value[1]"+value[1]+"Value[2]"+value[2]);
	});
};

module.exports.failureUpdateOne = function (req, res) {
	if (!req.params.failureid) {
		sendJsonResponse(res, 404, { "Message": "Failure Instance not found" });
		return;
	}
	Failures
	.findById(req.params.failureid)
	.exec(
		function (err, failure) {
			failure.type = req.body.type;
			failure.mitigation = req.body.mitigation;
			failure.geoCoord = [parseFloat(req.body.lng), parseFloat(req.body.lat)];
			failure.severityLevel = req.body.severityLevel;
			failure.save(function (err, failure) {
				if (err) {
					sendJsonResponse(res, 404, err);
				}
				else {
					sendJsonResponse(res, 200, failure);
				}
			});
		});
};

//delete
//localhost:1337/api/failures/:failureid
module.exports.failureDeleteOne = function (req, res) {
	var failureId = req.params.failureid;
	if (failureId) {
		Failures
		.findByIdAndRemove(failureId)
		.exec(
			function (err, failure) {
				if (err) {
					sendJsonResponse(res, 404, err);
					return;
				}
				sendJsonResponse(res, 204, null);
				console.log(failureId);
			});
	}
	else {
		sendJsonResponse(res, 404, { "message": "No Failure ID matched" });
	}	
};

// JavaScript source code

/*
//Failure Cause API functions
router.get('failuresCause', ctrlFailure.getAllFailuresCause);
router.post('/failuresCause', ctrlFailure.failureCauseCreate);
router.get('/failuresCause/:failureCauseid', ctrlFailure.failureCauseReadOne);
router.put('/failuresCause/:failureCauseid', ctrlFailure.failureCauseUpdateOne);
router.delete('/failuresCause/:failureCauseid', ctrlLFailure.failureCauseDeleteOne);


//Failure List API functions
router.get('failuresList', ctrlFailure.getAllFailuresList);
router.post('/failuresList', ctrlFailure.failureListCreate);
router.get('/failuresList/:failureListid', ctrlFailure.failureListReadOne);
router.put('/failuresList/:failureListid', ctrlFailure.failureListUpdateOne);
router.delete('/failuresList/:failureListid', ctrlLFailure.failureListDeleteOne);*/

//Failure main API fucntions

