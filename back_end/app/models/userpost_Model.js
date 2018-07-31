const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userPostSchema = new Schema({
    userID: String,
    title: String,
    location: String,
    time: Date,
    body: String,
    isFulfilled: Boolean,
})

module.exports = mongoose.model('User_Post', userPostSchema);