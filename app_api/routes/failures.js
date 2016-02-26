//dependancies
var express = require('express');
var router = express.Router();

//reference to main content of API
var ctrlFailure = require('../controllers/failures');
var ctrlFailureHistory = require('../controllers/failuresHistory');

//Failure History Schema
router.get('/', function (req, res) {
	res.send('To test respond with a resource');
});

//router.get('/failuresHistory', ctrlFailure.getAllFailuresHistory);

//router.get('/failuresHistory/:failureHistoryid', ctrlFailure.failureHistoryGetOne);
//router.put('/failuresHistory/:failureHistoryid', ctrlFailure.failureHistoryUpdateOne);
//router.delete('/failuresHistory/:failureHistoryid', ctrlFailure.failureHistoryDeleteOne);

//Failure Cause API functions
/*router.get('failuresCause', ctrlFailure.getAllFailuresCause);
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

router.get('/failures', ctrlFailure.getAllFailures);
router.post('/failures', ctrlFailure.failureCreate);
router.post('/failuresHistory/:failureid', ctrlFailureHistory.failureHistoryCreate);




//Failure main API fucntions


router.get('/failures/:failureid', ctrlFailure.failureGetOne);
router.put('/failures/:failureid', ctrlFailure.failureUpdateOne);
router.delete('/failures/:failureid', ctrlFailure.failureDeleteOne);
module.exports = router;
// JavaScript source code*/
