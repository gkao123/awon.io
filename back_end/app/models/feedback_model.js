const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var feedbackSchema = new Schema({
    contactInfo: String,
    feedback: String
})

module.exports = mongoose.model('feedback', feedbackSchema);