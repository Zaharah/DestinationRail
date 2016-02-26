var mongoose = require('mongoose');

var ballastSchema = new mongoose.Schema({
    installtionDate: String,
    weight: Number,
    thickness: Number,
    tonnage: Number
});

 module.exports = mongoose.model('Ballast', ballastSchema);