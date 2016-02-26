//DEPENDANCIES
var mongoose = require('mongoose');

//SCHEMA

var FailureListSchema = mongoose.Schema({
    rockfall: Boolean,
    landslide: Boolean,
    breakage: Boolean,
    other: String, 
    crack: Boolean
});

var FailureCauseSchema = mongoose.Schema({
    stress: Boolean,
    degradation: Boolean,
    deterioation: Boolean,
    fatique: Boolean,
    erosion: Boolean,
    demage: Boolean,
    other: String
});

var FailureHistorySchema = mongoose. Schema({
    description: String,
    date: String, 
    geoCoord: {type: [Number], index: '2dsphere'}
});

var failureSchema = mongoose.Schema({
    type: String,
    reason: [FailureListSchema],
    geoCoord: {type: [Number], index: '2dsphere'},
    mitigation: String,
    severityLevel: String,
    cause: [FailureCauseSchema],
    spotHistory: [FailureHistorySchema]
    });
    
  //  var FailureSchema = mongoose.model('FailureSchema', failureSchema);
    
    module.exports = mongoose.model('Failures', failureSchema);
    module.exports = mongoose.model('FailuresCause', FailureCauseSchema);
    module.exports = mongoose.model('FailuresHistory', FailureHistorySchema);
    module.exports = mongoose.model('FailuresList', FailureListSchema);